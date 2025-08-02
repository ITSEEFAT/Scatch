// Requiring npm packages
const bcrypt = require("bcryptjs"); // Use bcryptjs for compatibility with deployment

// Requiring Database
const userModel = require("../models/user-model");

// Requiring utils
const { genrateToken } = require("../utils/genrateToken");

// Register route
module.exports.registerUser = async function (req, res) {
  const { email, password, fullname } = req.body;

  try {
    // Check if user exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      req.flash("error", "You already have an account.");
      return res.redirect("/");
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const createdUser = await userModel.create({
      fullname,
      email,
      password: hashedPassword,
    });

    // Generate and set token
    const token = genrateToken(createdUser);
    req.flash("message", "You have registered successfully.");
    res.cookie("token", token);
    res.redirect("/shop");
  } catch (err) {
    console.error("Registration Error:", err);
    res.status(500).send("Something went wrong");
  }
};

// Login route
module.exports.loginUser = async function (req, res) {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      req.flash("error", "Invalid email or password.");
      return res.redirect("/");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      req.flash("error", "Invalid email or password.");
      return res.redirect("/");
    }

    const token = genrateToken(user);
    res.cookie("token", token);
    res.redirect("/shop");
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).send("Something went wrong");
  }
};

// Logout
module.exports.logout = function (req, res) {
  res.clearCookie("token");
  res.redirect("/");
};

// Get User Profile
module.exports.user = async function (req, res) {
  try {
    const user = await userModel.findOne({ email: req.user.email });

    if (!user) {
      req.flash("error", "User not found.");
      return res.redirect("/");
    }

    const error = req.flash("error");
    res.render("user.ejs", { user, logedin: true, error });
  } catch (err) {
    req.flash("error", "Something went wrong.");
    return res.redirect("/");
  }
};

// Upload User Profile Picture
module.exports.userupload = async function (req, res) {
  try {
    const buffer = req.file.buffer;

    await userModel.findOneAndUpdate(
      { email: req.user.email },
      { picture: buffer },
      { new: true }
    );

    res.redirect("/users/profile");
  } catch (err) {
    req.flash("error", "Image upload failed.");
    res.redirect("/users/profile");
  }
};
