const express = require('express');
const path = require('path');
const app = express();

const router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/home.html'));
});

router.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/contact.html'));
});

app.use(router);
app.listen(3333, () => console.log('Server running on port 3333'));