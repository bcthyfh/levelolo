import './styles/main.css';
import { initApiInterceptor } from './modules/apiInterceptor.js';
import { initErrorBoundaries } from './modules/errorBoundary.js';

// Initialize network interception and error protection
initApiInterceptor();
initErrorBoundaries();

document.addEventListener('DOMContentLoaded', () => {
  console.log('Physics Wallah Web Application initialized cleanly.');
});
