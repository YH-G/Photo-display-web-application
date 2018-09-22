import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDkMxZGzr0O1faGfl3hHjmA2P_e4pZf7DI",
    authDomain: "photowall-9d18a.firebaseapp.com",
    databaseURL: "https://photowall-9d18a.firebaseio.com",
    projectId: "photowall-9d18a",
    storageBucket: "photowall-9d18a.appspot.com",
    messagingSenderId: "510508637294"
  }
  
firebase.initializeApp(config)

const database = firebase.database()

export {database}