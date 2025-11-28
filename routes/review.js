const express = require("express");
const router = express.Router({ mergeParams: true }); // important for accessing :id
const wrapAsync = require("../utils/wrapAsync.js");
const{validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js")
const reviewController = require ("../controllers/reviews.js")


// POST route for reviews
router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// DELETE review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;
