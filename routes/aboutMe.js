/* const router = require("express").Router();
const AboutMe = require('../models/AboutMe');

router.post('/aboutme', (req, res, next) => {
    const { aboutMe } = req.body;
    console.log(req.body)
    AboutMe.create({textBody: aboutMe})
        .then(createdAboutMe => {
            const { textBody } = createdAboutMe;
            res.status(201).json({aboutMe: textBody})
        })
        .catch(err => {
            console.log(err);
            req.status.json({message: 'Internal Server Error'})
        })
}) 

module.exports = router; */