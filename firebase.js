var app_fireBase = {};
(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDwwwzc4Jhrb1gU_eQsVIRCuPLGuAiB4hw",
    authDomain: "web-login-9eab7.firebaseapp.com",
    databaseURL: "https://web-login-9eab7.firebaseio.com",
    projectId: "web-login-9eab7",
    storageBucket: "web-login-9eab7.appspot.com",
    messagingSenderId: "488978276614"
  };
  firebase.initializeApp(config);

  app_fireBase = firebase;
})();
