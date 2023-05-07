const BalanceSheet = require("../models/balancesheet.model");
const CashflowStatement = require("../models/cashFlowStatement.model");

exports.createCashflowStatement = async (req, res) => {
    try {
        const {
            companyId,
            year,
            cash_equivalent_and_restricted_cash_at_the_beginning_of_year,
            operating_activities,
            adjustment_for_non_cash_items,
            investing_activities,
            financing_activities,
        } = req.body;

        const total_cash_equivalent_and_restricted_cash_at_the_beginning_of_year = Object.values(cash_equivalent_and_restricted_cash_at_the_beginning_of_year).reduce((sum, value) => sum + parseFloat(value), 0);

        const total_operating_activities = Object.values(operating_activities).reduce((sum, value) => sum + parseFloat(value), 0);

        const total_adjustment_for_non_cash_items = Object.values(adjustment_for_non_cash_items).reduce((sum, value) => sum + parseFloat(value), 0);

        const total_investing_activities = Object.values(investing_activities).reduce((sum, value) => sum + parseFloat(value), 0);

        const total_financing_activities = Object.values(financing_activities).reduce((sum, value) => sum + parseFloat(value), 0);


        const CashFlowStatementData = new CashflowStatement({
            companyId,
            year,
            cash_equivalent_and_restricted_cash_at_the_beginning_of_year,
            operating_activities,
            adjustment_for_non_cash_items,
            investing_activities,
            financing_activities,
        });

        const newCashFlowStatement = await CashFlowStatementData.save();
        res.status(201).json(newCashFlowStatement);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error creating Cash Flow Statement", error: error});
    }
    };
    exports.getAllCashFlowStatements = async (req, res) => {
        try {
            const CashFlowStatement = await CashflowStatement.find();
            res.status(200).json(CashFlowStatement);
        } catch (error) {
            res.status(500).json({message: "Error fetching Cash Flow Statement", error });
        }
    };
   