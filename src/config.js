import firebase from 'firebase'

export const callApi = 'https://www.omdbapi.com'
export const apiKey = '9e432373'
export const appName = 'filmland'

const firebaseConfig = {
    apiKey: "AIzaSyBytLvZxJFJuraaNeqE_RJnc9Rj5B5jmvA",
    authDomain: `${appName}-10c18.firebaseapp.com`,
    databaseURL: `https://${appName}-10c18.firebaseio.com`,
    projectId: `${appName}-10c18`,
    storageBucket: `${appName}-10c18.appspot.com`,
    messagingSenderId: "625269949258",
    appId: "1:625269949258:web:40aa496cba316b3171b7b3"
  }

export const fire = firebase.initializeApp(firebaseConfig)