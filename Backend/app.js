const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.routes");

try {
  connectToDb();
} catch (error) {
  console.error("Error connecting to database:", error);
  process.exit(1);
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello stack");
});

app.use("/users", userRoutes);

module.exports = app;
