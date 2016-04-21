# babel-preset-es2015-native-modules

### **Babel preset for all es2015 plugins MINUS ONE:**

- babel-plugin-transform-es2015-modules-commonjs


## Use case
  – A preset without transform-es2015-modules-commonjs would help with tree-shaking when using Babel 6 and webpack 2

[**Tree-shaking with webpack 2 and Babel 6**](http://www.2ality.com/2015/12/webpack-tree-shaking.html)


## Install

```sh
$ npm install --save-dev babel-preset-es2015-native-modules
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["es2015-native-modules"]
}
```

### Via CLI

```sh
$ babel script.js --presets es2015-native-modules
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["es2015-native-modules"]
});
```
