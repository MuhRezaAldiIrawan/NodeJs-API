const multer = require('multer');
const path = require('path');

// Set up storage for multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'upload/users_profile/');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});


const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('File format should be JPEG or PNG'), false);
    }
};

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5 // 5MB
    },
    fileFilter: fileFilter
});

module.exports = upload;