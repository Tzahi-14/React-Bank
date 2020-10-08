const express = require('express')
const router = express.Router()
// const expenseData = require("../../expenses")
// const moment = require('moment')
const Bank = require("./model/Bank")

router.get("/transactions", async function (req, res) {
    const data = await Bank.find({})
    res.send(data)
})


router.post("/transaction", async function (req, res) {
    const data = req.body
    const postTransaction = new Bank(data)
    await postTransaction.save()
    res.send(postTransaction)
})

router.delete("/transaction/:id", async function (req, res) {
    const deleteTransaction = req.params.id
    // let transactionToRemove = await Bank.find({_id:deleteTransaction},{new: true}).remove()
    let transactionToRemove = await Bank.findOneAndDelete({ _id: deleteTransaction })
    res.send(transactionToRemove)

})

module.exports = router
