const Product = require('../Models/Product');
const fs = require('fs');

exports.create = async (req, res) => {
    console.log("Product Data: ",req.body);
    console.log("Product FileName: ",req.file);
    console.log("File Data: ",req.file.filename);
    
	 const { image } = req.file.filename;
	const {
		productName,
		productDesc,
		productPrice,
		productCategory,
		productQty,
	} = req.body;
    console.log("Inserting file name: ", image)
	try {
		let product = new Product();
		product.productImage = req.file.filename;
		product.productName = productName;
		product.productDesc = productDesc;
		product.productPrice = productPrice;
		product.productCategory = productCategory;
		product.productQty = productQty;

		await product.save();

		res.json({
			successMessage: `${productName} was created`,
			product,
		});
	} catch (err) {
		console.log(err, 'productController.create error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};

exports.readAll = async (req, res) => {
	try {
		const products = await Product.find({});

		res.json({ products });
	} catch (err) {
		console.log(err, 'productController.readAll error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};

exports.readByCount = async (req, res) => {
	try {
		const products = await Product.find({})
			.populate('productCategory', 'category')
			.limit(6);

		res.json({ products });
	} catch (err) {
		console.log(err, 'productController.readAll error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};

exports.read = async (req, res) => {
	try {
		const productId = req.params.productId;
		const product = await Product.findById(productId);

		res.json(product);
	} catch (err) {
		console.log(err, 'productController.read error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};

exports.update = async (req, res) => {
	const productId = req.params.productId;

	if (req.file !== undefined) {
		req.body.productImage = req.file.filename;
	}

	const oldProduct = await Product.findByIdAndUpdate(productId, req.body);

	if (req.file !== undefined && req.file.filename !== oldProduct.productImage) {
		fs.unlink(`uploads/${oldProduct.productImage}`, err => {
			if (err) throw err;
			console.log('Image deleted from the filesystem');
		});
	}

	res.json({
		successMessage: 'Product successfully updated',
	});
};

exports.delete = async (req, res) => {
	try {
		const productId = req.params.productId;
		console.log("Product ID: ",productId)
		const deletedProduct = await Product.findByIdAndDelete(productId);

		fs.unlink(`uploads/${deletedProduct.productImage}`, err => {
			if (err) throw err;
			console.log(
				'Image successfully deleted from filesystem: ',
				deletedProduct.productImage
			);
		});

		res.json(deletedProduct);
	} catch (err) {
		console.log(err, 'productController.delete error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};
