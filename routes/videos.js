const router = require("express").Router();
const YouTube = require('../models/YouTube');

router.post('/videos', (res, req, next) => {
    const { youTubeURL } = req.body;

    if(youTubeURL === null) {
        res.status(400).json({message: 'Provide a YouTube link'})
    }

    const youTubeSrcRegex = /www\.youtube\.com\/watch\?v\=...........$/
    if (!youTubeSrcRegex.test(youTubeSrc)) {
      res.status(400).json({ message: 'Provide a valid YouTube link.' });
      return;
    }

    YouTube.create({ youTubeLink: youTubeURL})
        .then(createdLink => {
            const { youTubeLink, _id } = createdLink
            const youTube = { youTubeLink, _id }
            res.status(200).json({youTube: youTube})
        })
       .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Oh no! Server Error" })
        }) 
});

module.exports = router;

