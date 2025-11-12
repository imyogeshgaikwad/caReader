module.exports.isLoggedIn = (req, res, next) =>{
  if (!req.isAuthenticated()) {
    req.flash("error", "You must be logged in to perform this action!");
    return res.redirect("/login"); // ⚠️ fixed: should redirect to /login, not "listings"
  }
  next();
}
