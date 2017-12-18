const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config();
const DIST_DIR = path.join(__dirname, 'dist');
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT);

const users = require('./users');
const newUsers = require('./newUsers');
const saveToMongo = require('./saveToMongo');
const fetchFromMongo = require('./fetchFromMongo');

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
            socket.emit('successful-sign-on', true);
        }
    }

    const saved = (status) => {
        console.log('status of the save is: ', status);
        socket.emit('saved', status);
    }

    const fetched = (res) => {
        console.log('res is: ', res);
        socket.emit('fetched', res);
    }
    socket.on('user', ((res, password) => {
        console.log('server side - user trying to connect');
        users(res, userExists);
    }));

    socket.on('new-user-attempt', (res) => {
        console.log('server: new user: ', res);
        newUsers(res, userExists);
    });

    socket.on('save', (res) => {
        console.log('saving serverside: ', res);
        saveToMongo(res, saved);
    });

    socket.on('fetching', (res) => {
        fetchFromMongo(res, fetched);
    })
}))
console.log('app running on port: ', PORT);

