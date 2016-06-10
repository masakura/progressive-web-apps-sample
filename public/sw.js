'use strict';

(function () {
    console.log('start sw worker');

    self.addEventListener('push', event => {
        const notification = self.registration.showNotification('PWA Notification', {
            body: 'registration',
            icon: '/app-icon.png'
        });
        event.waitUntil(notification);
    });
})();