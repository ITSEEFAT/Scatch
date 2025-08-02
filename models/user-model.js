const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const isMatch = await bcrypt.compare(inputPassword, user.password);
let userSchema = mongoose.Schema({
  fullname: {
    type: String,
    minLength: 3,
    trim: true,
  },
  email: String,
  password: String,
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  order: {
    type: Array,
    default: [],
  },
  contact: {
    type: Number,
    default: +91,
    minLength: 10,
  },
  picture: {
    type: Buffer,
    default: Buffer.alloc(0),
  },
  address: {
    village: { type: String, default: "" },
    post: { type: String, default: "" },
    district: { type: String, default: "" },
    state: { type: String, default: "" },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// 🔐 Hash password before saving (only if modified)
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

module.exports = mongoose.model("user", userSchema);
