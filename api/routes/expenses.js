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

