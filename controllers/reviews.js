const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.createReview = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  const newReview = new  Review(req.body.review);
  newReview.author = req.user._id
  console.log(newReview)
  newReview.listing = listing._id;
  await newReview.save();
    req.flash("success","Review Added!");


  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();
  res.redirect(`/listings/${listing._id}`);
}

module.exports.destroyReview = async (req, res) => {
  const { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
   req.flash("error","Review Deleted");
  res.redirect(`/listings/${id}`);
}
