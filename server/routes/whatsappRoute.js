const express = require('express');
const router = express.Router();

// implemeting chat whatsapp logic
router.get('/whatsapp',async(req,res)=>{
    try{
        const number = '923456047058';
        const whatsappUrl = `https://wa.me/${number}`;
        res.redirect(whatsappUrl);
    }catch(error){
        console.error("Error in redirecting to WhatsApp:", error);
        res.status(500).send('Internal Server Error', error);
    }

})

module.exports = router
// console.log(module);