var path = require('path');
var fs = require('fs');
var express = require('express');
var https = require('https');
var bodyParser = require('body-parser');
// var admin = require('firebase-admin');
// var serviceAccount = require('./players-qr-scanner-723fbb840dd1.json');
// var qrcode = require('qrcode');
var BallLayout = require('./BallLayout');
var Person = require('./Person');

var certOptions = {
    key: fs.readFileSync(path.resolve('server.key')),
    cert: fs.readFileSync(path.resolve('server.crt'))
};

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });

// var db = admin.firestore();
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('static'));

app.get('/', function (req, res) {
    var person = new Person("Ryan");

    res.send(person.contactInfo.name);
    // res.send(person.id);
});


var server = https.createServer(certOptions, app).listen(4443, () =>
{
    console.log("starting server on port 4443");

    // //qrcode.toFile('filename.png', 'Some text');

    // var docRef = db.collection('users').doc('alovelace');

    // var setAda = docRef.set({
    //     first: 'Ada',
    //     last: 'Lovelace',
    //     born: 1815
    // });

    // db.collection('users').get()
    //     .then((snapshot) => {
    //         snapshot.forEach((doc) => {
    //             console.log(doc.id, '=>', doc.data());
    //         });
    //     })
    //     .catch((err) => {
    //         console.log('Error getting documents', err);
    //     });
});