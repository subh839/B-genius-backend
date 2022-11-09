import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
  userName: String,
  passWord: String,
  phoneNo:Number,
  Address:String,
  latitude: Number,
  longitude: Number,
});

const CustomerDetails = mongoose.model("Customerdetails", customerSchema);

export default CustomerDetails;
