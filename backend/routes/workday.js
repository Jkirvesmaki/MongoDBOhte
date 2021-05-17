const router = require("express").Router();
let Workday = require("../models/workday.model");

router.route("/").get((req, res) => {
  Workday.find()
    .then((workday) => res.json(workday))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const jobsite = req.body.jobsite;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const wage = req.body.duration;

  const newWorkday = new Workday({
    name,
    jobsite,
    description,
    duration,
    date,
    wage,
  });

  newWorkday
    .save()
    .then(() => res.json("Työpäivä tallennettu"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Workday.findById(req.params.id)
    .then((workday) => res.json(workday))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Workday.findByIdAndDelete(req.params.id)
    .then(() => res.json("Työpäivä poistettu"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Workday.findById(req.params.id)
    .then((workday) => {
      workday.name = req.body.name;
      workday.jobsite = req.body.jobsite;
      workday.description = req.body.description;
      workday.duration = Number(req.body.duration);
      workday.date = Date.parse(req.body.date);
      workday.wage = req.body.wage;

      workday
        .save()
        .then(() => res.json("Työpäivää muokattu!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
