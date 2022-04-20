const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

//express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://user01:user1234@cluster0.0mzau.mongodb.net/PersonalExpenses?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{console.log("database connected")})
.catch((err)=> console.log(err));

// add cors
var corsOptions = {
      origin: "http://localhost:3000",
      credentials:true,            //access-control-allow-credentials:true
      optionSuccessStatus:200
    };

    app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//Routes
var expensesRouter = require('./routes/expenses');

//call functions
app.use(expensesRouter.addExpense);
app.use(expensesRouter.getAllExpenses);
app.use(expensesRouter.getOneExpense);
app.use(expensesRouter.deleteOneExpense);
app.use(expensesRouter.getByDateRange);
// app.use(expensesRouter.getCategoryDetails);
// app.use(expensesRouter.calculations)
