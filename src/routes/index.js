const { Router } = require("express");
const upload = require("../service/uploader");

const router = Router();

/**
 * single file upload
 */
// router.post("/files", upload.single("avatar"), (req, res, next) => {
//   try {
//     console.log(req.file);
//     res.send("File uploaded successfully");
//   } catch (error) {
//     next(error);
//   }
// });

/**
 * multiple similar type file upload
 */
// router.post("/files", upload.array("avatar"), (req, res, next) => {
//   try {
//     console.log(req.file);
//     res.send("File uploaded successfully");
//   } catch (error) {
//     next(error);
//   }
// });

/**
 * multiple different type file upload
 */
const fields = [
  {
    name: "avatar",
    maxCount: 1,
  },
  {
    name: "gallery",
    maxCount: 3,
  },
];
router.post("/files", upload.fields(fields), (req, res, next) => {
  try {
    console.log(req.files);
    res.send("File uploaded successfully");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
