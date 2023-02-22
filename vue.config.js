const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/testgen/" : "/",
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api/*": {
        target: "https://d6757be6f1100.amocrm.ru/",
        ws: true,
        changeOrigin: true,
      },
      "": {
        target: "https://test.gnzs.ru/",
      },
    },
  },
});
