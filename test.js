var firebase = require('firebase')

 var config = {
    apiKey: "AIzaSyCURbuXfr5qYjG2WeLzM8PN4Sxw68Q81HQ",
    authDomain: "auth-fc1d5.firebaseapp.com",
    databaseURL: "https://auth-fc1d5.firebaseio.com",
    projectId: "auth-fc1d5",
    storageBucket: "auth-fc1d5.appspot.com",
    messagingSenderId: "714157044723"
};

firebase.initializeApp(config);
/*
firebase.auth().createUserWithEmailAndPassword('pankaj@test.com', 'pankaj').catch(function(error) {
  // Handle Errors here.
  console.log(error, 'error object:')
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
}).then(function(res) {
  console.log(res, 'response object')
})*/

firebase.auth().signInWithEmailAndPassword('pankaj@test.com', 'pankajaa').catch(function(error) {
  console.log(error, 'Error in file')
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
}).then(function(res) {
  console.log(res, 'response object of file')
})
