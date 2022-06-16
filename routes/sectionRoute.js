const express = require("express");
const router = express.Router();

const { allSections,
    createSection,
    getSection,
    updateSection,
    deleteSection
     } = require("./../controllers/sectionController.js");

router
    .route("/")
    .get(allSections)
    .post(createSection); 
router
    .route("/:_id")
    .get(getSection)
    .patch(updateSection)
    .delete(deleteSection);

    module.exports = router; 