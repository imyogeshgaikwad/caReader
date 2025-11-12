module.exports.isLoggedIn = (req, res, next) =>{
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to perform this action!");
    return res.redirect("/login"); // ⚠️ fixed: should redirect to /login, not "listings"
  }
  next();
};

module.exports.saveRedirectUrl = (req,res,next)=>{
  if(req.session.redirectUrl){
    res.locals.redirectUrl = req.session.redirectUrl
  }
  next();
};