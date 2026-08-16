export function initErrorBoundaries() {
  window.addEventListener('error', function(e) {
    if (e && e.message && (
      e.message.indexOf('fetch') !== -1 ||
      e.message.indexOf('Network') !== -1 ||
      e.message.indexOf('Something went wrong') !== -1
    )) {
      e.preventDefault();
      e.stopImmediatePropagation();
      return true;
    }
  }, true);

  window.addEventListener('unhandledrejection', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
  }, true);
}
