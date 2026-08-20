/**
 * secureSdk.js - HMAC request signing for zenithstudy.site
 */

const SECRET_KEY = 'zenith_study_site_secure_token_2026';

/**
 * Generate HMAC-SHA256 signature using Web Crypto API
 */
async function generateSignature(timestamp, nonce) {
  try {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(SECRET_KEY);
    const messageData = encoder.encode(`${timestamp}:${nonce}`);

    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );

    const signatureBuffer = await crypto.subtle.sign('HMAC', cryptoKey, messageData);
    const hashArray = Array.from(new Uint8Array(signatureBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  } catch {
    return '';
  }
}

/**
 * Generate random hex nonce
 */
function generateNonce(length = 16) {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Attach HMAC security headers to fetch requests targeting API/data endpoints
 */
export async function initSecureFetchInterceptor() {
  const originalFetch = window.fetch;

  window.fetch = async function (input, init = {}) {
    let url = typeof input === 'string' ? input : (input && input.url);
    if (!url) return originalFetch.apply(this, arguments);

    // If request is targeting API gateway or data endpoints, attach signature
    if (url.includes('/api/') || url.includes('/data/') || url.includes('penpencil') || url.includes('firebase')) {
      const timestamp = Date.now().toString();
      const nonce = generateNonce(16);
      const signature = await generateSignature(timestamp, nonce);

      init.headers = init.headers || {};
      if (init.headers instanceof Headers) {
        init.headers.set('X-Zenith-Timestamp', timestamp);
        init.headers.set('X-Zenith-Nonce', nonce);
        init.headers.set('X-Zenith-Signature', signature);
      } else {
        init.headers['X-Zenith-Timestamp'] = timestamp;
        init.headers['X-Zenith-Nonce'] = nonce;
        init.headers['X-Zenith-Signature'] = signature;
      }
    }

    return originalFetch.call(this, input, init);
  };
}

/**
 * Shield initialisation placeholder (DevTools & right-click enabled per user request)
 */
export function initAntiTamperingShield() {
  // DevTools, F12, right-click, and debugging are enabled
}
