const Product = require('../../models/statistical');

exports.getList = function (req, resp) {
    Product.find(function (err, data) {
        console.log('--------------------');
        // console.log(data);
        resp.render('admin/statistical/index' , {data: data});
        // resp.send('data');
    });
}

exports.getDetail = function (req, resp) {
    Product.findById(req.params.id, function (err, obj) {
        if (err) {
            return res.status(500).send(err);
        } else {
            resp.render('admin/statistical/detail', { obj: obj});
        }
    });
}

exports.create = function (req, resp) {
    resp.render('admin/statistical/create');
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
            return resp.redirect('/admin/statisticals');
        }
    });
}

exports.edit = function (req, resp) {
    Product.findById(req.params.id, function (err, obj) {
        if (err) {
            return res.status(500).send(err);
        } else {
            resp.render('admin/statistical/edit', { obj: obj});
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
                resp.redirect('/admin/statisticals');
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
                resp.redirect('/admin/statisticals');
            }
        });
}
