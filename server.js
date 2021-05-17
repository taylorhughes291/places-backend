/////////////////////
// Environmental Variables
/////////////////////

require("dotenv").config()
const { PORT = 3000, NODE_ENV = "development" } = process.env

const mongoose = require("./db/connection")

const cors = require("cors")
const corsOptions = require("./configs/cors.js")

const express = require("express")
const app = express()

const morgan = require("morgan")
const placeRouter = require("./controllers/place")

////////////
//MIDDLEWARE
////////////
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(express.json());
app.use(morgan("tiny")); //logging

app.get("/", (req, res) => {
    res.json({
        message: "Thank you for accessing the Places API."
    })
})

//Route the place route to the place router
app.use("/place", placeRouter)

app.listen(PORT, () => {
    console.log(`You are listening on port ${PORT}`)
})