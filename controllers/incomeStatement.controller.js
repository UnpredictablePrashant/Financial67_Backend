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
//for get by id

exports.getIncomeStatementByCompanyId = async (req, res) => {
    try {
      const { companyId } = req.params;
      const incomeStatement = await IncomeStatement.findOne({ companyId });
      if (!incomeStatement) {
        return res.status(404).json({ message: "Income statement not found" });
      }
      res.status(200).json(incomeStatement);
    } catch (error) {
      res.status(500).json({ message: "Error fetching income statement", error });
    }
  };
  
  //for delete by id

  exports.deleteIncomeStatementByCompanyId = async (req, res) => {
    try {
      const companyId = req.params.companyId;
      const incomeStatement = await IncomeStatement.findOneAndDelete({ companyId });
      if (!incomeStatement) {
        return res.status(404).json({ message: "income statement not found" });
      }
      res.status(200).json({ message: "income statement deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deletinng income statement", error });
    }
  };

  //for update based on company id


  exports.updateIncomeStatementByCompanyId = async (req, res) => {
    try {
      const companyId = req.params.companyId;
      const updates = req.body;
      const options = { new: true };
  
      const incomeStatement = await IncomeStatement.findOneAndUpdate(
        { companyId },
        updates,
        options
      );
  
      if (!incomeStatement) {
        return res.status(404).json({ message: "Income statement not found" });
      }
  
      res.status(200).json({ message: "Income statement updated successfully", incomeStatement });
    } catch (error) {
      res.status(500).json({ message: "Error updating income statement", error });
    }
  };
  
  