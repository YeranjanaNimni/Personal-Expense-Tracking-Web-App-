var express = require('express');
var router = express.Router({ mergeParams: true });

const Expense = require('../models/expenses');

exports.addExpense = router.post('/add-expense', (req, res) => {
      let expense = new Expense(req.body)
      expense.save()
            .then(result => {
                  res.send(result);
            })
            .catch(err => {
                  console.log(err);
            });
});

exports.getAllExpenses = router.get('/getAllExpenses', (req, res) => {
      Expense.find({})
            .then(result => {
                  res.send(result);
            })
            .catch(err => {
                  console.log(err);
            });
});


exports.getOneExpense = router.get('/getOneExpense/:id', (req, res) => {
      Expense.findOne({ id: req.params._id })
            .then(result => {
                  res.send(result);
            })
            .catch(err => {
                  console.log(err);
            });
});

exports.updateOneExpense = router.put('/updateOneExpense/:id', (req, res) => {
      Expense.updateOne({ id: req.params._id }, { $set: req.body })
            .then(result => {
                  res.send(result);
            })
            .catch(err => {
                  console.log(err);
            });
});

exports.deleteOneExpense = router.delete('/deleteOneExpense/:id', (req, res) => {
      Expense.deleteOne({ id: req.params._id })
            .then(result => {
                  res.send(result);
            })
            .catch(err => {
                  console.log(err);
            });
});

exports.getByDateRange = router.post('/getByDateRange', (req, res) => {
      Expense.find({
            date: {
                  $gt: new Date(req.body.startDate),
                  $lt: new Date(req.body.endDate)
            }
      })
            .then(result => {
                  res.send(result);
            })
            .catch(err => {
                  console.log(err);
            });
});

// exports.getCategoryDetails = router.get('/category-data/:category', (req, res) => {
//       Expense.find({ category: req.params.category }, 'amount')
//             .then(result => {
//                   // res.send(result);
//                   result.aggregate([{ $group: { _id: null, sum_val: { $sum: "$amount" } } }])
//                   .then(res=> console.log(res))
//             })
//             .catch(err => {
//                   console.log(err);
//             });
// }),

// exports.calculations = router.get('/calculations', (req, res) => {

//       Expense.aggregate([{ $group: { _id: null, sum_val: { $sum: "$amount" } } }])
//             .then(res => {
//                   console.log(">>>", res);
//                   let total = res[0].sum_val;
//                   console.log(total)
//                   Expense.find({})
//                         .then(result => {
//                               for (const { amount, category } of result) {
//                                     let percentage = Math.round((amount / total) * 100);
//                                     console.log("@@", category);
//                                     Expense.find({ category: category }, 'amount, category')
//                                           .then(result => {
//                                                 console.log(result);
//                                           })
//                               }
//                         })
//                         .catch(err => {
//                               console.log(err);
//                         });
//             });
// })



