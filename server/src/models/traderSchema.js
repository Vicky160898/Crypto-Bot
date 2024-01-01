const { Schema, model } = require("mongoose");

const TraderSchema = new Schema(
  {
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TraderModel = model("Trader", TraderSchema);
module.exports = TraderModel;
