const userModel = require("../models/user-model");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  const { fullname, email, password, contact } = req.body;

  try {
    // Check if email already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      req.flash("error", "Email already registered");
      return res.redirect("/register");
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user with hashed password
    const newUser = new userModel({
      fullname,
      email,
      password: hashedPassword,
      contact,
    });

    await newUser.save();

    req.flash("success", "Registration successful. Please login.");
    res.redirect("/login");
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).send("Internal Server Error");
  }
};
