var mongoose = require('mongoose'); // nhúng thư viện mongoose

// định nghĩa cấu trúc của bảng với 3 trường, username kiểu string, password kiểu string,
// fullName kiểu String;
var Schema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    fullName: {
        type: String
    }
});
// định nghĩa một bảng có tên là accounts theo cấu trúc ở trên.
var ObjectModel = mongoose.model('accounts', Schema);
module.exports = ObjectModel;
