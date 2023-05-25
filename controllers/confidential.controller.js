const Confidential = require("../models/confidential.model");

exports.createConfidential = async (req, res) => {
    try {
        const {
            EquityDeployed,
            Debt_Burden,
            Cost_of_Debt,
            Non_Interest_liabilities_Risk,
            Total_Deployed_Capital,
            Cash_And_Equivalents,
            Interest_Differential,
            Dya_Receivable_Outstanding,
            Receivable_Turnover_Ratio,
            Days_Payables_Outstanding,
            Pyable_Turnover_Ratio,
            Index_Base_Value,
            Index_Value_Scaled_To_100,
        } = req.body;
        const confidentialData = new Confidential({
            EquityDeployed,
            Debt_Burden,
            Cost_of_Debt,
            Non_Interest_liabilities_Risk,
            Total_Deployed_Capital,
            Cash_And_Equivalents,
            Interest_Differential,
            Dya_Receivable_Outstanding,
            Receivable_Turnover_Ratio,
            Days_Payables_Outstanding,
            Pyable_Turnover_Ratio,
            Index_Base_Value,
            Index_Value_Scaled_To_100,
        });

        const newConfidential = await confidentialData.save();
        res.status(201).json(newConfidential);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error creating confidentials", error: error });
    }
};


exports.getAllConfidential = async (req, res) => {
    try {
        const confidential = await Confidential.find();
        res.status(200).json(confidential);
    } catch (error) {
        res.status(500).json({ message: "Error fetching company confidentials", error });
    }
};

exports.getConfidentialById = async (req, res) => {
    try {
        const id = req.params.id;
        const confidential = await Confidential.findById(id);

        if (!confidential) {
            return res.status(404).send('Confidential not found');
        }

        res.send(confidential);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }

}


exports.updateConfidentialByCompanyId = async (req, res) => {
    try {
      const updatedConfidential = await Confidential.findOneAndUpdate(
        { companyId: req.params.companyId },
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedConfidential) {
        return res.status(404).json({ message: "Confidentials Data not found" });
      }
      res.status(200).json(updatedConfidential);
    } catch (error) {
      res.status(400).json({ message: "Error updating Confidentials Data", error });
    }
  };
  
  exports.deleteConfidentialByCompanyId = async (req, res) => {
    try {
      const deleteConfidential = await Confidential.findOneAndDelete({
        companyId: req.params.companyId,
      });
      if (!deleteConfidential) {
        return res.status(404).json({ message: "Confidentials Data not found" });
      }
      res.status(200).json({ message: "Confidentials data deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting Confidentials data", error });
    }
  };