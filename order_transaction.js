const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const OrderTransactionSchema = new mongoose.Schema(
  {
    order_id: {
      type: ObjectId,
      ref: "Order",
      required: true,
    },
    customer: {
        type: ObjectId,
        ref: "Customer",
        required: false
    },
    store: {
        type: ObjectId,
        ref: "Store",
        required: true
    },
    address: {
        type: ObjectId,
        ref: "Address",
        required: true
    },
    clientSecret: {
        type: String,
        required: false
    },
    transaction_id: {
      type: String,
      required: false,
    },
    transaction_data:{

    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "OrderTransaction",
  OrderTransactionSchema,
  "order_transactions"
);
