const router = require('express').Router();
const Product = require('../models/product');

router.post('/products', async (req, res) => {
  try {
    console.log(req.body);
    let product = new Product();
    product.title = req.body.title;
    product.description = req.body.description;
    product.price = req.body.price;
    product.stockQuantity = req.body.stockQuantity;

    await product.save();

    res.json({
      status: true,
      message: '保存しました',
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
});

router.get('/products', async (req, res) => {
  try {
    let products = await Product.find().exec();
    res.json({
      status: true,
      products: products,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
});

router.put('/products/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body.title);
    let product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          price: req.body.price,
          stockQuantity: req.body.stockQuantity,
        },
      },
      { upsert: true }
    );
    res.json({
      status: true,
      updateProduct: product,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
});

router.delete('/products/:id', async (req, res) => {
  try {
    let deletedProduct = await Product.findOneAndDelete({ _id: req.params.id });

    if (deletedProduct) {
      res.json({
        status: true,
        message: '削除しました',
      });
    }
  } catch (err) {
    res.json({
      status: false,
      message: err.message,
    });
  }
});

module.exports = router;
