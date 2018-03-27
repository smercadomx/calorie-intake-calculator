export function setupOffline() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js').then(function (registration) {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, function (err) {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    } else if ('applicationCache' in window) {
        var iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = 'load-appcache.html'
        document.body.appendChild(iframe);

        window.addEventListener('load', function (e) {

            window.applicationCache.addEventListener('updateready', e => {
                if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
                    // Browser downloaded a new app cache.
                    if (confirm('A new version of this site is available. Load it?')) {
                        window.location.reload();
                    }
                }
            }, false);

        }, false);
    }
}