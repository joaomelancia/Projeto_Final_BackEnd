const express = require("express");
const { allLocations,
    createLocation,
    getLocation,
    updateLocation,
    deleteLocation
     } = require("./../controllers/locationController.js");
const router = express.Router();

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