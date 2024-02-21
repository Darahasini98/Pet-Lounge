const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');


router.get("/profile", 
    async (req, res) => {


        res.send(`Hello, ${req.body.person}!`);

        try {
            res.send(`Hello, ${req.body.person}!`);
            res.json({ success: true });
        }
        catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })
    module.exports = router;