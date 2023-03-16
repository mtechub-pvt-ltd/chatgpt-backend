const router = require("express").Router();
const controller= require("../../Services/transactionHistoryServices")

router.get("/get-all" ,controller.getAllTransactions)
router.get("/get/:TransactionId" , controller.getSpecificTransaction)
router.delete("/delete/:TransactionId" , controller.deleteTransaction);
router.post("/create" , controller.createTransaction);
router.put("/update" , controller.updateTransaction);
router.delete("/deleteAll" , controller.deleteTransactionAll);

module.exports = router;