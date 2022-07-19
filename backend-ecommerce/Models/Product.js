const mongoose = require('mongoose');
// const { ObjectId } = mongoose.Schema;

const ProductSchema = new mongoose.Schema(
	{
		productImage: {
			type: 'String',
			required: true,
		},
		productName: {
			type: 'String',
			required: true,
			trim: true,
			maxlength: 60,
		},
		productDesc: {
			type: 'String',
			trim: true,
		},
		productPrice: {
			type: Number,
			required: true,
		},
		productCategory: {
			type: String,
			required: true,
		},
		productQty: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

ProductSchema.index({ productName: 'text' });
const Product = mongoose.model('Product', ProductSchema);
// const insertUser =()=>{
//     const newUser = new Product();
//         newUser.productImage = "picture.jpg";
//         newUser.productName = "Cocacola";
//         newUser.productDesc="Drink",
//         newUser.productPrice=200,
//         newUser.productCategory='drink',
//         newUser.productQty=20
//         newUser.save();
// }
// insertUser();
module.exports = Product;
