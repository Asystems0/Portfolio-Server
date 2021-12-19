const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT || 3000;

//Middleware
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/contact", require("./routes/contact"));
app.use("/post", require("./routes/post"));

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
    await connectDB();
  } catch (err) {
    console.log(err);
  }
};

start();
