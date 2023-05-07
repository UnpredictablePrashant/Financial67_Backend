const IncomeStatement = require("../models/incomeStatement.model");

exports.createIncomeStatement = async (req, res) => {
  try {
    const {
      companyId,
      year,
      revenue,
      costOfGoodsSold,
      grossMargin,
      operatingExpenses,
      operatingIncome,
      nonOperatingExpenses,
      earningsBeforeTax,
      provisionForTax,
      netIncome,
    } = req.body;

    const incomeStatementData = new IncomeStatement({
      companyId,
      year,
      revenue,
      costOfGoodsSold,
      grossMargin,
      operatingExpenses,
      operatingIncome,
      nonOperatingExpenses,
      earningsBeforeTax,
      provisionForTax,
      netIncome,
    });

    const newIncomeStatement = await incomeStatementData.save();
    res.status(201).json(newIncomeStatement);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error creating income statement", error: error });
  }
};

exports.getAllIncomeStatements = async (req, res) => {
  try {
    const incomeStatements = await IncomeStatement.find();
    res.status(200).json(incomeStatements);
  } catch (error) {
    res.status(500).json({ message: "Error fetching income statements", error });
  }
};
