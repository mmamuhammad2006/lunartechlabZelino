const express = require('express');
const cacheExpress = require('cache-express');
const router = express.Router();

const cache = cacheExpress({
    duration: 3600000,
    cacheControl: true,
    maxAge: 3600
});
router.use(cache);
router.get('/',async (req,res)=>{
    try{
        res.render('pages/home',{title: 'Home',target: '#services-sec'});
    }catch(error){
        res.status(500).send('Catch function internal Server Error',error)
    }
});
router.get('/products/:product',async (req,res)=>{
    try{
        const products = req.params.product;
        res.render(`pages/products/${products}`,{title: 'Products',target: '#products-sec'});
    }catch(error){
        res.status(500).send('Catch function internal Server Error',error)
    }
});
router.get('/contact-us',async (req,res)=>{
    try{
        res.render('pages/contactUS',{title: 'Contact Us',target: '#contactUs-sec'});
    }catch (error){
        res.status(500).send('Catch function internal Server Error',error)
    }
});
router.get('/about-us',async (req,res)=>{
    try{
        res.render('pages/aboutUs',{title: 'About Us',target: '#aboutUs-sec'});
    }catch (error){
        res.status(500).send('Catch function internal Server Error',error)
    }
});
module.exports = router;