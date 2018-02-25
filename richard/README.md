## 教程

## 步骤

### 正式开始前

使用 `npm init` 建立项目

创建基础的 `webpack.conf.js`
```
var path = require('path');

module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader']
      }
    ]
  }
}
```

安装
- `babel` preset 和 插件
- `webpack-cli`
- `react` 相关包

```bash
npm i -D \
react-dom \
react \
webpack-cli \
webpack \
babel-plugin-transform-builtin-extend \
babel-plugin-transform-runtime \
babel-plugin-syntax-jsx \
babel-preset-env \
babel-core \
babel-eslint \
babel-plugin-transform-object-rest-spread \
babel-plugin-transform-class-properties \
fast-async \
babel-preset-react \
babel-preset-stage-2
```

将开发命令写入 npm script

```javascript
// package.json
"scripts": {
  ...
  "dev": "webpack -d --watch --config webpack.conf.js",
  "build": "webpack --config webpack.conf.js",
  ...
}
```

到此, 我们完成了对 `webpack` 打包的配置, 可以运行 `npm run dev` 试试
