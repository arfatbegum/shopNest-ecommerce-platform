const express = require("express");
const dbConnect = require("./config/dbConeect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
dbConnect();

app.use("/", (req, res) => {
    res.send("Server side is running")
})

app.listen(PORT, () => {
    console.log(`Server is running  at PORT ${PORT}`);
  });