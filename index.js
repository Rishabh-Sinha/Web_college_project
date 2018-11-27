var mainApp = {};
(function() {
  var firebase = app_fireBase;
  var uid = null;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      uid = user.uid;
    } else {
      // No user is signed in.

      uid = null;
      window.location.replace("login.html");
    }
  });

  function logout() {
    firebase.auth().signOut();
  }
  mainApp.logOut = logOut;
})();
