const firebase = require("firebase");
const bancodedados = require("shorten-firebase.realtime-database");

const firebaseConfig = {
    apiKey: "AIzaSyA2yUXLVQ9c9GJbP52epQosdmrPYriH-6c",
    authDomain: "henrilima-website.firebaseapp.com",
    projectId: "henrilima-website",
    storageBucket: "henrilima-website.appspot.com",
    messagingSenderId: "508755814738",
    appId: "1:508755814738:web:ec03dbdf8f5f137538b28b"
  };

try {
    firebase.initializeApp(firebaseConfig);
    console.log("Conectado ao banco de dados!");
} catch (err) {
    console.log(err);
}
const database = new bancodedados(firebase, false);

module.exports = {
    database,
    firebase,
};
