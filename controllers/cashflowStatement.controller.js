const CashflowStatement = require("../models/cashFlowStatement.model");

exports.createCashflowStatement = async (req, res) => {
  try {
    const cashFlowSheets = req.body.cashFlowSheets;
    const companyId = req.body.companyId;
   
    const processedcashFlowsheets = cashFlowSheets.map(cashFlowsheet => {
      console.log("cashflowsheet from FE ",cashFlowsheet);
      const {
        cash_equivalent_and_restricted_cash_at_the_beginning_of_year,
        cash_equivalent_and_restricted_cash_at_the_end_of_year,
        operating_activities,
        adjustment_for_non_cash_items,
        investing_activities,
        financing_activities,
        totalCashFlow
      } = cashFlowsheet;

      const total_cash_equivalent_and_restricted_cash_at_the_beginning_of_year =
        Object.values(
          cash_equivalent_and_restricted_cash_at_the_beginning_of_year
        ).reduce((sum, value) => sum + parseFloat(value), 0);

   
      const total_operating_activities_netIncome = Object.values(
        operating_activities
      ).reduce((sum, value) => sum + parseFloat(value), 0);
    
      const total_adjustment_for_non_cash_items = Object.values(
        adjustment_for_non_cash_items
      ).reduce((sum, value) => sum + parseFloat(value), 0);

      const total_operating_activities = total_adjustment_for_non_cash_items + total_operating_activities_netIncome

      const total_investing_activities = Object.values(
        investing_activities
      ).reduce((sum, value) => sum + parseFloat(value), 0);

      const total_financing_activities = Object.values(
        financing_activities
      ).reduce((sum, value) => sum + parseFloat(value), 0);


      return {
        ...cashFlowsheet,
       
       
        total_operating_activities,
        total_adjustment_for_non_cash_items,
        total_investing_activities,
        total_financing_activities

      }
    })




    //checking for the existing incomestatement with given companyid
    const existingcashFlowStatement = await CashflowStatement.findOne({ companyId });
    if (existingcashFlowStatement) {
      // If the income sheet already exists, update it with the new income sheets
      existingcashFlowStatement.cashFlowSheets.push(...processedcashFlowsheets);
      // existingcashFlowStatement.cashFlowSheets = existingcashFlowStatement.cashFlowSheets.concat(cashFlowSheets);

      await existingcashFlowStatement.save();

      res.status(200).json({
        message: "CashFlow sheets updated successfully",
        cashFlowSheets: existingcashFlowStatement,
      });
    } else {
      // Calculate totals and perform other calculations for each balance sheet
      // const processedcashFlowsheets = cashFlowSheets.map(cashFlowsheet => {
      //   console.log("cashflowsheet from FE ",cashFlowsheet);
      //   const {
      //     cash_equivalent_and_restricted_cash_at_the_beginning_of_year,
      //     operating_activities,
      //     adjustment_for_non_cash_items,
      //     investing_activities,
      //     financing_activities,
      //   } = cashFlowsheet;

      //   const total_cash_equivalent_and_restricted_cash_at_the_beginning_of_year =
      //     Object.values(
      //       cash_equivalent_and_restricted_cash_at_the_beginning_of_year
      //     ).reduce((sum, value) => sum + parseFloat(value), 0);

     
      //   const total_operating_activities_netIncome = Object.values(
      //     operating_activities
      //   ).reduce((sum, value) => sum + parseFloat(value), 0);
      
      //   const total_adjustment_for_non_cash_items = Object.values(
      //     adjustment_for_non_cash_items
      //   ).reduce((sum, value) => sum + parseFloat(value), 0);

      //   const total_operating_activities = total_adjustment_for_non_cash_items + total_operating_activities_netIncome

      //   const total_investing_activities = Object.values(
      //     investing_activities
      //   ).reduce((sum, value) => sum + parseFloat(value), 0);

      //   const total_financing_activities = Object.values(
      //     financing_activities
      //   ).reduce((sum, value) => sum + parseFloat(value), 0);


      //   return {
      //     ...cashFlowsheet,
         
         
      //     total_operating_activities,
      //     total_adjustment_for_non_cash_items,
      //     total_investing_activities,
      //     total_financing_activities

      //   }
      // })
      const createdCashFlowSheets = await CashflowStatement.create({
        companyId,
        cashFlowSheets: processedcashFlowsheets,
      });

      res.status(201).json({
        message: "CashFlow sheets created successfully",
        cashFlowSheets: createdCashFlowSheets,
      });
    }

  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Error creating Cash Flow Statement", error: error });
  }
};

exports.getCashFlowStatementById = async (req, res) => {
  console.log("companyId:",req.params.id);
  try {
    const CashFlowStatementById = await CashflowStatement.findOne({

      companyId:req.params.id
    }
    );
    res.status(200).json(CashFlowStatementById);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching Cash Flow Statement of the Id", error });
  }
};

exports.getAllCashFlowStatements = async (req, res) => {
  try {
    const CashFlowStatement = await CashflowStatement.find();
    res.status(200).json(CashFlowStatement);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching Cash Flow Statement", error });
  }
};

exports.updateCashflowStatementByCompanyId = async (req, res) => {
  try {
    const updatedCashflowStatement = await CashflowStatement.findOneAndUpdate(
      { companyId: req.params.companyId },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedCashflowStatement) {
      return res.status(404).json({ message: "Cashflow data not found" });
    }
    res.status(200).json(updatedCashflowStatement);
  } catch (error) {
    res.status(400).json({ message: "Error updating Cashflow data", error });
  }
};

exports.deleteCashflowStatementByCompanyId = async (req, res) => {
  try {
    const deleteCashflowStatement = await CashflowStatement.findOneAndDelete({
      companyId: req.params.companyId,
    });
    if (!deleteCashflowStatement) {
      return res.status(404).json({ message: "Cashflow data not found" });
    }
    res.status(200).json({ message: "Cashflow data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting Cashflow data", error });
  }
};
