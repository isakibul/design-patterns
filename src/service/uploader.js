const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, done) => {
    done(null, "./uploads");
  },
  filename: (req, file, done) => {
    const fileExtension = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExtension, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now() +
      fileExtension;
    done(null, fileName);
  },
});

const upload = multer({
  // dest: "uploads",
  // storage: storage,
  limits: {
    fileSize: 5000000,
  },
  fileFilter: (req, file, done) => {
    const fileName = file.mimetype;
    const fieldName = file.fieldname;

    if (
      fieldName === "avatar" &&
      (fileName === "image/png" || fileName === "image/jpeg")
    ) {
      done(null, true);
      return;
    }

    if (fileName === "docs" || fileName === "application/pdf") {
      done(null, true);
      return;
    }

    done(new Error("File type not supported"));
  },
});

module.exports = upload;
