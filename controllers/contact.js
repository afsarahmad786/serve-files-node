const rootDir = require("../util/path");
const path = require("path");

exports.contact = (req, res, next) => {
  res.render("contact", {
    pageTitle: "contact",
    path: "/contactus",
  });
};
//  (req, res, next) => {
//   res.sendFile(path.join(rootDir, "views", "contact.html"));
// };

exports.success = (req, res, next) => {
  res.render("success", {
    pageTitle: "success",
    path: "/success",
  });
};
