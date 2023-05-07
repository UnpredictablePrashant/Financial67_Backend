const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const incomeStatementSchema = new Schema({
  companyId: {
    type: String,
  },
  year: {
    type: Number,
  },
  revenue: [
    {
      product: {
        type: Number,
      },
      services: {
        type: Number,
      },
      totalNet: {
        type: Number,
      },
    },
  ],
  costOfGoodsSold: [
    {
      product: {
        type: Number,
      },
      services: {
        type: Number,
      },
      total: {
        type: Number,
      },
    },
  ],
  grossMargin: {
    type: Number,
  },
  operatingExpenses: [
    {
      researchAndDevelopment: {
        type: Number,
      },
      sellingGeneralAndAdministrative: {
        type: Number,
      },
      otherItems: [
        {
          type: Number,
        },
      ],
      total: {
        type: Number,
      },
    },
  ],
  operatingIncome: {
    type: Number,
  },
  nonOperatingExpenses: [
    {
      interestAndDividendIncome: {
        type: Number,
      },
      interestExpense: {
        type: Number,
      },
      otherIncomeOrExpenseNet: {
        type: Number,
      },
      netInterestIncomeOrExpense: {
        type: Number,
      },
      otherItems: [
        {
          type: Number,
        },
      ],
      total: {
        type: Number,
      },
    },
  ],
  earningsBeforeTax: {
    type: Number,
  },
  provisionForTax: {
    type: Number,
  },
  netIncome: {
    type: Number,
  },
});

const IncomeStatement = mongoose.model("incomeStatement", incomeStatementSchema);
module.exports = IncomeStatement;
