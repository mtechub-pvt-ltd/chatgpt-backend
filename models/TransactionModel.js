const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    userName:String,
    paymentIntent_Secret: String,
    customer_Stripe_Id: String,
    ephemeralKey: String,
    amount:String,
    client_secret:String,
    user_email:String
}
);
module.exports = mongoose.model("transaction", transactionSchema);