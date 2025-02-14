const express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");
const User = require("./model/User");
const app = express();

mongoose.connect("mongodb://localhost:27017/politics");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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
   try { const user = await User.create({
     cid:req.body.cid,
     cname:req.body.cname,
     cdob:req.body.cdob,
     caddress:req.body.caddress,
     password:req.body.password
    });
   return res.status(200).json(user);
  } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
   
  });

//Showing login form
app.get("/login", function (req, res) {
    res.render("login");
});


// Handling user signup
app.post("/login", async function(req, res){
    try {
        // check if the user exists
        const user = await User.findOne({ cname: req.body.cname });
        if (user) {
          //check if password matches
          const result = req.body.password === user.password;
          if (result) {
            res.render("secret");
          } else {
            res.status(400).json({ error: "password doesn't match" });
          }
        } else {
          res.status(400).json({ error: "User doesn't exist" });
        }
      } catch (error) {
        res.status(400).json({ error });
      }
});
// Showing login form


// Handling user login
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}


// Handling user logout 
app.get("/logout", function (req, res) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
});

// Middleware to check if the user is logged in

app.listen(4000, function () {
    console.log("Server Has Started!");
});