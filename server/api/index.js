const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const helmetMiddleware = require("../security/helmet");
const compression = require("compression");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(compression());
helmetMiddleware(app);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../../vuejs/dist")));
// Serve the frontend application for all other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../vuejs/dist/index.html")); // Adjust the path
});
// app.use(
//   express.static(path.join(__dirname, "../../public"), {
//     /// caching statci files
//     maxAge: "1d",
//     etag: true,
//     lastModified: true,
//     setHeaders: (res, path) => {
//       if (
//         path.endsWith(".js") ||
//         path.endsWith(".css") ||
//         path.endsWith(".jpg") ||
//         path.endsWith(".jpeg") ||
//         path.endsWith(".png") ||
//         path.endsWith(".mp4")
//       ) {
//         res.set("Cache-Control", "public, max-age=86400");
//       }
//     },
//   })
// );
app.use(expressLayouts);

// app.set('views', path.join(__dirname, '../../views'));
// app.set('layout', './layouts/app');
// app.set('view engine','ejs');

// google analytics
app.use((req, res, next) => {
  res.locals.analyticsId = process.env.GOOGLE_ANALYTICS_ID;
  next();
});
// Navbar links routes
const navRoutes = require("../routes/navRoute");
app.use("/", navRoutes);

// whatsapp route
const whatsappRoute = require("../routes/whatsappRoute");
app.use("/", whatsappRoute);

// Send Mail route
const sendMail = require("../controller/sendMailController");
app.use("/", sendMail);

const port = process.env.PORT || 5000;
app.listen(port);
module.exports = app;
