const router = require("express").Router();
const { create } = require("../models/AboutMe");
const AboutMe = require('../models/AboutMe');

router.post('/create-about-me', (req, res, next) => {
    const { aboutMe } = req.body;
    console.log(req.body)
    AboutMe.create({textBody: aboutMe})
        .then(createdAboutMe => {
            console.log('created about me: ', createdAboutMe)
            const { textBody, _id } = createdAboutMe;
            const aboutMe = { textBody, _id}
            console.log('aboutMEEEEE:', aboutMe)
            res.status(201).json({aboutMe: aboutMe})
        })
        .catch(err => {
            console.log(err);
            req.status.json({message: 'Internal Server Error'})
        })
}) 

router.get('/', (req, res, next) => {
    AboutMe.find()
      .then((allAboutMes) => {
        res.json(allAboutMes)
      })
      .catch((err) => {
        console.log(err)
        res.json(err)
      });
  });

module.exports = router;