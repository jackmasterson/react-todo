module.exports = ((user, password, userExists) => {
    const MongoClient = require('mongodb').MongoClient;
    const bcrypt = require('bcrypt');
    const dotenv = require('dotenv').config();
    const url = 'mongodb://localhost:27017/';

    MongoClient.connect(url, (err, db) => {
        let col = db.db('test').collection('userDatabase');
        col.findOne({user}, (err, item) => {
            console.log('new user item is: ', item);
            if (!item) {
                bcrypt.hash(password, 5, (err, bcryptedPassword) => {
                    console.log(password);
                    console.log(bcryptedPassword);
                    let newUser = {user, bcryptedPassword}
                    col.insert(newUser);
                    db.close();
                });
            }
        })
    });
});

