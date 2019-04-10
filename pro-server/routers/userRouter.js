const { Router } = require("express");
const url = require('url');
const weibo = require('../utils/weibo');
const user = require('../handleDB/user')

const router = new Router();

//使用新浪微博code登录
router.get("/login_by_weibo_code", async (req, res) => {
  //获得客服韩的code
  let { code } = url.parse(req.url, true).query;
  if (!code) {
    res.json({
      code: -1,
      message: "缺少参数"
    });
    return;
  }

  //换token
  let data = await weibo.getToken(code);
  //判断是否有值
  if(data.error){
    res.json({code:-2 , data});
    return;
  }
  else if(!data.access_token){
    //获得token成功
    res.json({code:-3 , data});
    return ;
  }

  //有token
  //判断uid是否存在
  let _user = await user.checkUser(data.uid);
  if(!_user){
    //查询失败
    res.json({code:-5 , data:{message:'数据库操作失败'}});
    return ;
  } else if(_user.userInfo){
    //存在用户，值响应给客户端用户信息
    //登录成功
    //保存用户登录态
    req.session.cookie.httpOnly = false;
    req.session.user = {
      weibo_uid:_user.userInfo.uid,
      id:_user.userInfo._id,
      userName:_user.userInfo.userName,
      image_url:_user.userInfo.image_url,
      city:_user.userInfo.city,
      gender:_user.userInfo.gender,
      description:_user.userInfo.description
    };
    //响应用户
    res.json({
      code:0,
      data:{
        userName:_user.userInfo.userName,
        image_url:_user.userInfo.image_url,
        city:_user.userInfo.city,
        gender:_user.userInfo.gender,
        description:_user.userInfo.description
      }
    })
    return ;
  }

  //不存在,换用户信息，进行注册
  
  let userInfo = await weibo.getUserInfo(data.access_token , data.uid);
  //进行注册
  let userData = await user.addUser({
        //微博用户id
        weibo_uid:userInfo.id,
        //用户名
        userName:userInfo.screen_name,
        //头像
        image_url :userInfo.profile_image_url,
        //城市
        city:userInfo.location,
        //性别
        gender:userInfo.gender,
        //描述
        description:userInfo.description
  });
  if(!userData){
    //注册失败
    res.json({code:-4 , data:{message:'注册失败'}});
    return ;
  }
  //注册成功
  //保存用户登录态
  req.session.cookie.httpOnly = false;
  req.session.user = {
    weibo_uid:userData.uid,
    id:userData._id,
    userName:userData.userName,
    image_url:userData.image_url,
    city:userData.city,
    gender:userData.gender,
    description:userData.description
  };
  // 响应用户信息给客户端
  res.json({
    code:0,
    data:{
      userName:userData.userName,
      image_url:userData.image_url,
      city:userData.city,
      gender:userData.gender,
      description:userData.description
    }
  })



});

//检查用户是否登录了
router.get('/check_login' , (req,res) => {
  console.log(req);
  if(req.session.user){
    res.json({
      code:0,
      message:'登录成功',
      data:{
        userName:req.session.user.userName,
        image_url:req.session.user.image_url,
        city:req.session.user.city,
        gender:req.session.user.gender,
        description:req.session.user.description
      }
    })
  } else {
    res.json({
      code:-1,
      message:'请重新登录'
    })
  }
})

module.exports = router;
