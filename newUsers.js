module.exports = ((info, userExists) => {
    const MongoClient = require('mongodb').MongoClient;
    const bcrypt = require('bcrypt');
    const dotenv = require('dotenv').config();
    const url = 'mongodb://localhost:27017/';

    MongoClient.connect(url, (err, db) => {
        let col = db.db('test').collection('userDatabase');
        let user = info.user;
        let password = info.password;
        // col.deleteMany({});
        col.findOne({user}, (err, item) => {
            if (!item) {
                bcrypt.hash(password, 5, (err, bcryptedPassword) => {
                    let newUser = {user, bcryptedPassword}
                    col.insert(newUser);
                    userExists(true);
                    db.close();
                });
            }
        })
    });
});

