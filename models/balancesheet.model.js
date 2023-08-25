const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const balanceSheetSchema = new Schema({
  companyId: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  balanceSheets: [
    {
      year: {
        type: Number,
      },
      current_assets: 
        {
          cash_and_cash_equivalents: {
            type: Number,
          },
          marketable_securities: {
            type: Number,
          },
          accounts_receivablenet: {
            type: Number,
          },
          inventories: {
            type: Number,
          },
          vendor_non_trade_receivables: {
            type: Number,
          },
          other_current_assets: {
            type: Number,
          },
          deferred_taxes_sets: {
            type: Number,
          },
          other_items_2: {
            type: Number,
          },
        },
      

      non_current_assets:
      {
        marketable_securities: {
          type: Number,
        },
        Property_Plant_Equipment_Net: {
          type: Number,
        },
        Other_Non_Current_Assets: {
          type: Number,
        },
        Goodwill: {
          type: Number,
        },
        Acquired_Intangible_Assets: {
          type: Number,
        },
      },

      current_liabilities:
      {
        Accounts_Payable: {
          type: Number,
        },
        Other_Current_Liabilities: {
          type: Number,
        },
        Deferred_Revenue: {
          type: Number,
        },
        Commercial_Paper: {
          type: Number,
        },
        Term_Debt: {
          type: Number,
        },
        Accrued_Expenses: {
          type: Number,
        },
        Other_Item_2: {
          type: Number,
        },
      },

      non_current_liabilities:
      {
        Term_Debt: {
          type: Number,
        },
        Other_Non_Current_Liabilities: {
          type: Number,
        },
        Deferred_Revenue: {
          type: Number,
        },
        Other_Item_2: {
          type: Number,
        },
      },

      share_holders_equity:
      {
        common_stock_and_additional_paid_in_capital: {
          type: Number,
        },
        retained_earnings_accumulated_deficit: {
          type: Number,
        },
        accumulated_other_comprehensive_income_Loss: {
          type: Number,
        },
        Other_Item_1: {
          type: Number,
        },
        Other_Item_2: {
          type: Number,
        },
      },

      total_current_assets: {
        type: Number,
      },
      total_non_current_assets: {
        type: Number,
      },
      total_assets: {
        type: Number,
      },
      total_current_liabilities: {
        type: Number,
      },
      total_non_current_liabilities: {
        type: Number,
      },
      total_liabilities: {
        type: Number,
      },
      total_shareholders_equity: {
        type: Number,
      },
      total_liabilities_and_shareholders_equity: {
        type: Number,
      },
      working_capital_assets: {
        type: Number,
      },
      net_working_capital: {
        type: Number,
      },
      working_capital_liabilities: {
        type: Number,
      },
    }
  ]
});

const BalanceSheet = mongoose.model("balanceSheet", balanceSheetSchema);
module.exports = BalanceSheet;
