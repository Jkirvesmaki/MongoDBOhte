const router = require("express").Router();
let Jobsite = require("../models/jobsite.model");

router.route("/").get((req, res) => {
  Jobsite.find()
    .then((jobsite) => res.json(jobsite))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const jobsite = req.body.jobsite;

  const newJobsite = new Jobsite({ jobsite });

  newJobsite
    .save()
    .then(() => res.json("Työmaa lisätty!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
