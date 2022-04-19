const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const expensesModal = new Schema({
    name: {type: String},
    date: {type: Date },
    amount: {type: Number},
    category: {type: String}
   
})

module.exports = mongoose.model('ExpensesModel', expensesModal, 'expensesModel');