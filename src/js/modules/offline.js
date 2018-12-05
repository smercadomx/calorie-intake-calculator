export default function setupOffline() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').then((registration) => {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, (err) => {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  } else if ('applicationCache' in window) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = 'load-appcache.html';
    document.body.appendChild(iframe);

    window.addEventListener('load', () => {
      window.applicationCache.addEventListener('updateready', () => {
        if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
          // Browser downloaded a new app cache.
          if (window.confirm('A new version of this site is available. Load it?')) {
            window.location.reload();
          }
        }
      }, false);
    }, false);
  }
}