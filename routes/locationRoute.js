const express = require("express");
const router = express.Router();

const { allLocations,
    createLocation,
    getLocation,
    updateLocation,
    deleteLocation
     } = require("./../controllers/locationController.js");

router
    .route("/")
    .get(allLocations)
    .post(createLocation); 
router
    .route("/:_id")
    .get(getLocation)
    .patch(updateLocation)
    .delete(deleteLocation);

    module.exports = router; 