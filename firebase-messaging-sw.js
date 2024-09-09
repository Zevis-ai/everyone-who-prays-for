importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDwJfwmRD5ev12tCLFAPn07xdA8aYKWjsM",
  authDomain: "everyone-who-prays-for.firebaseapp.com",
  databaseURL: "https://everyone-who-prays-for-default-rtdb.firebaseio.com",
  projectId: "everyone-who-prays-for",
  storageBucket: "everyone-who-prays-for.appspot.com",
  messagingSenderId: "60325762396",
  appId: "1:60325762396:web:d0406af3dc9f321dea9d99",
  measurementId: "G-K74ST2R3XW"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'  // תוכל להחליף את האייקון בנתיב האייקון האישי שלך
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
