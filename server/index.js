const express = require("express");

const cors = require("cors");
const users = require("./sample.json");

const app = express();

const port = 8000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

// Routers

// Display All Users

app.get("/users", (req, res) => {
  return res.json(users);
});

app.listen(port, (err) => {
  console.log(`App is Running in Port ${port}`);
});
