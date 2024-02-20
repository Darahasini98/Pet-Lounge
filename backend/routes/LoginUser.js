const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

router.post("/loginUser", [
    body('useremail').isEmail(),
    body('userpwd', 'Password Length should be greater than 5').isLength({ min: 5 })
],
    async (req, res) => {

        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ result: result.array() });
            //res.send({ errors: result.array() });

        }

        //res.send(`Hello, ${req.body.person}!`);
        let email = req.body.useremail;
        try {
           let userData =  await User.findOne({email});
           console.log(userData)
           if(!userData){
            return res.status(400).json({errors:"Invalid Creds1"});
           }
           if(req.body.userpwd !== userData.userpwd){
            return res.status(400).json({errors:"Invalid Creds2"});
           }
           return res.json({success:true});
           
         
        }
        catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })





// router.get('/profile', async (req, res) => {
//     try {

//         return res.send(`Hello, ${req.body.person}!`);

//     }
//     catch (error) {
//         console.log(error);
//         res.json({ success: false });
//     }
// })
module.exports = router;