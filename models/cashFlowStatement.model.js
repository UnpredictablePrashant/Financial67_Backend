const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cashFlowStatementSchema = new Schema({
    companyId: {
        type: Schema.Types.ObjectId,
        ref: "Company",
        required: true,
    },
    cashFlowSheets: [
        {
            year: {
                type: Number,
            },
            cash_equivalent_and_restricted_cash_at_the_beginning_of_year: {
                type: Number,
            },
            cash_equivalent_and_restricted_cash_at_the_end_of_year:{
                type:Number,
            },
            totalCashFlow:{
                type:Number
            },
            total_operating_activities:{
                type:Number
            },
            total_adjustment_for_non_cash_items:{
                type:Number

            },
            total_investing_activities:{
                type :Number
            },
            total_financing_activities:{
                type:Number
            },
            operating_activities: {
                net_income: {
                    type: Number,
                },
            },
            adjustment_for_non_cash_items: {
                depreciation_and_amortization: {
                    type: Number,
                },
                share_based_compensation_expense: {
                    type: Number,
                },
                other_item_1: {
                    type: Number,
                },
                other_item_2: {
                    type: Number,
                },
                Net_Adjustments_for_Working_Capital_Changes:{
                    type:Number
                }
            },


            investing_activities: {
                net_sale_purchase_of_marketable_securities: {
                    type: Number,
                },
                capital_expenditure_purchase_of_ppe: {
                    type: Number,
                },
                business_acquisitions_net: {
                    type: Number,
                },
                other_item_1: {
                    type: Number,
                },
                other_item_2: {
                    type: Number,
                },

            },

            financing_activities: {
                dividends_and_equivalents: {
                    type: Number,
                },
                net_repurchase_of_common_stock: {
                    type: Number,
                },
                net_issuance_repayments_of_debt_and_commercial_paper: {
                    type: Number,
                },
                other_item_1: {
                    type: Number,
                },
                payments_for_taxes_related_to_net_share_settlement_of_equity_awards: {
                    type: Number,
                },

            },

        }
    ]
});

const CashFlowStatement = mongoose.model("CashFlowStatement", cashFlowStatementSchema);

module.exports = CashFlowStatement;