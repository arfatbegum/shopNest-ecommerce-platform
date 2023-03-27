const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./config/dbConeect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const authRouter = require("./routes/authRoute");

dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/user", authRouter);

app.listen(PORT, () => {
    console.log(`Server is running  at PORT ${PORT}`);
  });