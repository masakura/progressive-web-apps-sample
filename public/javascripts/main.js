'use strict';

(function () {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
        .then(registration => {
            console.log(registration);
        });

    navigator.serviceWorker.ready
        .then(registration => {
            console.log('Service Worker Ready');

            return registration.pushManager.subscribe({
                userVisibleOnly: true
            });
        })
        .then(sub => {
            console.log('endpoint: ', sub.endpoint);
        })
})();
