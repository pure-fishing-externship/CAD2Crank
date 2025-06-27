const multer = require("multer");
const MIME_TYPES = {
    "image/png" : "png",
};

const dir = '../storage/image-input'; //path to the input images

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, dir);
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(" ").join("_");
        const extension = MIME_TYPES[file.minetype];
        callback(null, Date.now() + "." + extension);

    },
}); //uploads 3d to 2d converted png images to image-input folder

const fileFilter = (req, file, cb) => {
    if (!MIME_TYPES[file.mimetype]) {
        cb("File must be png image", false);
    } else {
        cb(null, true);
    }
}; //validation to ensure only png images are passed

module.exports = multer({
    storage: storage,
    limit: {
        fileSize: 2000000,
    },
    fileFilter,
}).single("image");



