const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;

app.listen(port, () => {
    console.log('App is up an listening to port ' + port)
});


app.get('/ping', (req, res) =>{
    res.send('Hey there, from firebase');
})