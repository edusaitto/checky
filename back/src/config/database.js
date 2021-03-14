const mongoose = require('mongoose');

    try {
        mongoose.connect(
            'mongodb://saito:Saito1502@geonosis.mongodb.umbler.com:48124', 
            { useNewUrlParser: true }
            )
    } catch (error) {
        console.log(error);
    } 

module.exports = mongoose;
