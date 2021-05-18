const mongoose = require("mongoose");
const Schema = mongoose.schema;

const movieSchema = new Schema({
    name : String,
    genre: String,
    directorId: String,
    }
)
module.exports = mongoose.model("Movie",movieSchema)