const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profitabilitySalesSchema = new Schema({
  companyId: {
    type: String,
    unique: true,
  },
  year: {
    type: Number,
  },
  ratios: [
    {
      gross_Profit_Margin: {
        type: Number,
      },
      operating_Profit_Margin: {
        type: Number,
      },
      pretax_Margin: {
        type: Number,
      },
      net_Profit_Margin: {
        type: Number,
      },
    },
  ],

  calculation: [
    {
      gross_Profit_Revenue: {
        type: Number,
      },
      operating_Profit_Revenue: {
        type: Number,
      },
      ebt_Revenue: {
        type: Number,
      },
      net_Income_Revenue: {
        type: Number,
      },
    },
  ],
  functions: [
    {
      costOfGoodsSold: {
        type: Number,
      },
      grossMargin: {
        type: Number,
      },
      operatingIncome: {
        type: Number,
      },
      netIncome: {
        type: Number,
      },
    },
  ],  
});

const Profitability = mongoose.model("Profitability", profitabilitySalesSchema);
module.exports = Profitability;
