var babelPresetES2015;
var modulesCommonJs;
var es2015PluginsWithCommonJs;
var es2015NativeModulesOnly;

babelPresetES2015 = require('babel-preset-es2015');
es2015PluginsWithCommonJs = babelPresetES2015.plugins;

try {
  // console.log('\nTrying to require CommonJS module using npm3 style...');
  modulesCommonJs = require('babel-plugin-transform-es2015-modules-commonjs');
} catch (error) {
  // console.log('\t\t\t\t\t\t\t...npm3 is no go');
}

if (!modulesCommonJs) {
  try {
    // console.log('\nTrying to require CommonJS module using npm2 style...');
    modulesCommonJs = require('babel-preset-es2015/node_modules/babel-plugin-transform-es2015-modules-commonjs');
  } catch (error) {
    // console.log('\t\t\t\t\t\t\t...npm2 is no go!');
  }
}

if (!modulesCommonJs) {
  throw new Error('Cannot resolve babel-plugin-transform-es2015-modules-commonjs');
} else {
  // console.log('\nSuccess, CommonJS module have been located!');
}

es2015NativeModulesOnly = es2015PluginsWithCommonJs.filter(function (es2015Plugin) {
  // console.log('\nRemoving it from es2015 preset and transforming it into es2015-native-modules');
  return es2015Plugin !== modulesCommonJs;
});

if (es2015PluginsWithCommonJs.length === es2015NativeModulesOnly.length) {
  throw new Error('Failed to remove babel-plugin-transform-es2015-modules-commonjs from the preset.');
} else {
  // console.log('All Done!');
}

module.exports = {
  plugins: es2015NativeModulesOnly
};
