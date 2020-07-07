const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/test_timeline/event", {
      target: "http://106.12.122.40:8080",
      changeOrigin: true,
    })
  );
};
