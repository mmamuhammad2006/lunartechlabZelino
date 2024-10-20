const express = require('express');
const cacheExpress = require('cache-express');
const router = express.Router();

const cache = cacheExpress({
    duration: 3600000,
    cacheControl: true,
    maxAge: 3600
});
router.use(cache);
router.get('/',(req,res)=>{
    try{
        res.render('pages/home',{title: 'Home',target: '#services-sec'});
    }catch(error){
        res.send('Home page internal server error');
        res.status(500).send('Internal Server Error',error)
    }
});
router.get('/services',(req,res)=>{
    try{
        res.render('pages/services',{title: 'Products',target: '#products-sec'});
    }catch(error){
        res.status(500).send('Internal Server Error',error)
    }
});
router.get('/contact-us',(req,res)=>{
    try{
        res.render('pages/contactUS',{title: 'Contact Us',target: '#contactUs-sec'});
    }catch (error){
        res.status(500).send('Internal Server Error',error)
    }
});
router.get('/about-us',(req,res)=>{
    try{
        res.render('pages/aboutUs',{title: 'About Us',target: '#aboutUs-sec'});
    }catch (error){
        res.status(500).send('Internal Server Error',error)
    }
});
module.exports = router;