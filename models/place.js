const {Schema, model} = require("mongoose")

//Place scheme
const placeSchema = new Schema (
    {
        name: String,
        img: String,
        description: String
    },
    {timestamps: true}
)

//Publish the model
const Place = model('Place', placeSchema)

//Export the published model
module.exports = Place