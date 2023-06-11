const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require("fs");
const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images'))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + 'jpeg')
    }
});

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb(
            {
                message: "UnSupported file format",
            }, false
        )
    }
};

const uploadImg = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
    limits: { fieldSize: 2000000 }
});

const productImgResize = async (req, res, next) => {
    if (!req.files) return next();
    await Promise.all(req.files.map(async (file) => {
        await sharp(file.path)
            .resize(400, 400)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })
            .toFile(`public/images/products/${file.filename}`);
            fs.unlinkSync(`public/images/products/${file.filename}`);
    }));
    next();
};

const blogImgResize = async (req, res, next) => {
    if (!req.files) return next();
    await Promise.all(req.files.map(async (file) => {
        await sharp(file.path)
            .resize(400, 400)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })
            .toFile(`public/images/blogs/${file.filename}`);
            fs.unlinkSync(`public/images/blogs/${file.filename}`);
    }));
    next();
};

module.exports = { uploadImg, productImgResize, blogImgResize };