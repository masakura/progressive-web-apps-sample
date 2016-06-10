'use strict';

(function () {
    console.log('start sw worker');

    self.addEventListener('push', event => {
        const promise = fetch('/message')
            .then(res => res.json())
            .then(data => self.registration.showNotification('PWA Notification', {
                body: data.message,
                icon: '/app-icon.png'
            }));

        event.waitUntil(promise);
    });
})();