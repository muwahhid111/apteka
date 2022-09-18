const mongoose = require("mongoose");
const medicationSchema = mongoose.Schema({
  name: String,
  price: {
    type: Number,
    default: 0,
  },
  isPrescription: {
    type: Boolean,
    default: false,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    default: null,
  },
});

const Medication = mongoose.model('Medication', medicationSchema);
module.exports = Medication;