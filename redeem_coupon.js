const mongoose = require("mongoose");

const redeemCouponSchema = new mongoose.Schema(
  {
    couponId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Coupon",
    },
    redeemBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    isUsed: {
      type: Boolean,
      default: false,
    },
    isUsedOn: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "RedeemCoupon",
  redeemCouponSchema,
  "redeem_coupons"
);
