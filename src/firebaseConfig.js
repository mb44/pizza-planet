import Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyB4MZvGFGbG2UOJrv4T3R7AOdY4hCcAPkY",
    authDomain: "pizza-planet-30835.firebaseapp.com",
    databaseURL: "https://pizza-planet-30835.firebaseio.com",
    projectId: "pizza-planet-30835",
    storageBucket: "",
    messagingSenderId: "104797926768"
  };
  const firebaseApp = Firebase.initializeApp(config);
  const db = firebaseApp.database()
  export const dbMenuRef = db.ref("menu")