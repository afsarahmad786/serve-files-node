const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const productsController = require("../controllers/contact");

router.get("/contactus", productsController.contact);

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

// router.get("/contactus", (req, res, next) => {
//   res.sendFile(path.join(rootDir, "views", "contact.html"));
// });

router.post("/success", productsController.success);

module.exports = router;
