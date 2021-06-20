const express = require('express');
const bodyParser = require('body-parser');
const Product = require('./models/product');
const app = express();
const port = 3001;

app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'ejs');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:hoilamj20@cluster0.ywj6a.mongodb.net/project-sem1?retryWrites=true&w=majority', { useNewUrlParser: true });

app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.urlencoded({ extended: false }));

const productAdminRoute = require('./routes/product-admin-route');
const orderAdminRoute = require('./routes/order-admin-route');
const customerAdminRoute = require('./routes/customer-admin-route');
const statisticalAdminRoute = require('./routes/statistical-admin-route');
const categoryAdminRoute = require('./routes/category-admin-route');

app.use('/admin/products', productAdminRoute);
app.use('/admin/orders', orderAdminRoute);
app.use('/admin/customers', customerAdminRoute);
app.use('/admin', statisticalAdminRoute);
app.use('/admin/categories', categoryAdminRoute);

app.get('/', function (request, response) {
    Product.find(function (err, data) {
        response.render('client/index', {data: data});
    });
})

app.get('/brands', function (request, response) {
    response.render('client/brands');
})
app.get('/contact', function (request, response) {
    response.render('client/contact');
})
app.get('/news', function (request, response) {
    response.render('client/news');
})
app.get('/products', function (request, response) {
    Product.find(function (err, data) {
        response.render('client/products', {data: data});
    });
})
app.get('/about', function (request, response) {
    response.render('client/about');
})
app.get('/sitemap', function (request, response) {
    response.render('client/sitemap');
})
app.get('/support', function (request, response) {
    response.render('client/support');
})
app.get('/compare-five', function (request, response) {
    response.render('client/compare-five');
})
app.get('/compare-four', function (request, response) {
    response.render('client/compare-four');
})
app.get('/compare-one', function (request, response) {
    response.render('client/compare-one');
})
app.get('/compare-three', function (request, response) {
    response.render('client/compare-three');
})
app.get('/compare-two', function (request, response) {
    response.render('client/compare-two');
})
app.get('/products/:id', function (request, response) {
    Product.findById(request.params.id, function (err, obj) {
        if (err) {
            return response.status(500).send(err);
        } else {
            response.render('client/product-detail', { obj: obj});
        }
    });
})

app.get('/news1', function (request, response) {
    response.render('client/news1');
})
app.get('/news2', function (request, response) {
    response.render('client/news2');
})
app.get('/news3', function (request, response) {
    response.render('client/news3');
})
app.get('/panasonic-air', function (request, response) {
    response.render('client/panasonic-air');
})
app.get('/panasonic-CSU9TKH-8', function (request, response) {
    response.render('client/panasonic-CSU9TKH-8');
})
app.get('/panasonic-floor', function (request, response) {
    response.render('client/panasonic-floor');
})
app.get('/samsung-air', function (request, response) {
    response.render('client/samsung-air');
})
app.get('/samsung-split-ar4000k', function (request, response) {
    response.render('client/samsung-split-ar4000k');
})
app.get('/samsung-system', function (request, response) {
    response.render('client/samsung-system');
})
app.get('/toshiba-air', function (request, response) {
    response.render('client/toshiba-air');
})
app.get('/toshiba-digital-inverter-compact', function (request, response) {
    response.render('client/toshiba-digital-inverter-compact');
})
app.get('/public/file/daikin-air', function (request, response) {
    response.render('/public/file/daikin-air');
})
app.get('/public/file/daikin-ftkv', function (request, response) {
    response.render('/public/file/daikin-ftkv');
})
app.get('/public/file/lg-lw1217ersm', function (request, response) {
    response.render('/public/file/lg-lw1217ersm');
})
app.get('/public/file/LG-P12AWN-14', function (request, response) {
    response.render('/public/file/LG-P12AWN-14');
})
app.get('/public/file/lg-portable', function (request, response) {
    response.render('/public/file/lg-portable');
})
app.get('/public/file/mitsubishi-heatpump', function (request, response) {
    response.render('/public/file/mitsubishi-heatpump');
})
app.get('/public/file/mitsubishi-mseries', function (request, response) {
    response.render('/public/file/mitsubishi-mseries');
})
app.get('/public/file/panasonic-AC', function (request, response) {
    response.render('/public/file/panasonic-AC');
})
app.get('/public/file/panasonic-air', function (request, response) {
    response.render('/public/file/panasonic-air');
})
app.get('/public/file/panasonic-floor', function (request, response) {
    response.render('/public/file/panasonic-floor');
})
app.get('/public/file/samsung-air', function (request, response) {
    response.render('/public/file/samsung-air');
})
app.get('/public/file/samsung-AR4000K', function (request, response) {
    response.render('/public/file/samsung-AR4000K');
})
app.get('/public/file/samsung-system', function (request, response) {
    response.render('/public/file/samsung-system');
})
app.get('/public/file/samsung-system (1)', function (request, response) {
    response.render('/public/file/samsung-system (1)');
})
app.get('/public/file/toshiba-air', function (request, response) {
    response.render('/public/file/toshiba-air');
})
app.get('/public/file/toshiba-compact', function (request, response) {
    response.render('/public/file/toshiba-compact');
})
app.get('/public/file/toshiba-inventer', function (request, response) {
    response.render('/public/file/toshiba-inventer');
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

