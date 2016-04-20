var pluginList = require("babel-preset-es2015").plugins;

// Assumption:
// CommonJS plugin remains second to last in the list.
// https://github.com/babel/babel/blob/master/packages/babel-preset-es2015/index.js#L22

pluginList.splice(pluginList.length - 2, 1);

module.exports = {
	plugins: pluginList
};
