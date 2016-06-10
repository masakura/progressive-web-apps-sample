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
        .then(sub => sub.endpoint.replace(/^https:\/\/android.googleapis.com\/gcm\/send\//, ''))
        .then(endpoint => {
            console.log(endpoint)

            fetch('/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                },
                body: `endpoint=${endpoint}`
            });
        });
})();
