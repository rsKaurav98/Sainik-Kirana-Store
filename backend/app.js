const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");


app.use(express.json());

//Route imports n
const product = require("./routes/productRoute");

//MIddleware for Errors
app.use(errorMiddleware);

app.use("/api/v1",product);




module.exports = app;