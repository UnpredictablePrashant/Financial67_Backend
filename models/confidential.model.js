const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const confidentialDataSchema = new Schema({
    companyId: {
        type: String,
    },
    TTC: {
        type: String,
    },
    equityDeployed: {
        type: Number
    },
    debtBurden: {
        type: Number
    },
    costOfDebt: {
        type: Number
    },
    nonInterestLiabilitiesRisk: {
        type: Number
    },
    cashAndEquivalents: {
        type: Number
    },
    interestDifferential: {
        type: Number
    },
    receivablesTurnoverRatio: {
        type: Number
    },
    payablesTurnoverRatio: {
        type: Number
    }
});

const ConfidentialData = mongoose.model('confidentialData', confidentialDataSchema);
module.exports = ConfidentialData;
