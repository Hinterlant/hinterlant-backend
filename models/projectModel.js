const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  totalSale: {
    type: String,
    required: true,
  },
  tokenAddress: {
    type: String,
  },
  allocations: {
    type: [String],
    required: true,
  },
  percentages: {
    type: [String],
    required: true,
  },
  vestingTimes: {
    type: [String],
    required: true,
  },
  saleStart: {
    // timestamp
    type: String,
    required: true,
  },
  saleEnd: {
    // timestamp
    type: String,
    required: true,
  },
});
