const request = require('request');
const config = require('./config');


// 通过code换body
function getToken(code){
    //换token
    return new Promise((resolve , reject)=>{
        request.post(
            {
                url:'https://api.weibo.com/oauth2/access_token',
                form:{
                    client_id : config.app_key,
                    client_secret : config.app_secret,
                    grant_type : 'authorization_code',
                    redirect_uri : config.redirect_uri,
                    code
                }
            },
            //回调函数
            (error,response,body)=>{
                console.log(body);
                let data = JSON.parse(body);
                resolve(data);
            }
        )
    })
}

//获取用户信息
function getUserInfo(token , uid){
    return new Promise((resolve , reject) => {
        request.get(
            `https://api.weibo.com/2/users/show.json?access_token=${token}&uid=${uid}`, 
            (error, response, body)=>{
                console.log(body)
                resolve(JSON.parse(body));
            }
        )
    })
}


module.exports = {
    getToken,
    getUserInfo
}