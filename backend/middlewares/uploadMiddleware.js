const multer = require('multer');

// Store in memory (no /uploads/ folder needed)
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Only image files are allowed!'));
    }
    cb(null, true);
  },
});

module.exports = upload;
