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
    categoryId: {
        type: String
    },
    price: {
        type: Number
    },
    // status: {
    //     type: Number
    // },



    key_feature: {
        type: String
    },
    applicable_room_area: {
        type: String
    },
    weight: {
        type: Number
    },
    dimensions: {
        type: String
    },
    document_link: {
        type: String
    },
    color: {
        type: String
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    },
    deleted_at: {
        type: Date
    },
    status: {
        type: Number // 0. Deactive 1. Active -1. Deleted
    }
});
// định nghĩa một bảng có tên là accounts theo cấu trúc ở trên.
var ObjectModel = mongoose.model('products', Schema);
module.exports = ObjectModel;
