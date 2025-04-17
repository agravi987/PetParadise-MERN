const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Hotel name is required"],
    trim: true,
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  price: {
    type: String,
    required: [true, "Price is required"],
  },
  rating: {
    type: Number,
    min: [1, "Rating must be at least 1"],
    max: [5, "Rating cannot be more than 5"],
    required: true,
  },
  reviews: {
    type: Number,
    default: 0,
  },
  services: {
    type: [String],
    required: true,
    enum: ["Boarding", "Grooming", "Training", "Veterinary", "Daycare"],
  },
  images: {
    type: [String],
    validate: {
      validator: function (array) {
        return array.length > 0;
      },
      message: "At least one image is required",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Add text index for search functionality
hotelSchema.index({ name: "text", address: "text", services: "text" });

module.exports = mongoose.model("Hotel", hotelSchema);
