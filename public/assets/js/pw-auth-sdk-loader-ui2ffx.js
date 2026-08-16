(function () {
  const FALLBACK_VERSION = "1.2.3";

  function isValidVersion(str) {
    return typeof str === "string" && /^\d+\.\d+\.\d+$/.test(str.trim());
  }

  function safeGetQueryVersion() {
    try {
      const script = document.currentScript;
      if (!script || !script.src) return null;

      const queryString = script.src.split("?")[1] || "";
      const params = new URLSearchParams(queryString);
      const qpVersion = params.get("version");
      return isValidVersion(qpVersion) ? qpVersion : null;
    } catch {
      return null;
    }
  }

  // 🔴 CHANGED: removed cdnUrlBase param
  function loadFallbackVersion(reason) {
    try {
      let versionToRun = safeGetQueryVersion() || FALLBACK_VERSION;

      console.error(
        "[PWAuthSDKLoader] Recovering from error. Reason:",
        reason,
        "Using version:",
        versionToRun,
      );

      const styleId = "pw-auth-web-sdk-style";
      const scriptId = "pw-auth-web-sdk-script";

      const existingStyle = document.getElementById(styleId);
      if (!existingStyle) {
        const link = document.createElement("link");
        link.id = styleId;
        link.rel = "stylesheet";
        link.href = `${cdnUrl}/v${versionToRun}/pw-auth-web-sdk.style.css`;
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);
      }

      let script = document.getElementById(scriptId);
      if (script) {
        script.parentNode.removeChild(script);
      }

      script = document.createElement("script");
      script.id = scriptId;
      script.type = "module";
      script.crossOrigin = "anonymous";
      script.src = `${cdnUrl}/v${versionToRun}/pw-auth-web-sdk.min.js`;

      script.onload = () => {
        window.dispatchEvent(new Event("PWAuthSDKReady"));
      };
      script.onerror = (err) => {
        console.error("[PWAuthSDKLoader] Fallback script failed to load:", err);
      };

      document.head.appendChild(script);
    } catch (fallbackError) {
      console.error(
        "[PWAuthSDKLoader] Fatal error while applying fallback version:",
        fallbackError,
      );
    }
  }

  try {
    const version = "1.7.103"; // replaced by script
    const styleId = "pw-auth-web-sdk-style";
    const scriptId = "pw-auth-web-sdk-script";
    const cdnUrl = "https://static.pw.live/web/sdk/auth-new/prod"; // replaced per env

    function isMozillaBrowser() {
      return (
        typeof navigator !== "undefined" &&
        navigator.userAgent.includes("Firefox")
      );
    }

    function getQueryParams() {
      const script = document.currentScript;
      const queryString =
        script && script.src ? script.src.split("?")[1] || "" : "";
      const params = new URLSearchParams(queryString);
      return {
        versionToRun: params.get("version") || version,
      };
    }

    let { versionToRun } = getQueryParams();

    if (!isValidVersion(versionToRun)) {
      console.error(
        "[PWAuthSDKLoader] Invalid version detected:",
        versionToRun,
        "– falling back to default version:",
        version,
      );
      versionToRun = version;
    }

    function injectOrUpdate(tagName, attributes) {
      let element = document.getElementById(attributes.id);

      if (element) {
        if (element.src && !element.src.includes(`/v${versionToRun}/`)) {
          element.parentNode.removeChild(element);
          element = null;
        } else if (
          element.href &&
          !element.href.includes(`/v${versionToRun}/`)
        ) {
          element.parentNode.removeChild(element);
          element = null;
        }
      }

      if (!element) {
        element = document.createElement(tagName);
        Object.keys(attributes).forEach((key) => {
          element[key] = attributes[key];
        });
        element.crossOrigin = "anonymous";
        document.head.appendChild(element);
      }
    }

    injectOrUpdate("link", {
      id: styleId,
      rel: "stylesheet",
      href: `${cdnUrl}/v${versionToRun}/pw-auth-web-sdk.style.css`,
    });

    if (!isMozillaBrowser()) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `${cdnUrl}/v${versionToRun}/pw-auth-web-sdk.min.js`;
      script.type = "module";
      script.crossOrigin = "anonymous";

      script.onload = () => {
        window.dispatchEvent(new Event("PWAuthSDKReady"));
      };
      script.onerror = (err) => {
        console.error("[PWAuthSDKLoader] Error loading script:", err);
        loadFallbackVersion("main script load error");
      };

      document.head.appendChild(script);
    } else {
      window.initPWAuthWebSDK = async function (props = {}) {
        try {
          const url = new URL(
            `${cdnUrl}/v${versionToRun}/pw-auth-web-sdk.min.js`,
            window.location.origin,
          );
          const module = await import(url);

          if (module && module.initApp) {
            window.dispatchEvent(new Event("PWAuthSDKReady"));
            return module.initApp({ ...props });
          } else {
            throw new Error("initApp function not found in the module");
          }
        } catch (error) {
          console.error(
            "[PWAuthSDKLoader] Error loading or initializing PWAuthWebSDK:",
            error,
          );
          loadFallbackVersion("dynamic import error (Firefox)");
        }
      };
    }
  } catch (e) {
    console.error(
      "[PWAuthSDKLoader] Fatal error in loader, applying fallback version:",
      e,
    );
    // 🔴 CHANGED: no hard-coded CDN
    loadFallbackVersion("top-level loader error");
  }
})();
