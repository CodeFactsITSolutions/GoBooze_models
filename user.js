const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: false,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: true,
    },
    alternative_phone_number: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    age: {
      type: Number,
      required: false,
    },
    dob: {
      type: Date,
      required: false,
    },

    gender: {
      type: String,
      enum: ["male", "female", "others"],
      required: false,
    },

    address_list: {
      type: [ObjectId],
      ref: "Address",
      required: false,
    },
    area: {
      type: ObjectId,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    zip_code: {
      type: String,
      required: false,
    },
    is_active: {
      type: Boolean,
      default: false,
      required: false,
    },
    last_purchased_date: {
      type: Date,
      required: false,
    },
    high_purchase_value: {
      type: Number,
      required: false,
      default: 0,
    },
    lowest_purchase_value: {
      type: Number,
      required: false,
      default: 0,
    },
    average_purchase_value: {
      type: Number,
      required: false,
      default: 0,
    },
    active_zip_codes: {
      type: [Number],
      required: false,
    },

    favourite_list: {
      type: [ObjectId],
      ref: "Product",
      required: false,
    },
    orders_list: {
      type: [ObjectId],
      ref: "Order",
      required: false,
    },
    cart_item_list: {
      type: [ObjectId],
      ref: "CartItem",
      required: false,
    },
    average_delay_time: {
      type: String,
      required: false,
    },
    average_delivery_time: {
      type: String,
      required: false,
    },
    longest_delivery_time: {
      type: String,
      required: false,
    },
    shortest_delivery_time: {
      type: String,
      required: false,
    },
    pickup_delay_instance_count: {
      type: Number,
      required: false,
      default: 0,
    },
    pickup_delay_time: {
      type: String,
      required: false,
    },
    search_history_list: {
      type: [ObjectId],
      ref: "SearchHistory",
      required: false,
    },
    days_with_orders: {
      type: [Number],

      required: false,
    },
    date_with_orders: {
      type: [Date],

      required: false,
    },
    order_for_multi: {
      type: Boolean,
      default: false,
      required: false,
    },
    payment_mode_list: {
      type: [ObjectId],
      ref: "PaymentMethod",
      required: false,
    },
    average_ragting_given: {
      type: Number,
      required: false,
    },
    review_list: {
      type: [ObjectId],
      ref: "Review",
      required: false,
    },
    purchase_power: {
      type: Number,
      required: false,
    },
    insta_handle: {
      type: String,
      required: false,
    },
    user_type: {
      type: String,
      enum: ["employee", "business"],
      required: false,
    },
    mobile_device_type: {
      type: String,

      required: false,
    },
    number_of_app_logins: {
      type: Number,
      default: 0,
      required: false,
    },
    number_of_brwoser_logins: {
      type: Number,
      default: 0,
      required: false,
    },
    time_spend_on_browser: {
      type: String,
      required: false,
    },
    time_spend_on_app: {
      type: String,
      required: false,
    },
    id_proof_image: {
      type: String,
      required: false,
    },
    number_of_orders_for_others: {
      type: Number,
      required: false,
    },
    behaviour_index: {
      type: Number,
      required: false,
    },
    number_of_escalations: {
      type: Number,
      required: false,
    },
    ai_cart_list: {
      type: [ObjectId],
      ref: "AiCartItem",
      required: false,
    },
    active_coupon_list: {
      type: [ObjectId],
      ref: "Coupon",
      required: false,
    },
    list_of_item_purchased_repeatedly: {
      type: [ObjectId],
      ref: "Product",
      required: false,
    },
    percentage_of_items_purchased_on_offers: {
      type: Number,
      required: false,
    },
    percentage_of_alchol_content_per_order: {
      type: Number,
      required: false,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
      required: true,
    },

    sequence_no: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema, "users");