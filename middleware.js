const multer = require('multer');
const path = require('node:path');
const { v4: uuidv4} = require('uuid');


const filePath = path.join(__dirname, 'uploadFiles');

const storage = multer.diskStorage({
    destination: filePath,
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const fileName = uuidv4() + ext;
        cb(null, fileName);
    },

});

const upload = multer({
   storage: storage,
});

module.exports = upload;