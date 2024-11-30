const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const helmetMiddleware = require("../security/helmet");
const compression = require("compression");
const cors = require("cors");
const app = express();
require("dotenv").config();

const corsOptions = {
  origin: "https://lunartechlab-zelino.vercel.app",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));
app.use(compression());
helmetMiddleware(app);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../../vuejs/dist")));
// Serve the frontend application for all other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../vuejs/dist/index.html")); // Adjust the path
});

app.use(expressLayouts);

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
