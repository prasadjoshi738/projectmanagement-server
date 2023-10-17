import mongoose, { Schema, model } from "mongoose";

const oaSchema = new mongoose.Schema({
  customername: {
    type: String,
    required: true,
  },
  projno: { type: Number, required: true },

  quantity: {
    type: Number,
  },

  oano: {
    type: String,
    required: true,
    unique: true,
  },

  product: {
    type: String,
  },

  deliverydate: {
    type: String,
  },
  value: {
    type: Number,
  },
  importjono: { type: Number },

  localjo: { type: Number },
  hardwarejo: { type: Number },
  otherpartjo: { type: Number },
  paintjo: { type: Number },
  packingjo: { type: Number },
  createddate: { type: Number },
  serialNo: [{Serialno:Number,ProjDesc:String,ProjCompDate:String
  }]
});

const OrderData = mongoose.model("oaentry", oaSchema);

export default OrderData;
