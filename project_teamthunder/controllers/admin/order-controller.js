const Product = require('../../models/order');

exports.getList = function (req, resp) {
    Product.find(function (err, data) {
        console.log('--------------------');
        // console.log(data);
        resp.render('admin/order/index' , {data: data});
        // resp.send('data');
    });
}

exports.getDetail = function (req, resp) {
    Product.findById(req.params.id, function (err, obj) {
        if (err) {
            return res.status(500).send(err);
        } else {
            resp.render('admin/order/detail', { obj: obj});
        }
    });
}

exports.create = function (req, resp) {
    resp.render('admin/order/create');
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
            return resp.redirect('/admin/orders');
        }
    });
}

exports.edit = function (req, resp) {
    Product.findById(req.params.id, function (err, obj) {
        if (err) {
            return res.status(500).send(err);
        } else {
            resp.render('admin/order/edit', { obj: obj});
        }
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
                resp.redirect('/admin/orders');
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
                resp.redirect('/admin/orders');
            }
        });
}
