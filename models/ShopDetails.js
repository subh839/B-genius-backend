import mongoose from "mongoose";

const shopSchema = mongoose.Schema({
  ownerName: String,
  phoneNo: Number,
  email: String,
  userName: String,
  passWord: String,
  latitude: Number,
  longitude: Number,
  city: String,
  shopName: String,
  address: String,
  description: String,
  shopType: String,
});

const ShopSchema = mongoose.model("ShopSchema", shopSchema);

export default ShopSchema;