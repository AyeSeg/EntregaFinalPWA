const express = require("express");
const cocktailSchema = require("../models/cocktail");

const router = express.Router();

router.get('/cocktails', (req, res) => {
    cocktailSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;