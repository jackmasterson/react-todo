module.exports = ((res, savedStatus) => {
    const MongoClient = require('mongodb').MongoClient;
    const dotenv = require('dotenv').config();
    const url = 'mongodb://localhost:27017/';
    let data = res.data;
    let user = res.user;
    console.log('data: ', data);
    console.log('user: ', user);
    MongoClient.connect(url, (err, db) => {
        let col = db.db('save').collection(user);
        col.remove({});
        col.insert(data);
        savedStatus(true);
        db.close();
    });
});

