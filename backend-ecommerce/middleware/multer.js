const multer = require('multer');

//uploading image
const storage = multer.diskStorage(
    {
        destination:function(req, file, callback){
            callback(null, "./uploads")
        },
        filename:function(req, file, callback){
            callback(null, Date.now()+"_"+file.originalname)
        }
    }
);

const upload = multer({
    storage:storage
});

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads');
//     },
//     filename: function (req, file, cb) {
//         // cb(null, `${Date.now()}.jpg`);
//         cb(null, Date.now()+"_"+file.originalname);
        
//     },
// });

// var upload = multer({ storage });

module.exports = upload;
