const express = require("express");
const router = express.Router();
const uploadImage = require("./multer-config.js");

router.post("/", uploadImage, (req, res) => {
    if(req.file){
        return res.status(200).json({
            sucess: true,
            message: "Image uploaded!",
        });
    }

    return res.status(400).json({
        success: false,
        error: "Image upload failed!",
    });
}); // post route to handle http request for file upload

module.exports = router;