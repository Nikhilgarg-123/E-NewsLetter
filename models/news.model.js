const mongoose = require('mongoose');


const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    email: {
       type :mongoose.ObjectId,
       ref : "User"
    }
});

const News = mongoose.model('News', newsSchema);

module.exports = News;