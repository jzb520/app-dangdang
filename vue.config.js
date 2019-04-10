module.exports = {
    devServer: {
        proxy: {
            '/api':{
                target: "http://search.m.dangdang.com/",
                changeOrigin: true,
                ws: true, // 是否启用websockets
                pathRequiresRewrite: {
                    "^/api": "/"
                  }
            }
        }
    }
}