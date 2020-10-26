const express = require('express')
const router = express.Router()
const Bank = require("../model/Bank")

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
    const transactionToRemove = await Bank.findOneAndDelete({ _id: deleteTransaction })
    res.send(transactionToRemove)

})

module.exports = router
