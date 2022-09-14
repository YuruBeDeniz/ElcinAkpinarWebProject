const express = require("express");
const router = express.Router();
const { model } = require("mongoose");
const Concert = require("../models/gallery");

router.get("/", (req, res, next) => {
  Concert.find().then((concert) => {
    res.status(200).json(concert);
  });
});

router.post("/add-picture", (req, res, next) => {
  const { title, imgUrl } = req.body;
  Concert.create({
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

module.exports = router;
