const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://foodapp-backend-b38s.onrender.com/",
      changeOrigin: true,
    })
  );
};
