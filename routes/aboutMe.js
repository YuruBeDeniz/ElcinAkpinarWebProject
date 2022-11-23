const router = require("express").Router();
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


  router.delete('/delete/:id', (req, res, next) => {
    AboutMe.findByIdAndRemove({_id: req.params.id})
      .then(() => {
        res.status(200).json({message: 'A part of aboutMe is deleted'})
      })
      .catch(err => next(err))
  }) 

module.exports = router;