const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});
/*
 *  use: ...post('/route', upload.single('imageName'), (req, res, next) => { } );
 *  access: req.file
 *  storing: {
 *      imageName: req.file.path,
 *  }
 *
 *  Schema:
 *      imageName: {
 *          type: String
 *          required: true
 *      }
 */

module.exports = upload;
