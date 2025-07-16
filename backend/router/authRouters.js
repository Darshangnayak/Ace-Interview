
const express = require("express");
const router = express.Router();

const { registerUser, loginUser,getUserProfile } = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getUserProfile);

router.post("/upload-image",upload.single("image"), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Assuming you have a function to save the file and get the URL
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${file.filename}`;

    res.status(200).json({ imageUrl });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;