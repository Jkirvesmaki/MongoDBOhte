const router = require("express").Router();
let Worker = require("../models/worker.model");

router.route("/").get((req, res) => {
  Worker.find()
    .then((worker) => res.json(worker))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;

  const newWorker = new Worker({ name });

  newWorker
    .save()
    .then(() => res.json("Työntekijä lisätty!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
