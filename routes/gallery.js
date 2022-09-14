const router = require("express").Router();
const { model } = require("mongoose");
const Gallery = require("../models/Gallery");

router.get("/", (req, res, next) => {
  Gallery.find().then((gallery) => {
    res.status(200).json(gallery);
  });
});

router.post("/add-picture", (req, res, next) => {
  const { title, imgUrl } = req.body;
  Gallery.create({
    title,
    imgUrl,
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

model.exports = router;
