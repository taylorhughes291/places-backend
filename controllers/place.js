const Place = require("../models/place")
const {Router} = require("express")
const router = Router()

//index route (GET)
router.get('/', async (req, res) => {
    const places = await Place.find({})
    res.json({
        status: 200,
        data: places
    })
})


//create route (POST)
router.post('/', async (req, res) => {
    const newPlace = await Place.create(req.body)
    res.json({
        status: 200,
        data: newPlace
    })
})


//update route by ID (PUT)
router.put('/:placeId', async (req,res) => {
    const placeId = req.params.placeId
    const updatedPlace = await Place.findByIdAndUpdate(placeId, req.body, {new: true})
    res.json({
        status: 200,
        data: updatedPlace
    })
})


//Destroy route by ID (DELETE)
router.delete('/:placeId', async (req, res) => {
    const placeId = req.params.placeId
    await Place.findByIdAndDelete(placeId)
    res.json({
        status: 200,
        msg: "Successfully deleted."
    })
})


// Export Router
module.exports = router