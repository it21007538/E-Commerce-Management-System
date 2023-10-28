const router = require('express').Router();
let Product = require('../models/Product.model');

router.route('/').get((req, res) => {
    Product.find()
        .then(Product => res.json(Product))
        .catch(err => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const ItemCode = req.body.ItemCode;
    const Name = req.body.Name;
    const Brand = req.body.Brand;
    const Qty =req.body.Qty;
    const PDate = req.body.PDate;
    const Price = req.body.Price;
    const Discount =req.body.Discount;
    const Tcost =req.body.Tcost;



    const newProduct = new Product({

        ItemCode,
        Name,
        Brand,
        Qty,
        PDate,
        Price,
        Discount,
        Tcost,

    });



    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/:id').get((req, res) => {
    Product.findById(req.params.id)
        .then(Product => res.json(Product))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json('Product deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/update/:id').post((req, res) => {
    Product.findById(req.params.id)
        .then(Product => {
            Product.ItemCode = req.body.ItemCode;
            Product.Name = req.body.Name;
            Product.Brand =req.body.Brand;
            Product.Qty = req.body.Qty;
            Product.PDate = req.body.PDate;
            Product.Price =req.body.Price;
            Product.Discount =req.body.Discount;
            Product.Tcost =req.body.Tcost;


            Product.save()
                .then(() => res.json('Product updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;