import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js';

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import {
  getAnalytics,
  logEvent as GAlogEvent,
  isSupported as isFBSupported,
} from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js';

import {
  getRemoteConfig,
  ensureInitialized,
  activate,
  fetchAndActivate,
  getValue,
  fetchConfig,
  isSupported as isFBRemoteConfigSupported,
} from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-remote-config.js';

window._fb = {
  initializeApp,
  getAnalytics,
  GAlogEvent,
  isFBSupported,
  getRemoteConfig,
  ensureInitialized,
  activate,
  fetchAndActivate,
  fetchConfig,
  getValue,
  isFBRemoteConfigSupported,
};
// This script was used to generate the static script of firebase used in firebase service file.
