const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config();
const DIST_DIR = path.join(__dirname, 'dist');
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT);

const users = require('./users');
const newUsers = require('./newUsers');

app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
});

const io = require('socket.io').listen(server);

io.on('connection', ((socket) => {
    const userExists = (status) => {
        console.log('user exists status: ', status);
        if (!status) {
            socket.emit('new-user', true);
        } else {
            console.log('user should be created by now');
            socket.emit('new-user', false);
        }
    }
    socket.on('user', ((res, password) => {
        console.log('server side - user trying to connect');
        console.log('user');
        users(res, password, userExists);
    }));

    socket.on('new-user-attempt', (res, password) => {
        newUsers(res, password, userExists);
    })
}))
console.log('app running on port: ', PORT);

