const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    //微博用户id
    weibo_uid:Number,
    //用户名
    userName:String,
    //头像
    image_url :String,
    //城市
    city:String,
    //性别
    gender:String,
    //描述
    description:String
})

const User = mongoose.model('user' , userSchema);

module.exports = User;