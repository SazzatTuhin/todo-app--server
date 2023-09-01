require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todo.route");

// express app
const app = express();
// middelwears
app.use(express.json());
app.use(
  cors({
    credentials: true,
  })
);

// test api
app.get("/", (req, res) => {
  return res.status(200).json({ message: "welcome to todo app." });
});

// bypassed api
app.use("/api/todos", todoRoutes);

// poet
const port = process.env.PORT || 4000;

// uri
const uri = process.env.MONGO_URI;

// database connection
mongoose.connect(uri).then(() => {
  // listen
  app
    .listen(port, () => {
      console.log(`server runing on port: ${port}`);
    })
    
})
.catch((error) => {
  console.log(error);
});
