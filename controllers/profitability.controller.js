const IncomeStatement = require("../models/incomeStatement.model");

exports.getAllProfitabilitiesSales = async (req, res) => {
  try {
    const incomeStatements = await IncomeStatement.find();
    console.log(incomeStatements);

    const profitabilities = incomeStatements.map((incomeStatement) => {
      console.log("inside profitabilities ", incomeStatement);
      if(incomeStatement.revenue[0].totalNet){
        revenue = incomeStatement.revenue[0].totalNet
      }
      else{
        revenue = 1;
      }
      // const revenue = incomeStatement.revenue[0].totalNet;
      const grossProfitMargin = incomeStatement.grossMargin / revenue;
      const operatingProfitMargin = incomeStatement.operatingIncome / revenue;
      const pretaxMargin = incomeStatement.earningsBeforeTax / revenue;
      const netProfitMargin = incomeStatement.netIncome / revenue;

      return {
        companyId: incomeStatement.companyId,
        year: incomeStatement.year,
        grossProfitMargin,
        operatingProfitMargin,
        pretaxMargin,
        netProfitMargin,
      };
    });

    res.status(200).json(profitabilities);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error creating income statement", error: error });
  }
};

// exports.getAllProfitabilitiesRoI = async (req, res) => {
//   try {
//     res.status(200).json(profitabilities);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Error creating income statement", error: error });
//   }
// };
