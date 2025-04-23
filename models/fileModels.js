const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    originalName: {
        type: String,
        required: true
    },
    filePath:{
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }

});
 const fileModel = mongoose.model('fileModel', fileSchema);

 module.exports = fileModel;