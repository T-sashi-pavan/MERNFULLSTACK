const express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = 
        require("passport-local-mongoose");
const Empuser = require("./model/gdb");
let app = express();

mongoose.connect("mongodb://localhost/employee");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(Empuser.authenticate()));
passport.serializeUser(Empuser.serializeUser());
passport.deserializeUser(Empuser.deserializeUser());

//=====================
// ROUTES
//=====================

// Showing home page
app.get("/", function (req, res) {
    res.render("home");
});

// Showing secret page
app.get("/secret", isLoggedIn, function (req, res) {
    res.render("secret");
});

// Showing register formisLoggedIn
app.get("/register", function (req, res) {
    res.render("register");
});

// Handling user signup
app.post("/register", async (req, res) => {
    const user = await Empuser.create({
        empid:req.body.empid,
      username: req.body.username,
      age:req.body.age,
      email:req.body.email,
      address:req.body.address,
      salary:req.body.salary
    });
  
    return res.status(200).json(user);
  });

//Showing login form


//Handling user logout 
app.get("/logout", function (req, res) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
});



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/register");
}


app.listen(3000, function () {
    console.log("Server Has Started!");
});
