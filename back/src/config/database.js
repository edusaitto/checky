const mongoose = require('mongoose');

    try {
        mongoose.connect(
            'mongodb://saito:saito123@kamino.mongodb.umbler.com:48199/tasks', 
            { useNewUrlParser: true }
            )
    } catch (error) {
        console.log(error);
    } 

module.exports = mongoose;