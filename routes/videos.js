const router = require("express").Router();
const YouTube = require('../models/YouTube');

router.post('/add-video', (req, res, next) => {
    const { youTubeLink } = req.body;
    //console.log('request body: ', req.body)

    if(youTubeLink === null) {
        res.status(400).json({message: 'Provide a YouTube link'})
    }

    const youTubeSrcRegex = /www\.youtube\.com\/watch\?v\=...........$/
    if (!youTubeSrcRegex.test(youTubeLink)) {
      res.status(400).json({ message: 'Provide a valid YouTube link.' });
      return;
    }

    YouTube.create({ youTubeLink: youTubeLink})
        .then(createdObj => {
            //console.log('created Youtube link: ', createdObj)
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


router.delete('/delete/:id', (req, res, next) => {
  //console.log('params: ', req.params.id);
  YouTube.findByIdAndRemove({_id: req.params.id})
    .then(() => {
      res.status(200).json({message: 'Video deleted'})
    })
    .catch(err => next(err))
})

module.exports = router;

