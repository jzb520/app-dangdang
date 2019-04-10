module.exports = {
    devServer: {
        proxy: {
            '/api/user': {
                target: 'http://localhost:9000',
                changeOrigin: true
            },
            '/api': {
                target: 'http://129.204.72.71:3000',
                changeOrigin: true
            // '/api':{
            //     target: "http://search.m.dangdang.com/",
            //     changeOrigin: true,
            //     ws: true, // 是否启用websockets
            //     pathRequiresRewrite: {
            //         "^/api": "/"
            //       }
            }
        }
    }
}