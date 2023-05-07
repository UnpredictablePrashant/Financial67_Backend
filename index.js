require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/user.routes');
const checkRoutes = require("./routes/check.routes");
const dbconnect = require("./conn/db.conn");
const balanceSheetRoutes = require('./routes/balanceSheetRoutes');
const incomeStatementRoutes = require('./routes/incomeStatementRoutes');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', userRoutes);
app.use('/hello', checkRoutes);
app.use('/balancesheet', balanceSheetRoutes);
app.use('/incomestatement', incomeStatementRoutes);

app.listen(process.env.PORT || 3001, () => {
  dbconnect();
  console.log(`listening on http://localhost:${process.env.PORT}`);
});