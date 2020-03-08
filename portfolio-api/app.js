const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');


const app = express();

<<<<<<< HEAD
=======

>>>>>>> 09eccfeb30f5a69df9c1f2d9442381af2bb2074d
app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
<<<<<<< HEAD
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorizaion');
    next();
});

app.get('/api', (req, res, next) =>{
    res.send('API Status: Running')
}); 

app.post('api/email', (req, res, next) => {

    console.log(req.body);

    sendGrid.setApiKey('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');
    const msg = {
        to: 'k2seto@edu.uwaterloo.ca',
=======
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.get('/api', (req, res, next) => {
    res.send('API Status: I\'m awesome')
});


app.post('/api/email', (req, res, next) => {

    console.log(req.body);

    sendGrid.setApiKey('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');
    const msg = {
        to: 'k2seto@uwaterloo.ca',
>>>>>>> 09eccfeb30f5a69df9c1f2d9442381af2bb2074d
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(result => {
<<<<<<< HEAD
            res.status(200).json({
                success: true
            });
        })
        .catch(err => {
=======

            res.status(200).json({
                success: true
            });

        })
        .catch(err => {

>>>>>>> 09eccfeb30f5a69df9c1f2d9442381af2bb2074d
            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });
<<<<<<< HEAD


});

app.listen(3030, 'kyleseto2.github.io');
=======
});


app.listen(3030, '0.0.0.0');
>>>>>>> 09eccfeb30f5a69df9c1f2d9442381af2bb2074d
