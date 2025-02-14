const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./DB/Db");
const authRoutes = require("./routes/authRoutes");
const medicamentRoutes = require("./routes/medicamentController");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/api", medicamentRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
