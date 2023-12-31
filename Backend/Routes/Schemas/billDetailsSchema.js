const mongoose=require("mongoose")
const billDetails=new mongoose.Schema({
	HouseRent:{
		type:Number,
		default:0
	},
	WaterBill:{
		type:Number,
		default:0
	},
	ElectricityBill:{
		type:Number,
		default:0
	},
	HouseKeeping:{
		type:Number,
		default:0
	},
	ParkingFee:{
		type:Number,
		default:0
	},
	StorageFee:{
		type:Number,
		default:0
	},
	Laundry:{
		type:Number,
		default:0
	},
	userId:{
		type:String,
		required:true
	}
})
module.exports=mongoose.model("billDetails",billDetails)