const IncomeStatement = require("../models/incomeStatement.model");

exports.createIncomeStatement = async (req, res) => {
  try {

    const incomeSheets = req.body.incomeSheets;
    const companyId = req.body.companyId;
    
    // processing the income sheet first
    const processedIncomesheets = incomeSheets.map(Incomesheet => {
      const {
        revenue,
        costOfGoodsSold,
        grossMargin,
        operatingExpenses,
        operatingIncome,
        nonOperatingExpenses,
        earningsBeforeTax,
        provisionForTax,
        netIncome,
      } = Incomesheet;

      const totalRevenue = Object.values(revenue).reduce(
        (sum, value) => sum + parseFloat(value),
        0
      );
      const totalcostOfGoodsSold = Object.values(costOfGoodsSold).reduce(
        (sum, value) => sum + parseFloat(value),
        0
      );
      const totaloperatingExpenses = Object.values(operatingExpenses).reduce(
        (sum, value) => sum + parseFloat(value),
        0
      );
      const totalnonOperatingExpenses = Object.values(nonOperatingExpenses).reduce(
        (sum, value) => sum + parseFloat(value),
        0
      );

      return {
        ...Incomesheet,
        totalRevenue,
        totalcostOfGoodsSold,
        totaloperatingExpenses,
        totalnonOperatingExpenses
      }
    })




    //checking for the existing incomestatement with given companyid
    const existingincomeStatement = await IncomeStatement.findOne({ companyId });
    if (existingincomeStatement) {
      // If the income sheet already exists, update it with the new income sheets
      existingincomeStatement.incomeSheets.push(...processedIncomesheets);
      await existingincomeStatement.save();

      res.status(200).json({
        message: "Balance sheets updated successfully",
        balanceSheets: existingincomeStatement,
      });
    } else {
      // Calculate totals and perform other calculations for each balance sheet
      // const processedIncomesheets = incomeSheets.map(Incomesheet => {
      //   const {
      //     revenue,
      //     costOfGoodsSold,
      //     grossMargin,
      //     operatingExpenses,
      //     operatingIncome,
      //     nonOperatingExpenses,
      //     earningsBeforeTax,
      //     provisionForTax,
      //     netIncome,
      //   } = Incomesheet;

      //   const totalRevenue = Object.values(revenue).reduce(
      //     (sum, value) => sum + parseFloat(value),
      //     0
      //   );
      //   const totalcostOfGoodsSold = Object.values(costOfGoodsSold).reduce(
      //     (sum, value) => sum + parseFloat(value),
      //     0
      //   );
      //   const totaloperatingExpenses = Object.values(operatingExpenses).reduce(
      //     (sum, value) => sum + parseFloat(value),
      //     0
      //   );
      //   const totalnonOperatingExpenses = Object.values(nonOperatingExpenses).reduce(
      //     (sum, value) => sum + parseFloat(value),
      //     0
      //   );

      //   return {
      //     ...Incomesheet,
      //     totalRevenue,
      //     totalcostOfGoodsSold,
      //     totaloperatingExpenses,
      //     totalnonOperatingExpenses
      //   }
      // })
      const createdIncomeSheets = await IncomeStatement.create({
        companyId,
        incomeSheets: processedIncomesheets,
      });

      res.status(201).json({
        message: "Income sheets created successfully",
        incomeSheets: createdIncomeSheets,
      });
    }


    // const incomeStatementData = new IncomeStatement({
    //   companyId,
    //   year,
    //   revenue,
    //   costOfGoodsSold,
    //   grossMargin,
    //   operatingExpenses,
    //   operatingIncome,
    //   nonOperatingExpenses,
    //   earningsBeforeTax,
    //   provisionForTax,
    //   netIncome,
    // });


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
    const { id } = req.params;
    const incomeStatement = await IncomeStatement.findOne({ companyId:id });
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
      { companyId: companyId }, updates, { new: true }
    );

    if (!incomeStatement) {
      return res.status(404).json({ message: "Income statement not found" });
    }

    res.status(200).json({ message: "Income statement updated successfully", incomeStatement });
  } catch (error) {
    res.status(500).json({ message: "Error updating income statement", error });
  }
};

