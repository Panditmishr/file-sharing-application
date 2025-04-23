const fileModel = require('../models/fileModels');
const fileUpload = async (req , res) => {
    try{
        await fileModel.create({
            fileName: req.file.filename,
            originalName: req.file.originalname,
            filePath: req.file.path,
            size: req.file.size,
            username: "test@gmail.com"
        });
    res.status(200).json({
        success: true,
        message: 'File uploaded successfully'
    });
}
    catch(err) {
        console.log(err, 'error in file upload');
    }
};
    

const fileShare = async (req , res) => {
    try{
        const fileId = req.body.id;
        let file = await fileModel.findById(fileId);
    if(!file){
        res.status(404).json({
            success: false,
            message: 'File not found'
        });
    }
    res.status(200).json({
        success: true,
        message: 'File shared successfully'
    });

    res.status(200).json({
        success: true,
        message: 'File uploaded successfully'
    });
}
catch(err) {
    console.log(err, 'error in file share');
}
};

const fileDownload = async (req , res) => {
    try{
        const fileId = req.body.id;
        let file = await fileModel.findById(fileId);
    if(!file){
       res.end("invalid id ");
    }
  console.log(fileId, 'Id');
  res.doenload(file.filePath);
    }
    catch(err) {
        console.log(err, 'error in file download');
    }
};

module.exports = {
    fileUpload,
    fileShare,
    fileDownload
};