const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const config = require('./utils/config');

const server = express();

var store = new MongoDBStore({
    uri:config.dbPath,
    collection:'sessions'
});
store.on('error' , function(error) {
    console.log(error)
})


//连接数据库
new Promise((resolve , reject)=>{
    mongoose.connect(config.dbPath, { useNewUrlParser: true } ,(error)=>{
        if(error){
            console.log('数据库连接失败')
            reject(error);
        } else {
            console.log('数据库连接成功');
            resolve();
        }
    })
})
.then(()=>{
    //成功
    //启动服务器
    return new Promise((resolve,reject)=>{
        server.listen(9000, (error)=>{
            if(error){
                console.log('服务器启动失败')
                reject(error);
            } else{
                console.log('服务器启动成功');
                resolve();
            }
        })
    })
})
.then(()=>{
    console.log('准备工作完成，服务器和数据库可以工作了');
        // 作用session
    server.use(session({
        name:config.session_name,
        secret: config.session_secret,
        cookie: {
          maxAge: 1000 * 60 * 60 * 24 * 7 * config.session_life// 1 week
        },
        store: store,
        resave: true,
        saveUninitialized: true
      }));
    // 加载路由
    // server.use('/api/user/cart', require('./routers/cartRouter') );
    server.use('/api/user', require('./routers/userRouter'));
})
.catch((error)=>{   
    console.log(error);
})








