var mongoose = require('mongoose'); // nhúng thư viện mongoose

// định nghĩa cấu trúc của bảng với 3 trường, username kiểu string, password kiểu string,
// fullName kiểu String;
var Schema = new mongoose.Schema({
    name: {
        type: String
    },
    thumbnail: {
        type: String
    },
    price: {
        type: Number
    }
});
// định nghĩa một bảng có tên là accounts theo cấu trúc ở trên.
var ObjectModel = mongoose.model('statistical', Schema);
module.exports = ObjectModel;
