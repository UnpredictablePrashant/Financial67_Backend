const BalanceSheet = require("../models/balancesheet.model");

exports.createBalanceSheet = async (req, res) => {
  try {
    const {
      companyId,
      year,
      current_assets,
      non_current_assets,
      current_liabilities,
      non_current_liabilities,
      share_holders_equity,
    } = req.body;

    const total_current_assets = Object.values(current_assets).reduce(
      (sum, value) => sum + parseFloat(value),
      0
    );

    const total_non_current_assets = Object.values(non_current_assets).reduce(
      (sum, value) => sum + parseFloat(value),
      0
    );
    const total_assets = total_current_assets + total_non_current_assets;

    const total_current_liabilities = Object.values(current_liabilities).reduce(
      (sum, value) => sum + parseFloat(value),
      0
    );
    const total_non_current_liabilities = Object.values(
      non_current_liabilities
    ).reduce((sum, value) => sum + parseFloat(value), 0);
    const total_liabilities =
      total_current_liabilities + total_non_current_liabilities;

    const total_shareholders_equity = Object.values(
      share_holders_equity
    ).reduce((sum, value) => sum + parseFloat(value), 0);
    const total_liabilities_and_shareholders_equity =
      total_liabilities + total_shareholders_equity;

    const working_capital_assets =
      current_assets.cash_and_cash_equivalents +
      current_assets.accounts_receivablenet;
    const working_capital_liabilities = current_liabilities.Accounts_Payable;
    const net_working_capital =
      working_capital_assets - working_capital_liabilities;

    const balanceSheetData = new BalanceSheet({
      companyId,
      year,
      current_assets,
      non_current_assets,
      current_liabilities,
      non_current_liabilities,
      share_holders_equity,
      total_current_assets,
      total_non_current_assets,
      total_assets,
      total_current_liabilities,
      total_non_current_liabilities,
      total_liabilities,
      total_shareholders_equity,
      total_liabilities_and_shareholders_equity,
      working_capital_assets,
      net_working_capital,
      working_capital_assets,
      working_capital_liabilities,
      net_working_capital,
    });

    const newBalanceSheet = await balanceSheetData.save();
    res.status(201).json(newBalanceSheet);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Error creating balance sheet", error: error });
  }
};
exports.getAllBalanceSheets = async (req, res) => {
  try {
    const balanceSheets = await BalanceSheet.find();
    res.status(200).json(balanceSheets);
  } catch (error) {
    res.status(500).json({ message: "Error fetching balance sheets", error });
  }
};
exports.getBalanceSheetByCompanyId = async (req, res) => {
  try {
    const balanceSheet = await BalanceSheet.findOne({ companyId: req.params.companyId });
    if (!balanceSheet) {
      return res.status(404).json({ message: "Balance sheet not found" });
    }
    res.status(200).json(balanceSheet);
  } catch (error) {
    res.status(500).json({ message: "Error fetching balance sheet", error });
  }
};

exports.updateBalanceSheetByCompanyId = async (req, res) => {
  try {
    const updatedBalanceSheet = await BalanceSheet.findOneAndUpdate(
      { companyId: req.params.companyId },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedBalanceSheet) {
      return res.status(404).json({ message: "Balance sheet not found" });
    }
    res.status(200).json(updatedBalanceSheet);
  } catch (error) {
    res.status(400).json({ message: "Error updating balance sheet", error });
  }
};

exports.deleteBalanceSheetByCompanyId = async (req, res) => {
  try {
    const balanceSheet = await BalanceSheet.findOneAndDelete({ companyId: req.params.companyId });
    if (!balanceSheet) {
      return res.status(404).json({ message: "Balance sheet not found" });
    }
    res.status(200).json({ message: "Balance sheet deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting balance sheet", error });
  }
};


// ! Get all balance sheets (GET):

// ! URL: http://localhost:3000/api/balancesheet/
// ! Method: GET
 
// ! Get a balance sheet by ID (GET):
 
// ! URL: http://localhost:3000/api/balancesheet/:id
// ! Method: GET
// ! Replace :id with the actual ID of the balance sheet you want to fetch.
 
// ! Update a balance sheet (PUT):
 
// ! URL: http://localhost:3000/api/balancesheet/:id
// ! Method: PUT