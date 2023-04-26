const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const dbConnect = require("./config/dbConeect");
const app = express();
const PORT = process.env.PORT || 5000;
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const blogRouter = require("./routes/blogRoute");
const productCategoryRouter = require("./routes/productCategoryRoute");
const blogCategoryRouter = require("./routes/blogCategoryRoute");
const colorRouter = require("./routes/colorRoute");
const couponRouter = require("./routes/couponRoute");
const enquiryRouter = require("./routes/enquiryRoute");
const { notFound, errorHandler } = require("./middlewares/errorhandler");

dbConnect();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/product-category", productCategoryRouter);
app.use("/api/blog-category", blogCategoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/color", colorRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/enquiry", enquiryRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});