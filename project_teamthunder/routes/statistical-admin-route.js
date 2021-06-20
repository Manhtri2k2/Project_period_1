const express = require('express');
const route = express.Router();
const categoryController = require('../controllers/admin/statistical-controller');

route.get('/', categoryController.getList);
// trả về form để nhập thông tin
route.get('/create', categoryController.create);
// nhận thông tin từ form, save vào database.
route.post('/create', categoryController.save);

route.get('/detail/:id', categoryController.getDetail);

route.get('/edit/:id', categoryController.edit);

route.post('/edit/:id', categoryController.update);

route.post('/delete/:id', categoryController.delete);

module.exports = route;
