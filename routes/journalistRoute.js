const express = require("express");
const router = express.Router();

const { allJournalists,
    createJournalist,
    getJournalist,
    updateJournalist,
    deleteJournalist
     } = require("./../controllers/journalistController.js");

router
    .route("/")
    .get(allJournalists)
    .post(createJournalist); 
router
    .route("/:_id")
    .get(getJournalist)
    .patch(updateJournalist)
    .delete(deleteJournalist);

    module.exports = router; 