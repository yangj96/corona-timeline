const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/test_timeline/event", {
      target: "http://39.97.176.70:8080",
      changeOrigin: true,
    })
  );
};
