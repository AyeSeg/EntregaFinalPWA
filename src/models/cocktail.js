const mongoose = require("mongoose");

const cocktailSchema = mongoose.Schema({

    name: { type: String },
    description: { type: String },
    img: { type: String }

});

module.exports = mongoose.model('Cocktail', cocktailSchema);