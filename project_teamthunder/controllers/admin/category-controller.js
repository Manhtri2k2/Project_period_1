const Categories = require('../../models/category');
const Product = require('../../models/product');

exports.getList = function (req, resp) {
    Categories.find({status: 1},function (err, data) {
        resp.render('admin/category/index' , {data: data});
    });
}

exports.getDetail = function (req, resp) {
    Categories.findById(req.params.id, function (err, obj) {
        if (err) {
            return res.status(500).send(err);
        } else {
            resp.render('admin/category/detail', { obj: obj});
        }
    });
}

exports.create = function (req, resp) {
    resp.render('admin/category/create');
}

exports.save = function (req, resp) {
    var obj = new Categories(req.body);
    // var obj = new Product({
    //     name: req.body.name,
    //     description: req.body.description,
    //     status: req.body.status
    // });
    obj.save(function (err) {
        if (err) {
            return resp.status(500).send(err);
        } else {
            return resp.redirect('/admin/categories');
        }
    });
}

exports.edit = function (req, resp) {
    Categories.findById(req.params.id, function (err, obj) {
        if (err) {
            return res.status(500).send(err);
        } else {
            resp.render('admin/category/edit', { obj: obj});
        }
    });
}

exports.update = function (req, resp) {
    Categories.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: false},
        function (err, obj) {
            if (err) {
                return res.status(500).send(err);
            } else {
                resp.redirect('/admin/categories');
            }
        });
}

exports.delete = function (req, resp) {
    Categories.findByIdAndRemove(
        req.params.id,
        function (err, obj) {
            if (err) {
                return resp.status(500).send(err);
            } else {
                resp.status(200).send();
            }
        });
}

exports.deleteMaKhongDelete = function (req, resp) {
    let updateInfor = {
        status: -1
    }
    Categories.findByIdAndUpdate(req.params.id, updateInfor,function (err, data) {
        resp.redirect('/admin/categories');
    })
}
