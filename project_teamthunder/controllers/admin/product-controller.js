const Product = require('../../models/product');
const Category = require('../../models/category');

exports.getList = function (req, resp) {
    console.log('Magiao');
    let filter = {
        status: 1
    };
    if (req.query.categoryId && req.query.categoryId != 0){
        filter.categoryId = req.query.categoryId;
    }
    Product.find(filter,function (err, data) {
        console.log(data);
        Category.find({status: 1}, function (errCate, dataCate){
            console.log(data);
            resp.render('admin/product/index' , {data: data, listCategory:  dataCate, selectedCategoryId: req.query.categoryId});
        });
    });
}

exports.getDetail = function (req, resp) {
    Product.findById(req.params.id, function (err, obj) {
        if (err) {
            return res.status(500).send(err);
        } else {
            resp.render('admin/product/detail', { obj: obj});
        }
    });
}

exports.create = function (req, resp) {
    Category.find({status: 1}, function (err, data){
        resp.render('admin/product/create', {listCategory: data});
    });
}

exports.save = function (req, resp) {
    var obj = new Product(req.body);
    // var obj = new Product({
    //     name: req.body.name,
    //     description: req.body.description,
    //     status: req.body.status
    // });
    obj.save(function (err) {
        if (err) {
            return resp.status(500).send(err);
        } else {
            return resp.redirect('/admin/products');
        }
    });
}

exports.edit = function (req, resp) {
    Product.findById(req.params.id, function (err, obj) {
        Category.find({status: 1}, function (errCate, data){
            resp.render('admin/product/edit', {listCategory: data, obj: obj});
        });
    });
}

exports.update = function (req, resp) {
    Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: false},
        function (err, obj) {
            if (err) {
                return res.status(500).send(err);
            } else {
                resp.redirect('/admin/products');
            }
        });
}

exports.delete = function (req, resp) {
    Product.findByIdAndRemove(
        req.params.id,
        function (err, obj) {
            if (err) {
                return resp.status(500).send(err);
            } else {
                resp.status(200).send();
            }
        });
}

exports.deleteWithForm = function (req, resp) {
    Product.findByIdAndRemove(
        req.params.id,
        function (err, obj) {
            if (err) {
                return resp.status(500).send(err);
            } else {
                resp.redirect('/admin/products');
            }
        });
}
