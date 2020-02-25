const mongo = require('mongodb');
const dbname = "world";
const constr = `mongodb://localhost:27017`;

module.exports = {
    retrieveCountry(req, res, data){
        mongo.connect(constr, { useNewUrlParser: true, useUnifiedTopology: true}, function (err, cor) {
            if (err) {
                console.error(err);
                return;
            }
            cor.db(dbname).collection('country').find().toArray(function (err, data) {
                if (err) throw err
                console.log(data);
                return data;
            });
        
        });
    }
}