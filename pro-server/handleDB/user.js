const User = require('../model/User');

//添加用户
async function addUser(info){
    try{
        let user = new User(info);
        let userInfo = await user.save();
        console.log('保存用户成功')
        return userInfo;
    } catch (error){
        console.log('保存用户失败')
        console.log(error);
        return null;
    }
}

//查询该是否存在
async function checkUser(uid){
    try {
        let userInfo = await User.findOne({weibo_uid:uid});
        return {userInfo};
    } catch (error){
        console.log('查询失败');
        console.log(error);
        return null;
    }
}

module.exports = {
    addUser,
    checkUser
}