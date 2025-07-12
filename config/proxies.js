const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = [
  {
    path: "/tutor-pal",
    middleware: createProxyMiddleware({
      target: process.env.TUTOR_PAL_URL,
      changeOrigin: true,
      pathRewrite: {
        "^/tutor-pal": "",
      },
    }),
  },
];
