const { environment } = require("@rails/webpacker");
const { VueLoaderPlugin } = require("vue-loader");
const vue = require("./loaders/vue");

environment.plugins.prepend("VueLoaderPlugin", new VueLoaderPlugin());
environment.loaders.prepend("vue", vue);
environment.exports = {
  rules: [
    {
      test: /\.s(c|a)ss$/,
      use: [
        "vue-style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          // Requires sass-loader@^7.0.0
          options: {
            implementation: require("sass"),
            fiber: require("fibers"),
            indentedSyntax: true, // optional
          },
          // Requires sass-loader@^8.0.0
          options: {
            implementation: require("sass"),
            sassOptions: {
              fiber: require("fibers"),
              indentedSyntax: true, // optional
            },
          },
        },
      ],
    },
  ],
};

const resolver = {
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
};

module.exports = environment;
