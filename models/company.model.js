const mongoose = require('mongoose');
const { Schema } = mongoose;


const companySchema = new Schema({
    companyName:{
        type: String,
        required: "Name is required",
        trim: true,
    },
    companyDetail: {
        type: String,
    },
    projectDetail:{
        type: String,
    },
    companySector:{
        type: String,
    },
    userId:{
        type: String,
        required: true 
    },
    companyDataCreationDate: {
        type: Date,
        default: Date.now() 
    },
},
{
    collection: "Company"
}
);

const Company = mongoose.model("Company", companySchema);

module.exports = Company
