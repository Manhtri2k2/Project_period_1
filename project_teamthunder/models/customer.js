var mongoose = require('mongoose'); // nhúng thư viện mongoose

// định nghĩa cấu trúc của bảng với 3 trường, username kiểu string, password kiểu string,
// fullName kiểu String;
var Schema = new mongoose.Schema({
    stt: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    account: {
        type: String
    },
});
// định nghĩa một bảng có tên là accounts theo cấu trúc ở trên.
var ObjectModel = mongoose.model('customer', Schema);
module.exports = ObjectModel;
