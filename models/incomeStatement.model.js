const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const incomeStatementSchema = new Schema({
  companyId: {
    type: String,
    unique:true,
    require:true
  },
  year: {
    type: Number,
    require:true
  },
  revenue: [
    {
      product: {
        type: Number,
        require:true
      },
      services: {
        type: Number,
        require:true
      },
      totalNet: {
        type: Number,
        require:true
      },
    },
  ],
  costOfGoodsSold: [
    {
      product: {
        type: Number,
        require:true
      },
      services: {
        type: Number,
        require:true
      },
      total: {
        type: Number,
        require:true
      },
    },
  ],
  grossMargin: {
    type: Number,
    require:true
  },
  operatingExpenses: [
    {
      researchAndDevelopment: {
        type: Number,
        require:true
      },
      sellingGeneralAndAdministrative: {
        type: Number,
        require:true
      },
      otherItems: [
        {
          type: Number,
          require:true
        },
      ],
      total: {
        type: Number,
        require:true
      },
    },
  ],
  operatingIncome: {
    type: Number,
    require:true
  },
  nonOperatingExpenses: [
    {
      interestAndDividendIncome: {
        type: Number,
        require:true
      },
      interestExpense: {
        type: Number,
        require:true
      },
      otherIncomeOrExpenseNet: {
        type: Number,
        require:true
      },
      netInterestIncomeOrExpense: {
        type: Number,
        require:true
      },
      otherItems: [
        {
          type: Number,
          require:true
        },
      ],
      total: {
        type: Number,
        require:true
      },
    },
  ],
  earningsBeforeTax: {
    type: Number,
    require:true
  },
  provisionForTax: {
    type: Number,
    require:true
  },
  netIncome: {
    type: Number,
    require:true
  },
});

const IncomeStatement = mongoose.model("incomeStatement", incomeStatementSchema);
module.exports = IncomeStatement;
