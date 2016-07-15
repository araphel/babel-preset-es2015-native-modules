var pluginList = require("babel-preset-es2015").plugins;

for (var i = 0; i <= pluginList.length; i++) {
  if (pluginList.slice(i, i+1).indexOf(require("babel-plugin-transform-es2015-modules-commonjs")) !== -1) {
    pluginList.splice(i, 1);
  }
}

module.exports = {
  plugins: pluginList
};
