//开发环境
const DEV_HOST = 'http://localhost:8080';



// 微博登录 参数code , 微博登录入口
const USER_LOGIN_API = '/api/user/login_by_weibo_code';

// 检查是否登录
const USER_CHECK_LOGIN_API = '/api/user/check_login';

//微博登录连接
const SINA_LOGIN_URL = 'https://api.weibo.com/oauth2/authorize';

export default {
    HOST: DEV_HOST,
    SINA_LOGIN_URL,
    USER_LOGIN_API,
    USER_CHECK_LOGIN_API
}