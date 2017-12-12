module.exports = ((user, password, userExists) => {
    const MongoClient = require('mongodb').MongoClient;
    const bcrypt = require('bcrypt');
    const dotenv = require('dotenv').config();
    const url = 'mongodb://localhost:27017/';

    MongoClient.connect(url, (err, db) => {
        let col = db.db('test').collection('userDatabase');
        col.findOne({user}, (err, item) => {
            if (!item) {
                userExists(false);
            } else {
                userExists(true);
            }
        })
    });
});

