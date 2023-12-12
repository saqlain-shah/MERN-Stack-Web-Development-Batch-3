import express from "express";
import multer from 'multer';
import path from 'path';

const app = express();

//SET REQUIRE FILES AND STORAGE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/"); // Set the directory where uploaded images will be stored
    // Note: You are responsible for creating the directory when providing destination as a function.
    // When passing a string, multer will make sure that the directory is created for you.({dest:'./upload})
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

//LIMIT OR VALIDATIONS FOR IMAGES

const upload = multer({
  storage: storage,
limits: { fileSize: 1 * 1024 * 1024 }, //1MB
fileFilter : function (req, file, cb) {
  // Check if the file type is allowed
  const allowedFileTypes = [ 'jpeg', 'jpg', 'png',];
  const fileExtension = path.extname(file.originalname).toLowerCase().replace('.', '');
  if (allowedFileTypes.includes(fileExtension)) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error('Invalid file type. Allowed file types: ' + allowedFileTypes.join(', ')), false); // Reject the file
  }
}
}
);

export default upload;

