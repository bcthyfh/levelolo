var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a;
const e = "https://demo.pw.live/study", t = "https://pw.live/study", a = "https://dr.pw.live/study", n = "https://dr-www.pw.live/study", o = "https://analytics-api-dev.penpencil.co", r = "https://analytics-api-stage.penpencil.co", s = "https://analytics-api.penpencil.co", i = { shouldRegister: false, isCountryDropdownVisible: false, dialCode: "+91", countryName: "IN", mobileNumber: "", referCode: "", userName: "", requestType: "LOGIN", cameFromEdit: false, eventListeners: [], shouldUseV2AuthFlow: false, captchaToken: void 0, captchaSiteKey: "", countryCode: "IN" };
window.PW_AUTH_GLOBAL_STORE = { ...i };
const c = 6, _ = "Thank you for contacting us, please check your email for response.", l = () => {
  var _a2;
  const e2 = window == null ? void 0 : window.PWWebSDK;
  return void 0 !== e2 ? (_a2 = e2 == null ? void 0 : e2.config) == null ? void 0 : _a2.apiBaseUrl : null;
}, d = (o2, r2) => {
  var _a2, _b, _c, _d, _e2, _f;
  const s2 = (((_b = (_a2 = window.parent) == null ? void 0 : _a2.location) == null ? void 0 : _b.href) || "").includes("study-v2") || r2;
  if ((o2 == null ? void 0 : o2.includes("sarrthiias.com")) || (o2 == null ? void 0 : o2.includes("xylem.live"))) {
    return `${((_c = window == null ? void 0 : window.location) == null ? void 0 : _c.origin) || ""}/study-v2`;
  }
  if ((o2 == null ? void 0 : o2.includes("localhost")) || "https://staging-api.penpencil.co" === l() || ((_d = l()) == null ? void 0 : _d.includes("stage"))) {
    const e2 = ((_e2 = window == null ? void 0 : window.location) == null ? void 0 : _e2.origin) || "";
    return s2 ? `${e2}/study-v2` : `${e2}/study`;
  }
  if ("https://dev-api.penpencil.co" === l()) {
    const e2 = ((_f = window == null ? void 0 : window.location) == null ? void 0 : _f.origin) || "";
    return s2 ? `${e2}/study-v2` : `${e2}/study`;
  }
  return (o2 == null ? void 0 : o2.includes("demo")) ? s2 ? e.replace("study", "study-v2") : e : (o2 == null ? void 0 : o2.includes("https://dr.pw.live/")) ? s2 ? a.replace("study", "study-v2") : a : (o2 == null ? void 0 : o2.includes("https://dr-www.pw.live/")) ? s2 ? n.replace("study", "study-v2") : n : s2 ? t.replace("study", "study-v2") : t;
}, u = [{ title: "OTP not received on SMS" }, { title: "OTP not received on Whatsapp" }, { title: "OTP not received on Call" }], p = (e2) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e2).toLowerCase()), g = (e2, t2, a2, n2, o2) => {
  e2.addEventListener("click", (e3) => n2(e3, t2, a2, o2));
}, E = (e2, t2, a2, n2) => {
  const o2 = document.createElement("exam-card"), r2 = e2.split(" ").join("_");
  return o2.setAttribute("id", r2), o2.setAttribute("title", e2), o2.setAttribute("description", t2), o2.setAttribute("logoUrl", a2), o2.themeConfigV2 = n2, o2;
}, m = (e2, t2, a2) => {
  const n2 = document.createElement("class-card"), o2 = e2.split(" ").join("_");
  return n2.setAttribute("id", o2), n2.setAttribute("title", e2), n2.setAttribute("logoUrl", t2), n2.themeConfigV2 = a2, n2;
};
function w(e2) {
  return (e2 == null ? void 0 : e2.includes("batches")) ? "listing_page" : (e2 == null ? void 0 : e2.includes("study")) ? "study_page" : (e2 == null ? void 0 : e2.includes("centres")) ? "centre_page" : "signup_flow";
}
const h = () => {
  var _a2, _b;
  let e2 = "";
  return "undefined" != typeof window && (e2 = (_b = (_a2 = window == null ? void 0 : window.parent) == null ? void 0 : _a2.location) == null ? void 0 : _b.href), e2;
}, T = (e2, t2) => {
  if (!e2) return null;
  const a2 = e2.querySelector(`#${t2}`);
  return a2 || null;
}, O = (e2) => document.createElement(e2), S = (e2, t2) => {
  const a2 = O("label");
  return a2.setAttribute("for", e2), a2.innerText = t2, a2;
}, f = (e2, t2, a2 = false, n2) => {
  const o2 = O("input");
  return o2.classList.add("pw_auth-input"), a2 && o2.classList.add("pw_auth-remove_border"), o2.setAttribute("type", e2), o2.setAttribute("placeholder", t2), o2.setAttribute("autocomplete", "off"), o2;
}, I = (e2) => {
  e2 && (e2.classList.add("pw_auth-disable_cta"), e2.disabled = true);
}, C = (e2) => {
  e2 && (e2.classList.remove("pw_auth-disable_cta"), e2.removeAttribute("disabled"));
}, N = (e2, t2) => {
  "undefined" != typeof window && (void 0 === window.PW_AUTH_GLOBAL_STORE && (window.PW_AUTH_GLOBAL_STORE = { ...i }), window.PW_AUTH_GLOBAL_STORE[e2] = t2);
}, y = (e2) => {
  var _a2;
  return "undefined" != typeof window ? (_a2 = window.PW_AUTH_GLOBAL_STORE) == null ? void 0 : _a2[e2] : null;
}, b = (e2, t2) => {
  const a2 = document.querySelector(".pw_auth-logic_section");
  e2.classList.add("pw_auth-hidden"), e2.style.position = "absolute", e2.style.zIndex = "-1", e2.remove(), t2.classList.remove("pw_auth-hidden"), t2.style.position = "relative", t2.style.zIndex = "0", a2.innerHTML = "", a2.appendChild(t2);
}, L = (e2, t2) => {
  let a2 = "";
  const n2 = Array.from(e2).every((e3) => (a2 += e3.value, 1 === e3.value.length));
  t2.disabled = !n2, t2.classList.toggle("pw_auth-disable_cta", !n2), n2 && t2.dispatchEvent(new Event("click"));
}, v = (e2, t2, a2) => {
  const n2 = t2 ?? "/";
  window.location.href = a2 ? `${d(h(), a2)}/payment?redirectUrl=${n2}&info=${e2}` : `${d(h())}/payments?redirect_url=${n2}&info=${e2}`;
}, A = (e2) => {
  var _a2, _b;
  (((_b = (_a2 = window.parent) == null ? void 0 : _a2.location) == null ? void 0 : _b.href) || "").includes("study-v2") || e2 ? window.location.href = `${d(h(), e2)}/study` : window.location.href = `${d(h(), e2)}/batches/study`;
}, R = (e2, t2, a2) => {
  if (!t2) return;
  let n2 = d(h(), a2);
  e2 && (n2 = e2), ((e3 = "") => e3 == null ? void 0 : e3.includes("study-v2"))(t2) && (t2 = t2.replace("study-v2/", "")), ((e3 = "") => /(^|\/)watch(\/|\?|$)/.test(e3))(t2) && (n2 = n2.replace(new RegExp("/(?:study-v2|study)/?$"), "")), window.location.href = `${n2}/${t2}`;
};
function P(e2, t2, a2, n2, o2) {
  const r2 = document.createElement("nav-bar");
  r2.setAttribute("heading", t2), a2 && r2.setAttribute("showBackBtn", a2.toString()), r2.addEventListener("logoClick", n2), r2.themeConfigV2 = o2, e2.append(r2);
}
function U(e2) {
  for (; e2.firstChild; ) e2.removeChild(e2.firstChild);
}
function D(e2) {
  const t2 = document.createElement("div");
  t2.setAttribute("id", "pw_auth-toast_container"), e2.appendChild(t2);
}
const B = (e2) => W.test(e2), G = /[^0-9]/g, M = /^[0-9]+$/, k = /[^A-Za-z\s]/g, W = /^[A-Za-z][A-Za-z\s]*$/, F = /^[^\s].*$/, H = (e2, t2, a2, n2) => {
  var _a2, _b;
  e2 && (e2.addEventListener(t2, a2, { ...n2 || {} }), (_b = (_a2 = window.PW_AUTH_GLOBAL_STORE) == null ? void 0 : _a2.eventListeners) == null ? void 0 : _b.push({ element: e2, event: t2, handler: a2 }));
}, K = () => {
  var _a2;
  const e2 = (_a2 = window.PW_AUTH_GLOBAL_STORE) == null ? void 0 : _a2.eventListeners;
  e2 == null ? void 0 : e2.forEach(({ element: e3, event: t2, handler: a2 }) => {
    e3 && (e3 == null ? void 0 : e3.removeEventListener(t2, a2));
  }), e2 && (e2.length = 0);
}, $ = (e2, t2 = false) => {
  const a2 = T(e2, "pw_auth-spinner");
  a2 && (a2.style.display = t2 ? "block" : "none");
}, V = (e2) => {
  if (!e2) return {};
  return "test-series" === ((e2 == null ? void 0 : e2.orderSummaryRedirectTo) ?? "") ? { planId: (e2 == null ? void 0 : e2.planId) ?? "", categoryModeId: (e2 == null ? void 0 : e2.categoryModeId) ?? "", passId: (e2 == null ? void 0 : e2.passId) ?? "" } : { batchSlug: (e2 == null ? void 0 : e2.batchSlug) ?? "", planId: (e2 == null ? void 0 : e2.planId) ?? "" };
}, x = () => (window == null ? void 0 : window.innerWidth) <= 768, Y = () => /Android/i.test(navigator.userAgent), X = () => {
  if ("undefined" == typeof navigator) return "";
  const e2 = navigator.userAgent || "", t2 = e2.match(/OS (\d+[_\.]\d+(?:[_\.]\d+)?)/);
  if (t2) return t2[1].replace(/_/g, ".");
  const a2 = e2.match(/Android\s([\d.]+)/);
  if (a2) return a2[1];
  const n2 = e2.match(/Mac OS X (\d+[_\.]\d+(?:[_\.]\d+)?)/);
  if (n2) return n2[1].replace(/_/g, ".");
  const o2 = e2.match(/Windows NT (\d+\.\d+)/);
  return o2 ? o2[1] : "";
}, q = () => {
  var _a2;
  return "undefined" != typeof navigator && ((_a2 = navigator == null ? void 0 : navigator.userAgentData) == null ? void 0 : _a2.platform) || "undefined" != typeof navigator && (navigator == null ? void 0 : navigator.userAgent) || "" || "";
}, z = (e2, t2 = "error") => {
  const a2 = document.getElementById("pw_auth-toast_container");
  if (!a2) return void console.error("Toast container not found");
  a2.className = "", a2.style.display = "block";
  const n2 = document.createElement("div");
  n2.className = "pw_auth-toast";
  const o2 = document.createElement("span");
  o2.textContent = e2, n2.appendChild(o2);
  const r2 = document.createElement("button");
  r2.className = "pw_auth-toast-close", r2.innerHTML = "&times;", r2.onclick = () => j(n2), n2.appendChild(r2);
  const s2 = document.createElement("div");
  s2.className = "pw_auth-toast-progress", n2.appendChild(s2), a2.appendChild(n2), "success" === t2 ? a2.classList.add("pw_auth-text_success") : a2.classList.add("pw_auth-text_danger"), requestAnimationFrame(() => {
    n2.classList.add("pw_auth-toast_show");
  });
  let i2 = setTimeout(() => j(n2), 3e3);
  n2.addEventListener("mouseenter", () => {
    clearTimeout(i2);
  }), n2.addEventListener("mouseleave", () => {
    i2 = setTimeout(() => j(n2), 1e3);
  });
}, j = (e2) => {
  e2 && e2.classList.contains("pw_auth-toast_show") && (e2.classList.remove("pw_auth-toast_show"), H(e2, "transitionend", () => {
    e2.parentNode && e2.remove();
    const t2 = document.getElementById("pw_auth-toast_container");
    t2 && 0 === t2.children.length && (t2.style.display = "none", t2.className = "");
  }, { once: true }));
};
var Q = ((e2) => (e2.MOBILE_NUMBER_CLICK = "mobile_number_click", e2.ENTER_NAME = "enter_name", e2.OTP_ISSUE = "otp_issue", e2.CONTINUE_CLICK = "continue_click", e2.LOGIN_SUCCESS = "login_success", e2.SIGNUP_SUCCESS = "signup_success", e2.COHORT_CHANGE = "pw_cohort_change", e2.LOGIN_PAGE_VISIT = "login_page_visit", e2.PW_CLICK = "pw_click", e2.XYLEM_CLICK = "xylem_click", e2.OTP_SUBMITTED = "otp_submitted", e2.OTP_RESEND = "otp_resend", e2.LOGIN_FAILED = "login_failed", e2.NAME_ENTERED = "name_entered", e2.EMAIL_ENTERED = "email_entered", e2.SIGNUP_FAILED = "signup_failed", e2.MOBILE_NUMBER_ENTERED = "mobile_number_entered", e2.SIGN_UP_SUCCESS = "sign_up_success", e2.SIGN_UP_FAILED = "sign_up_failed", e2.SET_PASSWORD = "set_password", e2.FORGOT_PASSWORD_CLICKED = "forgot_password_clicked", e2.SK_GOOGLE_SSO_CLICK = "sk_google_sso_click", e2.LOGIN_PAGE = "login_page", e2.EDIT_MOBILE_NUMBER_CLICKED = "edit_mobile_number_clicked", e2.MOBILE_NUMBER_BOTTOM_SHEET_SHOWN = "mobile_number_bottom_sheet_shown", e2.MOBILE_NUMBER_INPUT_STARTED = "mobile_number_input_started", e2.MOBILE_NUMBER_CHECKED = "mobile_number_checked", e2.OTP_PAGE = "otp_page", e2.OTP_ENTERED = "otp_entered", e2.OTP_VERIFICATION_STATUS = "otp_verification_status", e2.RESEND_OTP_CLICKED = "resend_otp_clicked", e2.MOBILE_NUMBER_BOTTOM_SHEET_CLOSED = "mobile_number_bottom_sheet_closed", e2))(Q || {}), Z = ((e2) => (e2.TEXT = "text", e2.NUMBER = "number", e2.PASSWORD = "password", e2))(Z || {}), J = ((e2) => (e2.PW = "PW", e2.XYLEM = "XYLEM", e2.PW_BOOKS = "PW_BOOKS", e2.SARRTHIIAS = "SARRTHIIAS", e2))(J || {}), ee = ((e2) => (e2.AMBASSADOR_PORTAL = "ambassador-portal", e2))(ee || {});
const te = (e2) => {
  var _a2, _b;
  const t2 = e2 || ("undefined" != typeof window ? (_a2 = window.PW_AUTH_GLOBAL_STORE) == null ? void 0 : _a2.webSDK : null), a2 = { currentEnv: "prod", isDev: false, isStage: false, isProd: true };
  if (!((_b = t2 == null ? void 0 : t2.config) == null ? void 0 : _b.apiBaseUrl)) return a2;
  const n2 = t2.config.apiBaseUrl;
  return n2.includes("dev") ? { currentEnv: "dev", isDev: true, isStage: false, isProd: false } : n2.includes("stage") ? { currentEnv: "stage", isDev: false, isStage: true, isProd: false } : a2;
}, ae = (e2, t2) => {
  const a2 = window.gtag;
  "function" == typeof a2 && a2("event", e2, t2);
}, ne = () => {
  var _a2, _b;
  try {
    const e2 = (_b = (_a2 = window == null ? void 0 : window.parent) == null ? void 0 : _a2.location) == null ? void 0 : _b.search;
    if (e2) return new URLSearchParams(e2);
  } catch {
  }
  return new URLSearchParams(window.location.search);
}, oe = () => {
  const e2 = ne(), t2 = e2.get("utm_source") || "", a2 = e2.get("utm_medium") || "";
  return { utm_source: t2, utm_medium: a2, utm_campaign: e2.get("utm_campaign") || "", utm_campaign_id: e2.get("utm_campaign_id") || "", utm_term: e2.get("utm_term") || "", utm_content: e2.get("utm_content") || "", traffic_source: t2, traffic_medium: a2 };
}, re = ["source", "medium", "campaign", "gclid", "fbclid"], se = [...re, "identifierid"], ie = () => {
  const e2 = ne(), t2 = (...t3) => {
    for (const a3 of t3) {
      const t4 = e2.get(a3);
      if (t4) return t4;
    }
    return "";
  }, a2 = { source: t2("utm_source", "source"), medium: t2("utm_medium", "medium"), campaign: t2("utm_campaign", "campaign"), keyword: t2("utm_term", "keyword"), content: t2("utm_content", "content"), gclid: t2("gclid"), fbclid: t2("fbclid") }, n2 = t2("createdAt", "createdat");
  if (n2) {
    const e3 = new Date(Number.isNaN(Number(n2)) ? n2 : Number(n2));
    Number.isNaN(e3.getTime()) || (a2.createdAt = e3.toISOString());
  }
  const o2 = (() => {
    try {
      return localStorage.getItem("device_id") || "";
    } catch {
      return "";
    }
  })();
  if (o2) {
    a2.presignupid = o2;
    re.some((e3) => a2[e3]) || (a2.identifierid = o2);
  }
  return Object.fromEntries(Object.entries(a2).filter(([, e3]) => "" !== e3));
}, ce = () => {
  try {
    const e2 = ie();
    if (!se.some((t3) => e2[t3])) return;
    const t2 = new URLSearchParams(e2).toString(), a2 = `${(() => {
      const { isDev: e3, isStage: t3 } = te();
      return e3 ? o : t3 ? r : s;
    })()}/core-analytics/utm/pre-signup-record?${t2}`;
    fetch(a2).catch((e3) => {
      console.log("pre-signup-record", e3 instanceof Error ? e3.message : String(e3));
    });
  } catch (e2) {
    console.log("pre-signup-record", e2 instanceof Error ? e2.message : String(e2));
  }
}, _e = () => {
  const e2 = ne(), t2 = h() || window.location.href;
  return { page_referrer_URL: document.referrer, page_referrer_name: (() => {
    var _a2;
    const e3 = document.referrer, t3 = e3 ? (_a2 = new URL(e3)) == null ? void 0 : _a2.pathname : "";
    return "/" === t3 ? "Homepage" : "/admission-process" === t3 ? "Admission Process" : "Course Page";
  })(), current_URL: t2, current_page: (() => {
    const e3 = window.location.pathname;
    return "/" === e3 ? "Homepage" : "/admission-process" === e3 ? "Admission Process" : "Course Page";
  })(), page_type: "mlp" === (e2 == null ? void 0 : e2.get("type")) || "marketing" === (e2 == null ? void 0 : e2.get("type")) || "Marketing" === (e2 == null ? void 0 : e2.get("type")) ? "marketing" : "", is_first_page_of_session: !document.referrer };
}, le = () => {
  var _a2;
  const e2 = y("ioiFormStartTime"), t2 = e2 ? Math.round((Date.now() - e2) / 1e3) : 0, a2 = (_a2 = window.PW_AUTH_GLOBAL_STORE) == null ? void 0 : _a2.requestType;
  return { form_type: "SIGN_UP" === a2 ? "lead" : "login", form_total_fields: 1, form_time_fill_sec: t2 };
}, de = (e2) => {
  var _a2;
  const t2 = (_a2 = window.PW_AUTH_GLOBAL_STORE) == null ? void 0 : _a2.shouldRegister;
  return { user_id: y("userId") || (e2 == null ? void 0 : e2.userId) || "", user_segment: t2 ? "new_user" : "returning_user", user_account_type: localStorage.getItem("batch_user_segment") || "" };
}, ue = () => ({ course_id: ne().get("courseId") || "" }), pe = () => new URLSearchParams(window.location.search).has("redirectUrl") ? window.location.href : null, ge = (e2) => {
  if (e2) {
    const t2 = window.PW_AUTH_GLOBAL_STORE.shouldRegister || window.PW_AUTH_GLOBAL_STORE.registeredUserId, a2 = window.PW_AUTH_GLOBAL_STORE.mobileNumber;
    e2(Q.CONTINUE_CLICK, { user_type: t2 ? "new_sign_up" : "old_user", mode: "manual", status: "success", UserPhoneNumber: a2 }, false);
  }
}, Ee = (e2, t2, a2) => {
  var _a2, _b;
  const n2 = window.PW_AUTH_GLOBAL_STORE.referCode, o2 = window.PW_AUTH_GLOBAL_STORE.mobileNumber, r2 = y("userId"), s2 = { referral_code_present: (n2 == null ? void 0 : n2.length) > 0 ? "yes" : "no", referral_code: n2 || "", mode: "manual", UserPhoneNumber: o2, cta_click: t2, page_referrer: a2 == null ? void 0 : a2.pageReferrer, page_referrer_url: a2 == null ? void 0 : a2.pageReferrerUrl, page_referrer_type: a2 == null ? void 0 : a2.pageReferrerType, page_referrer_category: a2 == null ? void 0 : a2.pageReferrerCategory, page_referrer_exam: a2 == null ? void 0 : a2.pageReferrerExam, page_referrer_class: a2 == null ? void 0 : a2.pageReferrerClass, business_unit: a2 == null ? void 0 : a2.businessUnit, referred_by: a2 == null ? void 0 : a2.referredBy, new_login_flow: "true", platform: x() ? "mweb" : "web", ...(a2 == null ? void 0 : a2.referrer_name) && { referrer_name: a2 == null ? void 0 : a2.referrer_name }, ...(a2 == null ? void 0 : a2.referrer_id) && { referrer_id: a2 == null ? void 0 : a2.referrer_id }, ...(a2 == null ? void 0 : a2.referrer_code) && { referrer_code: a2 == null ? void 0 : a2.referrer_code }, ...r2 && { user_id: r2 } };
  e2 && e2(Q.SIGNUP_SUCCESS, s2, false), (_b = (_a2 = window == null ? void 0 : window.PWWebSDK) == null ? void 0 : _a2.eventService) == null ? void 0 : _b.logAttribute({ attributeName: "is_web_user", attributeValue: true });
}, me = (e2, t2, a2) => {
  var _a2, _b;
  const n2 = window.PW_AUTH_GLOBAL_STORE.mobileNumber, o2 = y("userId"), r2 = { cta_click: t2 || "", UserPhoneNumber: n2, page_referrer: a2 == null ? void 0 : a2.pageReferrer, page_referrer_url: a2 == null ? void 0 : a2.pageReferrerUrl, page_referrer_type: a2 == null ? void 0 : a2.pageReferrerType, page_referrer_category: a2 == null ? void 0 : a2.pageReferrerCategory, page_referrer_exam: a2 == null ? void 0 : a2.pageReferrerExam, page_referrer_class: a2 == null ? void 0 : a2.pageReferrerClass, business_unit: a2 == null ? void 0 : a2.businessUnit, new_login_flow: "true", referred_by: a2 == null ? void 0 : a2.referredBy, platform: x() ? "mweb" : "web", ...o2 && { user_id: o2 } };
  e2 && e2(Q.LOGIN_SUCCESS, r2, false), (_b = (_a2 = window == null ? void 0 : window.PWWebSDK) == null ? void 0 : _a2.eventService) == null ? void 0 : _b.logAttribute({ attributeName: "is_web_user", attributeValue: true });
}, we = (e2, t2 = "old_user") => {
  var _a2;
  const a2 = { page_name: "login_page", referred_by: (_a2 = e2 == null ? void 0 : e2.details) == null ? void 0 : _a2.referredBy, new_login_flow: "true", user_type: t2, mode: "manual", platform: x() ? "mweb" : "web" };
  e2 == null ? void 0 : e2.logFirebaseEvent(Q.MOBILE_NUMBER_CLICK, a2, false);
}, he = (e2, t2, a2, n2) => {
  const o2 = { user_type: a2, mode: "manual", UserPhoneNumber: y("mobileNumber"), new_login_flow: "true", click_text: t2, platform: x() ? "mweb" : "web" };
  if (e2) {
    e2(n2 === J.XYLEM ? Q.XYLEM_CLICK : Q.PW_CLICK, o2, false);
  }
}, Te = (e2) => {
  const t2 = { user_type: "new_sign_up", mode: "manual", UserPhoneNumber: y("mobileNumber"), new_login_flow: "true", platform: x() ? "mweb" : "web" };
  e2 && e2(Q.ENTER_NAME, t2, false);
}, Oe = (e2) => {
  window.location.href = `${d(h(), e2)}/batches`;
}, Se = (e2, t2, a2, n2, o2) => {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j;
  const r2 = Object.entries(n2 || {}), s2 = (e3) => {
    var _a3;
    return (_a3 = r2.find(([t3, a3]) => {
      var _a4;
      return ((_a4 = t3 == null ? void 0 : t3.toLowerCase) == null ? void 0 : _a4.call(t3)) === e3 && null != a3;
    })) == null ? void 0 : _a3[1];
  }, i2 = s2("class"), c2 = s2("exam"), _2 = s2("board"), l2 = s2("stream"), d2 = null === o2, u2 = { user_id: t2 == null ? void 0 : t2.userId, previous_cohort_id: o2, current_cohort_id: a2 == null ? void 0 : a2.cohortId, current_user_segment: t2 == null ? void 0 : t2.currentUserSegment, page_name: w(t2 == null ? void 0 : t2.previousUrl), new_login_flow: "true", platform: x() ? "mweb" : "web", ...n2 };
  e2 && e2(Q.COHORT_CHANGE, u2), i2 && ((_b = (_a2 = window == null ? void 0 : window.PWWebSDK) == null ? void 0 : _a2.eventService) == null ? void 0 : _b.logAttribute({ attributeName: d2 ? "signup_class" : "current_class_now", attributeValue: i2 })), c2 && ((_d = (_c = window == null ? void 0 : window.PWWebSDK) == null ? void 0 : _c.eventService) == null ? void 0 : _d.logAttribute({ attributeName: d2 ? "signup_exam" : "current_exam", attributeValue: c2 })), _2 && ((_f = (_e2 = window == null ? void 0 : window.PWWebSDK) == null ? void 0 : _e2.eventService) == null ? void 0 : _f.logAttribute({ attributeName: d2 ? "signup_board" : "current_board_now", attributeValue: _2 })), l2 && ((_h = (_g = window == null ? void 0 : window.PWWebSDK) == null ? void 0 : _g.eventService) == null ? void 0 : _h.logAttribute({ attributeName: d2 ? "signup_stream" : "current_stream", attributeValue: l2 })), (_j = (_i = window == null ? void 0 : window.PWWebSDK) == null ? void 0 : _i.eventService) == null ? void 0 : _j.logAttribute({ attributeName: d2 ? "signup_date" : "last_cohort_change_date", attributeValue: (/* @__PURE__ */ new Date()).toISOString() });
}, fe = (e2, t2) => {
  const a2 = { site_section: "Login", country_code: y("dialCode"), platform: x() ? "mweb" : "web", ...t2 };
  e2 && e2(Q.OTP_SUBMITTED, a2, false);
}, Ie = (e2, t2) => {
  const a2 = { site_section: "Login", country_code: y("dialCode"), platform: x() ? "mweb" : "web", ...t2 };
  e2 && e2(Q.OTP_RESEND, a2, false);
}, Ce = (e2, t2) => {
  const a2 = { site_section: "Login", country_code: y("dialCode"), ...t2 };
  e2 && e2(Q.MOBILE_NUMBER_ENTERED, a2, false);
}, Ne = (e2) => {
  const t2 = y("dialCode"), a2 = { site_section: "Login", country_code: t2, loginMethod: "password" === (e2 == null ? void 0 : e2.internationalLoginFlowType) && "+91" !== t2 ? "password" : "otp", remember_me: y("rememberMeChecked") ? "true" : "false" };
  (e2 == null ? void 0 : e2.logFirebaseEvent) && (e2 == null ? void 0 : e2.logFirebaseEvent(Q.LOGIN_SUCCESS, a2, false));
}, ye = (e2) => {
  const t2 = { site_section: "Login", country_code: y("dialCode") };
  (e2 == null ? void 0 : e2.logFirebaseEvent) && (e2 == null ? void 0 : e2.logFirebaseEvent(Q.SIGN_UP_SUCCESS, t2, false));
}, be = (e2, t2) => {
  const a2 = { site_section: "Login", country_code: y("dialCode"), failed_reason: e2 };
  (t2 == null ? void 0 : t2.logFirebaseEvent) && (t2 == null ? void 0 : t2.logFirebaseEvent(Q.LOGIN_FAILED, a2, false));
}, Le = (e2, t2) => {
  const a2 = { site_section: "Login", country_code: y("dialCode"), failed_reason: e2 };
  (t2 == null ? void 0 : t2.logFirebaseEvent) && (t2 == null ? void 0 : t2.logFirebaseEvent(Q.SIGN_UP_FAILED, a2, false));
}, ve = (e2) => {
  const t2 = { site_section: "Login", country_code: y("dialCode") };
  (e2 == null ? void 0 : e2.logFirebaseEvent) && (e2 == null ? void 0 : e2.logFirebaseEvent(Q.FORGOT_PASSWORD_CLICKED, t2, false));
}, Ae = (e2, t2) => {
  const a2 = { site_section: "Login", country_code: y("dialCode"), came_from: t2 };
  (e2 == null ? void 0 : e2.logFirebaseEvent) && (e2 == null ? void 0 : e2.logFirebaseEvent(Q.SET_PASSWORD, a2, false));
}, Re = (e2, t2) => {
  const a2 = { site_section: "Login", country_code: y("dialCode"), click_text: t2 };
  e2 && e2(Q.NAME_ENTERED, a2, false);
}, Pe = (e2, t2) => {
  var _a2, _b, _c, _d, _e2;
  if (!(e2 == null ? void 0 : e2.logFirebaseEvent)) return;
  const a2 = new URLSearchParams(window.location.search), n2 = { device_id: ((_a2 = e2 == null ? void 0 : e2.details) == null ? void 0 : _a2.deviceId) || a2.get("deviceId") || "", user_id: ((_b = e2 == null ? void 0 : e2.details) == null ? void 0 : _b.userId) ?? y("userId") ?? t2 ?? "", utm_source: a2.get("utm_source") || "", utm_medium: a2.get("utm_medium") || "", utm_campaign: a2.get("utm_campaign") || "", came_from: (e2 == null ? void 0 : e2.cameFrom) || ((_c = e2 == null ? void 0 : e2.details) == null ? void 0 : _c.cameFrom) || a2.get("came_from") || "", course_id: ((_d = e2 == null ? void 0 : e2.details) == null ? void 0 : _d.courseId) || a2.get("courseId") || "", course_name: ((_e2 = e2 == null ? void 0 : e2.details) == null ? void 0 : _e2.courseName) || "", send_to: "G-2TFVXB6NTG" };
  e2.logFirebaseEvent(Q.SK_GOOGLE_SSO_CLICK, n2, false);
}, Ue = () => {
  const e2 = window.location.href.toLowerCase();
  return e2.includes("ioi") || e2.includes("localhost");
}, De = (e2) => {
  if (!Ue()) return;
  ce(), N("ioiFormStartTime", Date.now()), N("ioiOtpAttemptNumber", 0), N("ioiResendCount", 0);
  const t2 = { ..._e(), ...de(e2), ...le(), ...ue(), ...oe(), marketing_channel: (e2 == null ? void 0 : e2.marketingChannel) || "", platform: x() ? "mweb" : "web" };
  ae("ioi_form_started", t2);
}, Be = (e2) => {
  if (!Ue()) return;
  ce();
  const t2 = (y("ioiOtpAttemptNumber") || 0) + 1;
  N("ioiOtpAttemptNumber", t2);
  const a2 = y("ioiResendCount") || 0, n2 = { ..._e(), ...le(), cta_text: (e2 == null ? void 0 : e2.ctaText) || "Get OTP", cta_type: (e2 == null ? void 0 : e2.ctaType) || "primary", cta_position: (e2 == null ? void 0 : e2.ctaPosition) || "center", ...de(e2), user_name: y("userName") || "", user_phone_number: y("mobileNumber") || "", ...ue(), otp_channel: "sms", request_type: 1 === t2 ? "first_request" : "resend", otp_attempt_number: t2, resend_count: a2, ...oe(), marketing_channel: (e2 == null ? void 0 : e2.marketingChannel) || "", platform: x() ? "mweb" : "web" };
  ae("ioi_otp_request_initiated", n2);
}, Ge = (e2, t2) => {
  if (!Ue()) return;
  ce();
  const a2 = (() => {
    try {
      return JSON.parse(localStorage.getItem("user") || "{}");
    } catch {
      return {};
    }
  })(), n2 = { ..._e(), ...de(e2), is_logged_in: true, user_name: a2.firstName || "", user_phone_number: y("mobileNumber") || "", user_email: a2.email || "", ...le(), login_method: "otp", login_result: t2 || "", ...ue(), ...oe(), marketing_channel: (e2 == null ? void 0 : e2.marketingChannel) || "", platform: x() ? "mweb" : "web" };
  ae("ioi_authentication_completed", n2);
}, Me = () => ({ platform: x() ? "mweb" : "web", deeplink: pe(), is_truecaller_present: !!y("truecallerAppPresent"), origin: y("loginSource"), ...y("registeredUserId") ? { user_id: y("registeredUserId") } : {} }), ke = (e2) => {
  var _a2;
  const t2 = { ...(e2 == null ? void 0 : e2.payload) || {}, platform: x() ? "mweb" : "web", deeplink: pe(), is_truecaller_present: y("truecallerAppPresent"), page_name: "login_page" };
  console.log({ eventName: Q.LOGIN_PAGE, eventData: t2 }), (_a2 = e2 == null ? void 0 : e2.eventLogger) == null ? void 0 : _a2.call(e2, Q.LOGIN_PAGE, t2, false);
}, We = (e2) => {
  var _a2, _b;
  const t2 = { ...(e2 == null ? void 0 : e2.payload) || {}, ...Me(), page_name: "otp_page", is_new_user: ((_a2 = y("registeredUserId")) == null ? void 0 : _a2.length) > 0, user_id: y("registeredUserId"), source: "manual" };
  console.log({ eventName: Q.EDIT_MOBILE_NUMBER_CLICKED, eventData: t2 }), (_b = e2 == null ? void 0 : e2.eventLogger) == null ? void 0 : _b.call(e2, Q.EDIT_MOBILE_NUMBER_CLICKED, t2, false);
}, Fe = (e2) => {
  var _a2;
  const t2 = { ...(e2 == null ? void 0 : e2.payload) || {}, ...Me(), page_name: "login_page", bottom_sheet_type: "truecaller", source: "truecaller" };
  console.log({ eventName: Q.MOBILE_NUMBER_BOTTOM_SHEET_SHOWN, eventData: t2 }), (_a2 = e2 == null ? void 0 : e2.eventLogger) == null ? void 0 : _a2.call(e2, Q.MOBILE_NUMBER_BOTTOM_SHEET_SHOWN, t2, false);
}, He = (e2) => {
  var _a2;
  const t2 = { ...(e2 == null ? void 0 : e2.payload) || {}, ...Me(), page_name: "login_page", source: "manual" };
  console.log({ eventName: Q.MOBILE_NUMBER_INPUT_STARTED, eventData: t2 }), (_a2 = e2 == null ? void 0 : e2.eventLogger) == null ? void 0 : _a2.call(e2, Q.MOBILE_NUMBER_INPUT_STARTED, t2, false);
}, Ke = (e2) => {
  var _a2;
  const t2 = { ...(e2 == null ? void 0 : e2.payload) || {}, ...Me(), page_name: "login_page", source: "manual", user_id: y("registeredUserId") };
  console.log({ eventName: Q.MOBILE_NUMBER_ENTERED, eventData: t2 }), (_a2 = e2 == null ? void 0 : e2.eventLogger) == null ? void 0 : _a2.call(e2, Q.MOBILE_NUMBER_ENTERED, t2, false);
}, $e = (e2) => {
  var _a2, _b;
  const t2 = { source: "manual", ...(e2 == null ? void 0 : e2.payload) || {}, ...Me(), page_name: "login_page", user_id: y("registeredUserId"), is_new_user: ((_a2 = y("registeredUserId")) == null ? void 0 : _a2.length) > 0 };
  (_b = e2 == null ? void 0 : e2.eventLogger) == null ? void 0 : _b.call(e2, Q.MOBILE_NUMBER_CHECKED, t2, false);
}, Ve = (e2) => {
  var _a2, _b;
  const t2 = { ...(e2 == null ? void 0 : e2.payload) || {}, ...Me(), page_name: "otp_page", source: "manual", is_new_user: ((_a2 = y("registeredUserId")) == null ? void 0 : _a2.length) > 0 };
  console.log({ eventName: Q.OTP_PAGE, eventData: t2 }), (_b = e2 == null ? void 0 : e2.eventLogger) == null ? void 0 : _b.call(e2, Q.OTP_PAGE, t2, false);
}, xe = (e2) => {
  var _a2, _b;
  const t2 = { ...(e2 == null ? void 0 : e2.payload) || {}, ...Me(), page_name: "otp_page", source: "manual", mobile_number_source: "manual", is_new_user: ((_a2 = y("registeredUserId")) == null ? void 0 : _a2.length) > 0 };
  console.log({ eventName: Q.OTP_ENTERED, eventData: t2 }), (_b = e2 == null ? void 0 : e2.eventLogger) == null ? void 0 : _b.call(e2, Q.OTP_ENTERED, t2, false);
}, Ye = (e2) => {
  var _a2, _b;
  const t2 = { ...(e2 == null ? void 0 : e2.payload) || {}, ...Me(), is_new_user: ((_a2 = y("registeredUserId")) == null ? void 0 : _a2.length) > 0, mobile_number_source: "manual", source: "manual", page_name: "otp_page" };
  console.log({ eventName: Q.OTP_VERIFICATION_STATUS, eventData: t2 }), (_b = e2 == null ? void 0 : e2.eventLogger) == null ? void 0 : _b.call(e2, Q.OTP_VERIFICATION_STATUS, t2, false);
}, Xe = (e2) => {
  var _a2;
  const t2 = { ...(e2 == null ? void 0 : e2.payload) || {}, ...Me(), is_new_user: true };
  console.log({ eventName: Q.SIGNUP_SUCCESS, eventData: t2 }), (_a2 = e2 == null ? void 0 : e2.eventLogger) == null ? void 0 : _a2.call(e2, Q.SIGNUP_SUCCESS, t2, false);
}, qe = (e2) => {
  var _a2;
  const t2 = { ...(e2 == null ? void 0 : e2.payload) || {}, ...Me(), is_new_user: false };
  console.log({ eventName: Q.LOGIN_SUCCESS, eventData: t2 }), (_a2 = e2 == null ? void 0 : e2.eventLogger) == null ? void 0 : _a2.call(e2, Q.LOGIN_SUCCESS, t2, false);
}, ze = (e2) => {
  var _a2, _b;
  const t2 = { ...(e2 == null ? void 0 : e2.payload) || {}, ...Me(), is_new_user: ((_a2 = y("registeredUserId")) == null ? void 0 : _a2.length) > 0, source: "manual", page_name: "otp_page" };
  console.log({ eventName: Q.RESEND_OTP_CLICKED, eventData: t2 }), (_b = e2 == null ? void 0 : e2.eventLogger) == null ? void 0 : _b.call(e2, Q.RESEND_OTP_CLICKED, t2, false);
}, je = (e2) => {
  var _a2;
  const t2 = { ...(e2 == null ? void 0 : e2.payload) || {}, ...Me(), source: "manual", bottom_sheet_type: "truecaller", page_name: "login_page" };
  console.log({ eventName: Q.MOBILE_NUMBER_BOTTOM_SHEET_CLOSED, eventData: t2 }), (_a2 = e2 == null ? void 0 : e2.eventLogger) == null ? void 0 : _a2.call(e2, Q.MOBILE_NUMBER_BOTTOM_SHEET_CLOSED, t2, false);
}, Qe = { FIREBASE_OTP_TIMER_KEY: "otp_timer_prod", FIREBASE_OTP_TIME_KEY_STAGING: "otp_timer_staging", FIREBASE_WHATSAPP_OTP_KEY: "whatsapp_otp_disabled_web", FIREBASE_WHATSAPP_OTP_KEY_STAGING: "whatsapp_otp_disabled_web_staging", FIREBASE_VOICE_OTP_KEY: "voice_call_enabled_web", FIREBASE_VOICE_OTP_KEY_STAGING: "voice_call_enabled_web_staging", FIREBASE_HELP_VISIBLE_COUNT_STAGE: "auth_help_visibile_count_stage", FIREBASE_HELP_VISIBLE_COUNT: "auth_help_visibile_count", FIREBASE_REVAMP_STAGE_WEB: "auth_revamp_stage_web", FIREBASE_ENABLE_V2_AUTH_FLOW: "enable_v2_auth_flow", PW_PIRACY_SUPPORT_EMAIL: "pw_piracy_support_email" }, Ze = (e2 = false) => {
  const t2 = O("div");
  return t2.style.display = "none", t2.setAttribute("id", "pw_auth-spinner"), e2 && (t2.style.borderTopColor = "#5a4bda"), t2;
}, Je = { LOGIN: "pw_auth-captcha_widget_login", OTP: "pw_auth-captcha_widget_otp", DEFAULT: "pw_auth-captcha_widget" }, et = 8, tt = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map();
function ot(e2, t2) {
  document.dispatchEvent(new CustomEvent("captchaLoadingStateChange", { detail: { containerId: e2, isLoading: t2 } }));
}
function rt(e2) {
  const t2 = nt.get(e2);
  t2 && (clearTimeout(t2), nt.delete(e2));
}
function st(e2) {
  var _a2;
  return Boolean((_a2 = e2 == null ? void 0 : e2.captchaConfig) == null ? void 0 : _a2.showCaptcha);
}
function it(e2) {
  const t2 = e2;
  return at.get(t2) || false;
}
function ct(e2, t2) {
  at.set(e2, t2), ot(e2, t2);
}
function _t(e2) {
  const t2 = e2 || Je.DEFAULT;
  if (window.turnstile) if (ct(t2, true), tt.has(t2)) {
    const e3 = tt.get(t2);
    window.turnstile.reset(e3);
  } else if (e2) ct(t2, false);
  else {
    const e3 = Array.from(tt.values())[0];
    e3 ? window.turnstile.reset(e3) : ct(t2, false);
  }
  else ct(t2, false);
}
function lt(e2) {
  if (window.turnstile) {
    const t2 = e2 || Je.DEFAULT;
    if (tt.has(t2)) {
      const e3 = tt.get(t2);
      window.turnstile.remove(e3), tt.delete(t2), rt(t2), at.delete(t2), ot(t2, false);
    } else if (!e2) {
      const e3 = Array.from(tt.entries());
      if (e3.length > 0) {
        const [t3, a2] = e3[0];
        window.turnstile.remove(a2), tt.delete(t3), rt(t3), at.delete(t3), ot(t3, false);
      }
    }
  }
}
function dt(e2) {
  const t2 = e2, a2 = document.getElementById(t2);
  a2 && (a2.style.display = "none");
}
function ut(e2) {
  const t2 = e2, a2 = document.getElementById(t2);
  a2 && (a2.style.display = "block");
}
function pt({ props: e2, containerId: t2, inputElement: a2 }) {
  if (!st(e2)) return () => {
  };
  let n2 = true;
  const o2 = (e3) => {
    const o3 = e3, { containerId: r2, isLoading: s2 } = o3.detail;
    r2 === t2 && (n2 && !s2 && a2.dispatchEvent(new Event("input")), n2 = s2);
  };
  return document.addEventListener("captchaLoadingStateChange", o2), () => {
    document.removeEventListener("captchaLoadingStateChange", o2);
  };
}
function gt({ props: e2, containerId: t2, onLoadingStateChange: a2 }) {
  if (!st(e2)) return () => {
  };
  const n2 = (e3) => {
    const n3 = e3, { containerId: o2, isLoading: r2 } = n3.detail;
    o2 === t2 && a2(r2);
  };
  return document.addEventListener("captchaLoadingStateChange", n2), () => {
    document.removeEventListener("captchaLoadingStateChange", n2);
  };
}
function Et({ props: e2, delayInSeconds: t2, containerId: a2 = Je.DEFAULT }) {
  var _a2, _b;
  const n2 = O("div");
  if (!((_a2 = e2 == null ? void 0 : e2.captchaConfig) == null ? void 0 : _a2.showCaptcha) || !((_b = e2 == null ? void 0 : e2.captchaConfig) == null ? void 0 : _b.siteKey)) return n2;
  n2.setAttribute("id", a2), ct(a2, true);
  let o2 = null, r2 = false, s2 = 0;
  const i2 = () => {
    const e3 = y("mobileNumber"), t3 = y("dialCode"), a3 = M.test(e3);
    if (!e3 || e3.length < 4 || !a3) return "";
    const n3 = "+91" === t3, o3 = n3 && 10 === e3.length;
    return n3 && !o3 ? "" : e3.slice(-4);
  }, c2 = (t3, n3) => {
    var _a3, _b2, _c;
    const o3 = y("captchaSiteKey"), s3 = new Error(t3);
    ((_a3 = e2 == null ? void 0 : e2.sentryLogger) == null ? void 0 : _a3.captureException) && "function" == typeof ((_b2 = e2 == null ? void 0 : e2.sentryLogger) == null ? void 0 : _b2.captureException) && e2.sentryLogger.captureException(s3, { tags: { feature: "captcha", provider: "cloudflare-turnstile", eventType: "error_callback", captchaErrorCode: (n3 == null ? void 0 : n3.errorCode) || "unknown", env: te().currentEnv || "prod", component: "TurnstileCaptcha", isFallback: `${r2}` }, extra: { ...n3, siteKey: o3, widgetContainerId: a2, userAgent: navigator.userAgent, timestamp: (/* @__PURE__ */ new Date()).toISOString(), networkStatus: navigator.onLine ? "online" : "offline", pageUrl: "undefined" != typeof window ? window.location.href : "", pageTitle: "undefined" != typeof document ? document.title : "", referrer: "undefined" != typeof document ? document.referrer : "", screenResolution: "undefined" != typeof screen ? `${screen.width}x${screen.height}` : "", viewportSize: "undefined" != typeof window ? `${window.innerWidth}x${window.innerHeight}` : "", connectionType: ((_c = navigator == null ? void 0 : navigator.connection) == null ? void 0 : _c.effectiveType) || "unknown", language: navigator.language || "unknown", cookieEnabled: navigator.cookieEnabled, doNotTrack: navigator.doNotTrack || "unknown", turnstileScriptLoaded: "undefined" != typeof window && !!window.turnstile, lastFourDigitsOfMobileNumber: i2() }, level: "error", fingerprint: ["captcha-error", (n3 == null ? void 0 : n3.errorCode) || "unknown", o3] });
  }, _2 = (e3) => {
    rt(a2), N("captchaToken", e3), s2 = 0, ct(a2, false);
  }, l2 = (t3) => {
    var _a3;
    rt(a2), c2("Turnstile captcha error", { errorCode: t3 }), r2 ? ct(a2, false) : s2 < 0 && o2 && window.turnstile ? (s2++, ct(a2, true), window.turnstile.reset(o2)) : ((_a3 = e2 == null ? void 0 : e2.captchaConfig) == null ? void 0 : _a3.fallbackSiteKey) ? u2() : ct(a2, false);
  }, d2 = (e3) => {
    if (!window.turnstile) return null;
    N("captchaSiteKey", e3);
    try {
      const t3 = window.turnstile.render(n2, { sitekey: e3, theme: "light", size: "normal", callback: _2, "error-callback": l2 });
      t3 && ((e4) => {
        o2 = e4, tt.set(a2, e4);
      })(t3);
      const r3 = setTimeout(() => {
        tt.has(a2) && at.get(a2) && (console.warn("Captcha completion timeout: No callback received within 45s, clearing captcha loading state"), c2("Turnstile captcha completion timeout", { timeoutMs: 45e3, errorCode: "completion_timeout", details: "Neither success nor error callback was triggered within 45 seconds. This may indicate a network issue.", widgetRendered: !!o2 }), ct(a2, false));
      }, 45e3);
      return nt.set(a2, r3), t3;
    } catch (e4) {
      return console.error(`Error rendering captcha (${r2 ? "fallback" : "default"}):`, e4), ct(a2, false), null;
    }
  }, u2 = () => {
    var _a3;
    if (((_a3 = e2 == null ? void 0 : e2.captchaConfig) == null ? void 0 : _a3.fallbackSiteKey) && !r2 && window.turnstile) {
      if (r2 = true, rt(a2), tt.has(a2)) try {
        const e3 = tt.get(a2);
        e3 && window.turnstile.remove(e3), tt.delete(a2);
      } catch (e3) {
        console.warn(`Error removing default captcha widget ${a2}:`, e3);
      }
      n2.innerHTML = "", ct(a2, true), d2(e2.captchaConfig.fallbackSiteKey);
    }
  }, p2 = async () => {
    var _a3, _b2;
    try {
      if (await ((_b2 = (_a3 = e2 == null ? void 0 : e2.webSDK) == null ? void 0 : _a3.loadCaptchaScript) == null ? void 0 : _b2.call(_a3)), !window.turnstile) throw new Error("Captcha script not loaded");
      if (tt.has(a2)) {
        const e3 = tt.get(a2);
        try {
          e3 && window.turnstile.remove(e3), tt.delete(a2);
        } catch (e4) {
          console.warn(`Error removing existing captcha widget ${a2}:`, e4);
        }
      }
      ct(a2, true), d2(e2.captchaConfig.siteKey);
    } catch (e3) {
      console.error("Error initializing Captcha:", e3), ct(a2, false), o2 && (() => {
        if (rt(a2), o2 && window.turnstile) try {
          window.turnstile.remove(o2), tt.delete(a2), console.debug(`${r2 ? "Fallback" : "Default"} captcha widget cleaned up: ${a2}`);
        } catch (e4) {
          console.warn(`Error cleaning up captcha widget ${a2}:`, e4);
        }
        at.delete(a2), ot(a2, false), o2 = null;
      })();
    }
  };
  return t2 && t2 > 0 ? setTimeout(() => {
    document.contains(n2) && p2();
  }, 1e3 * t2) : p2(), n2;
}
const mt = { webSDK: null, initialize: (e2) => {
  mt.webSDK = e2;
}, setCookie: (e2, t2) => {
  var _a2, _b;
  ((_b = (_a2 = mt.webSDK) == null ? void 0 : _a2.storage) == null ? void 0 : _b.setCookie) && mt.webSDK.storage.setCookie(e2, t2);
}, getCookie: (e2) => {
  var _a2, _b;
  return ((_b = (_a2 = mt.webSDK) == null ? void 0 : _a2.storage) == null ? void 0 : _b.getCookie) ? mt.webSDK.storage.getCookie(e2) : null;
}, deleteCookie: (e2) => {
  var _a2, _b;
  ((_b = (_a2 = mt.webSDK) == null ? void 0 : _a2.storage) == null ? void 0 : _b.deleteCookie) && mt.webSDK.storage.deleteCookie(e2);
} }, wt = "https://static.pw.live", ht = { DROPDOWN: `${wt}/files/dropdown_icon_20240808054636.svg`, TICK_GREEN: `${wt}/files/tick_green_20240817091630.svg`, HELP_ICON: `${wt}/files/help_solid_20240801075207.svg`, EDIT_ICON_BLUE: `${wt}/files/editIcon_blue_20240803065724.svg`, EDIT_ICON_ORANGE: `${wt}/files/editIcon_orange_20250211065216.svg`, WHATSAPP_ICON: `${wt}/files/whatsapp_green_20240821022250.svg`, CALL_ICON_SOLID: `${wt}/files/callIcon_20240803065052.svg`, OTP_INPUT_USER: `${wt}/files/otp_input_user_20240802060717.svg`, OTP_INPUT_EMAIL: `${wt}/files/otp_input_email_20240802055326.svg`, OTP_INPUT_CONTACT_NUMBER: `${wt}/files/otp_input_phone_20240802054937.svg`, GLOBE: `${wt}/files/otp_input_map_20240802052955.svg`, PW_AUTH_V2_LOGIN_BANNER: `${wt}/auth-fe/assets/images/pw_badge_v2_login.webp`, PW_AUTH_V2_OTP_BANNER: `${wt}/auth-fe/assets/images/pw_badge_v2_otp.webp`, LOGIN_BADGE: `${wt}/auth-fe/assets/images/login_badge.svg`, OTP_BADGE: `${wt}/auth-fe/assets/images/otp_badge.svg`, CROSS_ICON: `${wt}/auth-fe/assets/images/v2_close_icon.webp`, EDIT_ICON_V2: `${wt}/auth-fe/assets/images/edit-icon-v2.svg`, EXCLAMATION_TRIANGLE: `${wt}/auth-fe/assets/images/exclamation-triangle.svg`, HELP_BADGE: `${wt}/auth-fe/assets/images/help-v2-badge.svg`, PW_LOGO: `${wt}/files/PW_20240813074247.svg`, CHEVRRON_RIGHT: `${wt}/auth-fe/assets/images/chevron_down.webp`, CONFUSED_TOURIST: `${wt}/auth-fe/assets/images/confused_tourist.webp`, LEFT_ARROW: `${wt}/auth-fe/assets/images/left_arrow_v2.svg`, CUSTOMIZE_EXPERIENCE: `${wt}/files/custom_experience_20240813070736.webp`, JOURNEY_BG: `${wt}/auth-fe/assets/images/blue_background_journey.webp`, INFORMATION_CIRCLE_BLACK: `${wt}/images/information-circle_20260204185602.svg`, INFORMATION_CIRCLE_YELLOW: `${wt}/images/information-circle_20260204185635.svg`, XYLEM_AUTH_V2_LOGIN_BANNER: `${wt}/images/xylem_auth_login_banner_20260204175453.png`, XYLEM_EDIT_ICON_V2: `${wt}/images/xylem_edit_icon_20260204180746.svg`, SMS_ICON: `${wt}/images/sms-icon_20260204182039.svg`, XYLEM_AUTH_V2_OTP_BANNER: `${wt}/images/xylem_auth_otp_banner_20260204183940.png`, EYE_ICON: `${wt}/images/eye_20260305092630.svg`, EYE_SLASH_ICON: `${wt}/images/eye-slash_20260305093753.svg`, BELL_ICON: `${wt}/auth-fe/assets/images/bell_bg.svg`, SHIELD_CHECK_ICON: `${wt}/auth-fe/assets/images/shield_check_icon.svg`, SHIELD_EXCLAMATION: `${wt}/react-batches/assets/shield_exclamation.svg`, COURSES_ICON: `${wt}/auth-fe/assets/images/course_icon.svg`, COURSE_ICON_GREY: `${wt}/auth-fe/assets/images/course_icon_grey.svg`, ALERT_ICON: `${wt}/react-batches/assets/alert.svg` }, Tt = "name_post_goal_selection-web", Ot = "goal_before_name", St = (e2) => !e2 || e2 === J.PW, ft = { MOBILE_INPUT_LABEL: "Please enter your mobile number", MOBIL_INPUT_EX: "E.g 9877654335", IN: "IN", IN_DIAL_CODE: "+91", REQUEST_OTP: "Request OTP", ENTER_YOUR_NAME: "Enter your name", USER_NAME_EX: "E.g John Doe", REFERRAL_CODE: "Referral Code?", ENTER_REFERRAL_CODE: "Enter referral code", REFERRAL_CODE_EX: "Code (Optional)", APPLY: "Apply", INVALID_CODE: "invalid code", CONTINUE_TERMS_AND_CONDITION: "By continuing, you agree to our ", TERMS_AND_CONDITIONS: "Terms & Conditions", OTP_VERIFICATION: "OTP Verification", HELP: "Help", WE_HAVE_SENT_6_DIGIT_CODE: "We have sent a 6 digit code to ", RESEND_OTP: "Resend OTP", OR: "or", GET_OTP_ON_WHATSAPP: "Get OTP on WhatsApp", GET_OTP_ON_CALL: "Get OTP on Call", VERIFY_AND_PROCEED: "Verify & Proceed", SOMETHING_WENT_WRONG: "something went wrong", YOUR_NAME: "Your Name", YOUR_EMAIL: "Your Email", CONTACT_NUMBER: "Contact No.", COUNTRY: "Country", SUBMIT: "Submit", OTP_NOT_RECEIVED: "OTP not received?", TROUBLE_IN_RECEIVING_OTP: "Having trouble in receiving OTP?", ENTER_NAME_TO_CONTINUE: "Enter name to continue", USER_DOES_NOT_EXIST: "User does not exist", GET_OTP: "Get OTP", ENTER_OTP: "Enter OTP", OTP_CODE_SENT_TO: "6 digit code sent to", TO_WHATSAPP: "on WhatsApp", DIDNT_RECIEVED_OTP: "Didn't receive OTP?", CALL: "Call", WHATSAPP: "WhatsApp", OR_TRY_GETTING_OTP_VIA: "Or Try getting OTP via", CONTINUE: "Continue", BY_CONTINUING_YOU_AGREE_TO: "By continuing you agree to our", TERMS_OF_USE_AND_PRIVACY_POLICY: "Terms of use & Privacy Policy", SECURITY_ALERT_PREFIX: "Never share your ", SECURITY_ALERT_BOLD: "login details", SECURITY_ALERT_SUFFIX: " on unauthorised apps or websites", INVALID_OTP: "Invalid OTP", OTP_HELP_SUCCESS_MSG: "Thank you for contacting us, please check your email for response.", SELECT_YOUR_GOAL: "Select your Goal", LETS_BEGIN: "Let’s Begin", USERNAME_AND_OTP_INCORRECT: "Username or OTP is incorrect.", CAN_NOT_PERSONALISE: "Cannot personalise, Please select the details again!", PERSONALIZING_YOUR_EXPERIENCE: "Personalizing your experience...", NO_DATA_FOUND: "No data found", COHORT_NOT_FOUND: "Cohort Not Found", GETTING_YOUR_LEARNING_JOURNEY_READY: "Getting your learning journey ready...", GETTING_YOUR_OPTIONS_READY: "Getting your options ready...", SMS: "SMS", SIGN_IN_WITH_GOOGLE: "Sign in with Google", UNLOCK_FULL_ACCESS: "Unlock Full Access", VERIFY_EMAIL_SUBTITLE: "Verify your email to get the most out of your courses", SKIP: "Skip", INSTANT_COURSE_UPDATED: "Instant Course Updated", INSTANT_COURSE_UPDATED_DESC: "Get important lesson reminders and announcement delivered to your inbox", EXCLUSIVE_COURSE_ACCESS: "Exclusive Course Access", EXCLUSIVE_COURSE_ACCESS_DESC: "Verified users get priority access to specialised AWS & Google courses", MOBILE_ACCOUNT_TEXT: "Before continuing, please make sure your name is correct, as it will appear on your course certificate.", ACCOUNT_BLOCKED_TITLE: "Your account has been blocked", ACCOUNT_BLOCKED_DESCRIPTION_LINE1: "We've detected suspicious activity on ", ACCOUNT_BLOCKED_DESCRIPTION_LINE2_PREFIX: "your account. Contact ", ACCOUNT_BLOCKED_DESCRIPTION_LINE2_SUFFIX: " if you need help.", CONTACT_SUPPORT: "Contact Support", OR_TRY_WITH_PREFIX: "or try with ", DIFFERENT_MOBILE_NUMBER: "different mobile number" };
const _It = class _It {
  constructor() {
    __publicField(this, "payload", {});
  }
  static getInstance() {
    return _It.instance || (_It.instance = new _It()), _It.instance;
  }
  updatePayload(e2, t2) {
    this.payload[e2] = t2;
  }
  updateMultiplePayload(e2) {
    this.payload = { ...this.payload, ...e2 };
  }
  getPayload() {
    return { ...this.payload };
  }
  clearPayload() {
    this.payload = {};
  }
};
__publicField(_It, "instance");
let It = _It;
const Ct = It.getInstance(), Nt = async (e2, t2 = false, a2 = "") => {
  try {
    const n2 = await (async (e3, t3 = false, a3 = "") => a3 === ee.AMBASSADOR_PORTAL ? (null !== Ct.getPayload() && Ct.clearPayload(), await e3.getCohortLandingQuestionsForAmbassador()) : await e3.getCohortLandingQuestions(t3))(e2, t2, a2);
    return n2;
  } catch (e3) {
    console.error(e3);
  }
}, yt = async (e2, t2) => new Promise(async (a2) => {
  var _a2;
  if (e2 == null ? void 0 : e2.webSDK) try {
    const n2 = window == null ? void 0 : window.PW_AUTH_GLOBAL_STORE.dialCode, o2 = window == null ? void 0 : window.PW_AUTH_GLOBAL_STORE.mobileNumber, r2 = window == null ? void 0 : window.PW_AUTH_GLOBAL_STORE.countryCode;
    I(t2);
    a2(await ((_a2 = e2 == null ? void 0 : e2.webSDK) == null ? void 0 : _a2.validateUser(o2, n2, r2, y("isWhatsAppValid") ? 1 : 0))), C(t2);
  } catch (n2) {
    a2(n2), C(t2), st(e2) && _t(Je.LOGIN);
  }
}), bt = async (e2, t2, a2) => {
  try {
    return await e2.updateUserProfile(y("userId"), t2, a2);
  } catch (e3) {
    throw console.error("Error updating user profile:", e3), e3;
  }
}, Lt = async (e2, t2, a2 = false, n2) => new Promise(async (o2) => {
  var _a2, _b;
  if (e2 == null ? void 0 : e2.webSDK) try {
    const r2 = window == null ? void 0 : window.PW_AUTH_GLOBAL_STORE.dialCode, s2 = window == null ? void 0 : window.PW_AUTH_GLOBAL_STORE.mobileNumber, i2 = y("captchaToken"), c2 = y("captchaSiteKey"), _2 = (_a2 = e2 == null ? void 0 : e2.captchaConfig) == null ? void 0 : _a2.showCaptcha, l2 = { showCaptcha: _2, captchaToken: i2, captchaSiteKey: c2 };
    I(t2);
    o2(await ((_b = e2 == null ? void 0 : e2.webSDK) == null ? void 0 : _b.getOTP(s2, r2, "+91" !== r2 && y("isWhatsAppValid") ? 1 : 0, a2, false, l2, n2))), C(t2);
  } catch (a3) {
    C(t2), st(e2) && _t(Je.LOGIN), o2(a3);
  }
}), vt = async (e2, t2) => {
  if (e2) try {
    const a2 = window.PW_AUTH_GLOBAL_STORE.referCode;
    t2.innerText = "", t2.appendChild(Ze(true)), $(t2, true);
    const n2 = await (e2 == null ? void 0 : e2.referCode(a2));
    if ($(t2), n2.success) {
      t2.innerText = "";
      const e3 = O("img");
      e3.src = ht.TICK_GREEN, t2.appendChild(e3), t2.setAttribute("data-referralApplied", "active");
    }
  } catch (e3) {
    e3 && ($(t2), t2.setAttribute("data-referralApplied", "active"), t2.innerHTML = ft.INVALID_CODE, t2.classList.add("pw_auth-referral_error_text"));
  }
}, At = async (e2) => {
  try {
    return await (e2 == null ? void 0 : e2.termsAndConditions());
  } catch (e3) {
    console.log("error: ", e3);
  }
}, Rt = async (e2 = {}) => {
  var _a2;
  const { webSDK: t2, cohortId: a2 } = e2, n2 = window.PW_AUTH_GLOBAL_STORE.mobileNumber, o2 = window.PW_AUTH_GLOBAL_STORE.dialCode, r2 = window.PW_AUTH_GLOBAL_STORE.userName, s2 = window.PW_AUTH_GLOBAL_STORE.referCode, i2 = y("captchaToken"), c2 = y("captchaSiteKey"), _2 = (_a2 = e2 == null ? void 0 : e2.captchaConfig) == null ? void 0 : _a2.showCaptcha, l2 = { showCaptcha: _2, captchaToken: i2, captchaSiteKey: c2 };
  await (t2 == null ? void 0 : t2.registerUser({ countryCode: o2, phoneNumber: n2, firstName: r2, ...s2 ? { uniqueReferCode: s2 } : {}, ...a2 ? { cohortId: a2 } : {}, captchaPayload: l2 }));
}, Pt = async (e2, t2) => {
  const a2 = window.PW_AUTH_GLOBAL_STORE.mobileNumber, n2 = mt.getCookie("referralInfo") || "";
  return await (e2 == null ? void 0 : e2.verifyOTP(a2, t2, n2));
}, Ut = (e2, t2) => {
  const a2 = window.PW_AUTH_GLOBAL_STORE.mobileNumber;
  return e2 == null ? void 0 : e2.verifyPassword(a2, t2);
}, Dt = async (e2, t2) => {
  const a2 = y("registeredUserId");
  return await (e2 == null ? void 0 : e2.checkValidOTP({ otp: t2, userId: a2 }));
}, Bt = async (e2) => await (e2 == null ? void 0 : e2.getUserSegment()), Gt = async (e2, t2) => {
  try {
    const t3 = true;
    return mt.webSDK || mt.initialize(e2), mt.setCookie("new_lms", t3.toString()), t3;
  } catch (e3) {
    return false;
  }
}, Mt = async (e2, t2) => await (e2 == null ? void 0 : e2.updateUser({ firstName: (t2 == null ? void 0 : t2.firstName) || "", lastName: (t2 == null ? void 0 : t2.lastName) || "", email: (t2 == null ? void 0 : t2.email) || "" })), kt = async (e2, t2, a2, n2) => {
  try {
    const i2 = await fetch(`${((e3) => {
      const { isDev: t3, isStage: a3 } = te(e3);
      return t3 ? o : a3 ? r : s;
    })(e2)}/core-analytics/universal/experiments/get-variant`, { method: "POST", headers: { accept: "*/*", authorization: `Bearer ${t2}`, "cache-control": "no-cache", "client-type": "WEB", "client-version": "1.0.0", "content-type": "application/json", pragma: "no-cache" }, body: JSON.stringify({ experimentName: n2, unleashContext: { userId: a2 }, analyticsContext: { userId: a2 } }) });
    return i2.ok ? await i2.json() : null;
  } catch (e3) {
    return console.error("Failed to fetch experiment variant:", e3), null;
  }
}, Wt = async (e2, t2, a2) => {
  var _a2;
  const n2 = await kt(e2, t2, a2, Tt);
  return ((_a2 = n2 == null ? void 0 : n2.data) == null ? void 0 : _a2.name) === Ot;
}, Ft = async (e2, t2) => {
  var _a2, _b;
  return (e2 == null ? void 0 : e2.themeFor) === ee.AMBASSADOR_PORTAL ? await ((_a2 = e2 == null ? void 0 : e2.webSDK) == null ? void 0 : _a2.getCohortQuestionDetailForAmbassador(t2)) : await ((_b = e2 == null ? void 0 : e2.webSDK) == null ? void 0 : _b.getCohortQuestionDetail(t2));
}, Ht = { "pw_auth-v2-switch-screen-cta": "_pw_auth-v2-switch-screen-cta_1ail8_1", "pw_auth-v2-otp-input-error": "_pw_auth-v2-otp-input-error_1ail8_19", "pw_auth-v2-otp-danger": "_pw_auth-v2-otp-danger_1ail8_26", "pw_auth-v2-active-border": "_pw_auth-v2-active-border_1ail8_30", "pw_auth-v2-border": "_pw_auth-v2-border_1ail8_38" }, Kt = ["#D1E9FF", "#D3F8DF", "#FEF7C3", "#FFEAD5"], $t = ["SY", "CN", "KP", "QA"];
let Vt = 0;
const xt = ((_a = window == null ? void 0 : window.location) == null ? void 0 : _a.host) || "", Yt = () => xt.includes("staging"), Xt = (e2) => {
  Vt = Yt() ? e2[Qe == null ? void 0 : Qe.FIREBASE_HELP_VISIBLE_COUNT_STAGE] : e2[Qe == null ? void 0 : Qe.FIREBASE_HELP_VISIBLE_COUNT] || 0;
}, qt = (e2, t2) => {
  let a2 = "";
  Array.from(e2).every((e3) => (a2 += e3.value, 1 === e3.value.length)) && (C(t2), t2.dispatchEvent(new Event("click")));
}, zt = () => {
  const e2 = document.querySelector("#pw_auth-v2-otp-section").querySelector("#pw_auth-v2-otp-error-wrapper");
  e2 && (e2.innerHTML = "", e2.style.display = "none", e2.remove());
  document.querySelector("#pw_auth-v2-otp-input-container").querySelectorAll("input").forEach((e3) => {
    e3.classList.remove(Ht["pw_auth-v2-otp-input-error"]), e3.value && e3.classList.add(Ht["pw_auth-v2-active-border"]);
  });
}, jt = (e2, t2, a2) => {
  const n2 = document.querySelector("#pw_auth-v2-otp-timer"), o2 = document.querySelector("#pw_auth-v2-resend-otp-container"), r2 = document.querySelector("#pw_auth-v2-otp-resend-container"), s2 = document.querySelector("#pw_auth-v2-otp-input-container"), i2 = document.querySelector("#pw_auth-v2-verify-otp-cta"), c2 = document.querySelector("#pw_auth-v2-help-cta"), _2 = s2.querySelectorAll("input");
  n2.style.display = "flex", n2.classList.remove(Ht["pw_auth-v2-otp-danger"]), o2.style.display = "none", r2.style.display = "none", s2.querySelectorAll("input").forEach((e3) => {
    e3.value = "", e3.classList.remove(Ht["pw_auth-v2-active-border"]);
  }), qt(_2, i2), t2(), zt(), dt(Je.OTP);
  try {
    Vt--, Vt <= 0 && c2 && (c2.style.display = "flex"), (async (e3, t3) => {
      var _a2;
      const a3 = e3 == null ? void 0 : e3.webSDK, n3 = y("mobileNumber"), o3 = y("captchaToken"), r3 = y("captchaSiteKey"), s3 = (_a2 = e3 == null ? void 0 : e3.captchaConfig) == null ? void 0 : _a2.showCaptcha, i3 = { showCaptcha: s3, captchaToken: o3, captchaSiteKey: r3 };
      await (a3 == null ? void 0 : a3.resendOTP(n3, t3, i3));
    })(e2, a2);
  } catch (t3) {
    ((e3) => {
      const t4 = { mode: "manual", UserPhoneNumber: y("mobileNumber") };
      e3 && e3(Q.OTP_ISSUE, t4, false);
    })(e2 == null ? void 0 : e2.logFirebaseEvent);
  }
}, Qt = [{ title: "OTP not received on SMS" }, { title: "OTP not received on Whatsapp" }, { title: "OTP not received on Call" }, { title: "Received OTP is not working" }], Zt = () => {
  (window == null ? void 0 : window.PW_AUTH_GLOBAL_STORE) && (window.PW_AUTH_GLOBAL_STORE = { ...i });
}, Jt = (e2) => true === (e2 == null ? void 0 : e2.isPiracyEnabled), ea = (e2) => {
  var _a2;
  return 423 === ((e2 == null ? void 0 : e2.statusCode) ?? (e2 == null ? void 0 : e2.status) ?? (e2 == null ? void 0 : e2.code) ?? ((_a2 = e2 == null ? void 0 : e2.response) == null ? void 0 : _a2.status));
}, ta = (e2) => {
  const t2 = e2 == null ? void 0 : e2.firebaseRemoteConfig;
  return console.log("firebaseRemoteConfig: ", t2), t2 && (e2 == null ? void 0 : e2.firebaseRemoteConfig[Qe.FIREBASE_ENABLE_V2_AUTH_FLOW]) || false;
}, aa = (e2) => {
  const t2 = Kt.length - 1;
  return Kt[e2 < t2 ? e2 : t2];
}, na = (e2) => [...e2].sort((e3, t2) => "GRID" === e3.uiType && "GRID" !== t2.uiType ? -1 : "GRID" !== e3.uiType && "GRID" === t2.uiType || "QUESTION" === e3.type && "QUESTION" !== t2.type ? 1 : "QUESTION" !== e3.type && "QUESTION" === t2.type ? -1 : 0);
async function oa({ renderType: e2 = "modal", ...t2 }) {
  if (!document && !(t2 == null ? void 0 : t2.webSDK)) return console.error("Web SDK not found!"), void z("Web SDK not found. Please refresh.");
  const a2 = document.getElementById("pw_auth-flow");
  if (!a2) return void console.error("pw_auth-flow element not found!");
  let n2, o2;
  try {
    if ("auth" === t2.flow) {
      const { initAuth: e3 } = await import(/* @vite-ignore */ "https://static.pw.live/web/sdk/auth-new/prod/v1.7.103/pw-auth-web-sdk.auth.G8IhAml2.js");
      n2 = await e3(t2);
    } else {
      if ("cohort" !== t2.flow) throw new Error(`Invalid flow type: ${t2.flow}`);
      {
        const { initCohort: e3 } = await import(/* @vite-ignore */ "https://static.pw.live/web/sdk/auth-new/prod/v1.7.103/pw-auth-web-sdk.cohort.C4HL1dot.js");
        n2 = await e3(t2);
      }
    }
  } catch (e3) {
    return void console.error("Error initializing flow:", e3);
  }
  if ("modal" === e2) {
    const e3 = ta(t2);
    if (e3) {
      o2 = (await import(/* @vite-ignore */ "https://static.pw.live/web/sdk/auth-new/prod/v1.7.103/pw-auth-web-sdk.index.D8t0MtSY.js")).createModal;
    } else {
      o2 = (await import(/* @vite-ignore */ "https://static.pw.live/web/sdk/auth-new/prod/v1.7.103/pw-auth-web-sdk.Modal.GXqv6liA.js")).createModal;
    }
    const r2 = o2(t2);
    a2.appendChild(r2);
    const s2 = r2.querySelector(e3 ? "#pw_auth-v2-modal-content" : ".pw_auth-modalContent");
    if (!s2) return void console.error("Modal content element not found!");
    s2.appendChild(n2), r2.style.display = "flex", "skills" !== (t2 == null ? void 0 : t2.themeFor) || e3 || (s2.style.height = "700px"), (t2 == null ? void 0 : t2.enableTruecaller) || window.addEventListener("click", (e4) => {
      e4.target === r2 && (K(), r2.style.display = "none", document.body.style.overflow = "scroll", r2.remove());
    });
  } else {
    let e3 = document.getElementById("pw_auth-toast_container");
    e3 || (e3 = document.createElement("div"), e3.setAttribute("id", "pw_auth-toast_container"), a2.appendChild(e3)), a2.appendChild(n2);
  }
}
export {
  et as $,
  $ as A,
  Lt as B,
  ht as C,
  _t as D,
  Q as E,
  Et as F,
  Je as G,
  pt as H,
  Z as I,
  F as J,
  vt as K,
  At as L,
  k as M,
  B as N,
  J as O,
  De as P,
  Be as Q,
  G as R,
  Rt as S,
  ft as T,
  b as U,
  lt as V,
  Ze as W,
  Y as X,
  Yt as Y,
  Qe as Z,
  Ht as _,
  Fe as a,
  Ne as a$,
  ut as a0,
  p as a1,
  Te as a2,
  ge as a3,
  Mt as a4,
  q as a5,
  X as a6,
  bt as a7,
  Ae as a8,
  Re as a9,
  Ee as aA,
  Ge as aB,
  d as aC,
  h as aD,
  V as aE,
  R as aF,
  v as aG,
  A as aH,
  Oe as aI,
  me as aJ,
  Pe as aK,
  Xt as aL,
  ve as aM,
  He as aN,
  Ut as aO,
  yt as aP,
  we as aQ,
  Ce as aR,
  Zt as aS,
  Ct as aT,
  Ft as aU,
  aa as aV,
  D as aW,
  Nt as aX,
  ee as aY,
  na as aZ,
  ye as a_,
  gt as aa,
  zt as ab,
  qt as ac,
  xe as ad,
  ze as ae,
  Ie as af,
  he as ag,
  fe as ah,
  Dt as ai,
  Pt as aj,
  Ye as ak,
  St as al,
  Wt as am,
  be as an,
  Le as ao,
  We as ap,
  jt as aq,
  $t as ar,
  Ve as as,
  Qt as at,
  u as au,
  _ as av,
  c as aw,
  dt as ax,
  L as ay,
  Bt as az,
  je as b,
  Se as b0,
  P as b1,
  E as b2,
  U as b3,
  g as b4,
  m as b5,
  w as b6,
  oa as b7,
  ea as c,
  z as d,
  $e as e,
  Ke as f,
  y as g,
  Xe as h,
  Jt as i,
  qe as j,
  Gt as k,
  O as l,
  x as m,
  H as n,
  T as o,
  S as p,
  f as q,
  K as r,
  ta as s,
  ke as t,
  N as u,
  I as v,
  st as w,
  it as x,
  C as y,
  M as z
};
