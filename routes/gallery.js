const express = require("express");
const router = express.Router();
const { model } = require("mongoose");
const Gallery = require("../models/gallery");
const { uploader, cloudinary } = require("../config/cloudinary");

router.get("/", (req, res, next) => {
  Gallery.find().then((gallery) => {
    res.status(200).json(gallery);
  });
});

router.post("/add-picture", uploader.single("gallery"), (req, res, next) => {
  const { imgUrl, publicId } = req.body;
  Gallery.create({
    imgUrl,
    publicId,
  })
    .then((e) => {
      const { title, _id } = e;
      const event = { title, _id };
      res.status(201).json({ event });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
});

router.post("/delete/:id", (req, res, next) => {
  console.log(req.params.id);
  Gallery.findByIdAndDelete({ _id: req.params.id })
    .then((data) => {
      if (data.imgUrl) {
        cloudinary.uploader.destroy(data.publicId);
      }
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
