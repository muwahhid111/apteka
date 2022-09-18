const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username: String,
  wallet: Number,
  havePrescription: Boolean,
  shoppingСart: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Medication",
    },
  ],
  toPay: Number,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
