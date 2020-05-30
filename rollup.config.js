const fs = require('fs');
// const babel = require('rollup-plugin-babel')
const typescript = require('rollup-plugin-typescript2')
const postcss = require('rollup-plugin-postcss');
const tsConfig = require('./tsconfig.json');

let list = fs.readdirSync('./src');
let res = {};
list.forEach((item) => {
  if(!(item === 'index.ts' || item === 'style')) {
    res[item] = `./src/${item}/index.tsx`;
  }
});

export default {
  // 入口 可以是一个字符串，也可以是对象
  input: res,
  // 出口
  output: {
    dir: 'es', // 可以是 dir 表示输出目录 也可以是 file 表示输出文件
    format: 'es', // 输出的格式 可以是 cjs commonJs 规范 | es es Module 规范 | iife 浏览器可引入的规范
    sourceMap: true,
    entryFileNames: '[name]/index.js',
    exports: 'named'
  },
  // 是否开启代码分割
  plugins: [
    postcss(),
    typescript(tsConfig.compilerOptions),
    // babel({
    //   exclude: 'node_modules/**'
    // })
  ]
}