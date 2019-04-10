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
            }
        }
    }
}