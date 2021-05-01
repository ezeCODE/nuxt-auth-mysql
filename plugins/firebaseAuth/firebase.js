import firebase from "firebase/app";
import  "firebase/auth";

import config from "./connect";

!firebase.apps.length ?  firebase.initializeApp(config) : ''


const logins = firebase.auth()
const dataUser = firebase.auth().currentUser

var facebookAuth = new firebase.auth.FacebookAuthProvider();
var twitterAuth = new firebase.auth.TwitterAuthProvider()
var googleAuth = new firebase.auth.GoogleAuthProvider();


export { logins , dataUser , facebookAuth  ,  twitterAuth, googleAuth}

