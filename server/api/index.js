const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');    
const helmetMiddleware = require('../security/helmet');
const app = express();
require('dotenv').config();

helmetMiddleware(app);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../../public')));
app.use(expressLayouts);

app.set('views', path.join(__dirname, '../../views'));
app.set('layout', './layouts/app');
app.set('view engine','ejs');

// google analytics
app.use((req,res,next)=>{
    res.locals.analyticsId = process.env.GOOGLE_ANALYTICS_ID;
    next();
})
// Navbar links routes
const navRoutes = require('../routes/navRoute');
app.use('/',navRoutes);

// whatsapp route
const whatsappRoute = require('../routes/whatsappRoute');
app.use('/',whatsappRoute);

// Send Mail route
const sendMail = require('../controller/sendMailController');
app.use('/',sendMail);

// const port = process.env.PORT || 5000;
// app.listen(port);
module.exports = app;