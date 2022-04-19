const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const Expense = require('./models/expenses');
//express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://user01:user1234@cluster0.0mzau.mongodb.net/PersonalExpenses?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{console.log("database connected")})
.catch((err)=> console.log(err));

var corsOptions = {
      origin: "http://localhost:3000",
      credentials:true,            //access-control-allow-credentials:true
      optionSuccessStatus:200
    };

    app.use(cors(corsOptions));

//     app.use(function (req, res, next) {
//       //Enabling CORS
//       res.header("Access-Control-Allow-Origin", "*");
//       res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
//         next();
//       });


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

app.use(expensesRouter.addExpense);
app.use(expensesRouter.getAllExpenses);
app.use(expensesRouter.getOneExpense);
app.use(expensesRouter.deleteOneExpense);
app.use(expensesRouter.getByDateRange);



// mongoose & mongo tests
// app.get('/add-expense', (req, res) => {
//       const expense = new Expense({
//             name: "pizza",
//             type: "expense",
//             date: new Date,
//             amount: 1000,
//             category: "food"
//       })
    
//       expense.save()
//         .then(result => {
//           res.send(result);
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     });


// app.listen(3000, function() {
//       console.log('listening on 3000')
//     })