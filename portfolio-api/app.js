const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');


const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
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
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(result => {
            res.status(200).json({
                success: true
            });
        })
        .catch(err => {
            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });


});

app.listen(3030, 'kyleseto2.github.io');