const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) { 
  app.use(
    "/api", // The URL path to proxy
    createProxyMiddleware({
      target: "https://foodapp-backend-z289.onrender.com/", // The backend server URL
      changeOrigin: true, // Changes the origin of the host header to the target URL
    })
  );
};
