module.exports = ((res, fetchedResponse) => {
    const MongoClient = require('mongodb').MongoClient;
    const dotenv = require('dotenv').config();
    const url = 'mongodb://localhost:27017/';
    let user = res;
    console.log('user:', user);
    MongoClient.connect(url, (err, db) => {
        let col = db.db('save').collection(user);
        col.find({}).toArray((err, result) => {
            if(err) {
                console.log('err is: ', err);
            } else {
                fetchedResponse(result);
            }
            db.close();
        });
        // fetchedResponse(todos);
    });
});

