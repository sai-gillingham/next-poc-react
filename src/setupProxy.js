const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        process.env.REACT_APP_PROXY_PATH,
        createProxyMiddleware({
            target: process.env.REACT_APP_PROXY_URL,
            changeOrigin: true,
        })
    );
};
