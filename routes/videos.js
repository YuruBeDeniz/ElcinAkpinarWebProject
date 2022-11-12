const router = require("express").Router();
const YouTube = require('../models/YouTube');

router.post('/', (req, res, next) => {
    const { youTubeURL } = req.body;

    if(youTubeURL === null) {
        res.status(400).json({message: 'Provide a YouTube link'})
    }

    const youTubeSrcRegex = /www\.youtube\.com\/watch\?v\=...........$/
    if (!youTubeSrcRegex.test(youTubeURL)) {
      res.status(400).json({ message: 'Provide a valid YouTube link.' });
      return;
    }

    YouTube.create({ youTubeLink: youTubeURL})
        .then(createdObj => {
            console.log('created Youtube link: ', createdObj)
            const { youTubeLink, _id } = createdObj
            const youTube = { youTubeLink, _id }
            res.status(201).json({youTube: youTube})
        })
       .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Oh no! Server Error" })
        }) 
});

router.get('/', (req, res, next) => {
    YouTube.find()
      .then((allVideos) => {
        res.json(allVideos)
      })
      .catch((err) => {
        console.log(err)
        res.json(err)
      });
  });

module.exports = router;

