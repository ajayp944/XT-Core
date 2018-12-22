const express = require('express');
const bodyParser = require('body-parser');
const ProfileService = require('./profileService');
const app = express();
app.use(bodyParser.json());
const profileService = new ProfileService();
app.listen(8080, () => {
    console.log('Express server is ready');
})

app.post('/api/profiles/add', (req, res) => {
    profileService.addProfile(req.body)
        .then(response => {
            res.end(response + ' added successfully.');
        })
        .catch(err => {
            console.log(err)
        })
})

app.get('/api/profiles/:id', (req, res) => {
    profileService.viewProfileById(req.params.id)
        .then(response => {
            res.end(JSON.stringify(response));
        })
        .catch(err => {
            console.log(err)
        })
})

app.delete('/api/profiles/:id', (req, res) => {
    profileService.removeProfileById(req.params.id)
        .then(response => {
            res.end(JSON.stringify(response));
        })
        .catch(err => {
            console.log(err)
        })
})

app.get('/api/profiles', (req, res) => {
    profileService.viewAllProfiles()
        .then(response => {
            res.end(JSON.stringify(response));
        })
        .catch(err => {
            console.log(err)
        })
})
