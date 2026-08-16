export function initApiInterceptor() {
  const CLONER_DATA_MANIFEST = {
    "https://api.penpencil.co/v1/userLocation/getLocation": "data/myagrc.json",
    "https://unleash-edge-prod.penpencil.co/api/frontend?environment=production&appName=gcms-admin&sessionId=230202299&properties%5BHOME_PAGE_REVAMP_EXP%5D=v2_3addb555de2de1d9": "data/d8r65s.json",
    "https://firebase.googleapis.com/v1alpha/projects/-/apps/1:252537344732:web:59fbcdbca9e85979c4da19/webConfig": "data/smq7oq.json",
    "https://firebaseinstallations.googleapis.com/v1/projects/physics-wallah-65ada/installations": "data/mpy4nn.json",
    "https://firebaseremoteconfig.googleapis.com/v1/projects/physics-wallah-65ada/namespaces/firebase:fetch?key=AIzaSyApsQyaMPr0NBBXi9OR7x7y0Kbc5qfLNc0": "data/der5u0.json",
    "https://m.stripe.com/6": "data/1l83m1.json"
  };

  const originalFetch = window.fetch ? window.fetch.bind(window) : null;

  function resolveUrl(u) {
    try {
      return new URL(u, document.baseURI).href;
    } catch (e) {
      return u;
    }
  }

  function isExternalApi(urlStr) {
    if (!urlStr) return false;
    try {
      const parsed = new URL(urlStr, document.baseURI);
      if (parsed.origin === window.location.origin) return false;
      return true;
    } catch (e) {
      return false;
    }
  }

  function createMockResponse() {
    const dummyJson = JSON.stringify({ success: true, status: 200, data: {}, result: [] });
    return new Response(dummyJson, {
      status: 200,
      statusText: "OK",
      headers: { "Content-Type": "application/json" }
    });
  }

  if (originalFetch) {
    window.fetch = function(input, init) {
      const url = typeof input === "string" ? input : (input && input.url);
      const abs = url ? resolveUrl(url) : null;

      if (abs && CLONER_DATA_MANIFEST[abs]) {
        return originalFetch(CLONER_DATA_MANIFEST[abs], init).catch(() => createMockResponse());
      }
      if (abs && isExternalApi(abs)) {
        return Promise.resolve(createMockResponse());
      }
      return originalFetch(input, init).catch(() => createMockResponse());
    };
  }

  const OriginalXHR = window.XMLHttpRequest;
  function ClonerXHR() {
    const xhr = new OriginalXHR();
    const origOpen = xhr.open;
    let isExt = false;

    xhr.open = function(method, url) {
      const abs = resolveUrl(url);
      if (CLONER_DATA_MANIFEST[abs]) {
        return origOpen.call(xhr, "GET", CLONER_DATA_MANIFEST[abs], true);
      }
      if (isExternalApi(abs)) {
        isExt = true;
        return origOpen.call(xhr, "GET", "data/myagrc.json", true);
      }
      return origOpen.apply(xhr, arguments);
    };

    const origSend = xhr.send;
    xhr.send = function() {
      if (isExt) {
        try {
          return origSend.apply(xhr, arguments);
        } catch (e) {}
      }
      return origSend.apply(xhr, arguments);
    };
    return xhr;
  }
  window.XMLHttpRequest = ClonerXHR;
}
