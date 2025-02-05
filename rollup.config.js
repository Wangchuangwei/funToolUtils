const { defineConfig } = require('rollup');
const path = require('path');
const ts = require('rollup-plugin-typescript2');
const alias = require('@rollup/plugin-alias');
const terser = require('@rollup/plugin-terser');
const { dts } = require('rollup-plugin-dts');
const { visualizer } = require('rollup-plugin-visualizer');
const {recordInfo} = require('./plugin')

module.exports = defineConfig([{
  input: ['./lib/index.js'], //入口文件
  output: [
    {
      dir: 'testDist/esm', //出口文件
      format: 'esm', //打包格式
      preserveModules: true, // 保持模块原始结构和目录结构
      plugins:[recordInfo()]
    },
    {
      dir: 'testDist/cjs',
      format: 'cjs',
      preserveModules: true
    },
    {
      file: 'testDist/iife.js',
      format: 'iife',
      name: '$robinson'
    }
  ],
  plugins: [
    alias({
      entries: [{
        find: '@',
        replacement: path.resolve(__dirname, './src')
      }]
    }),

    // terser(),
    // visualizer({
    //   filename: './coverage/stats.html', // 生成的分析文件名称
    //   open: true, // 是否在生成后+自动打开浏览器
    //   template: 'treemap', // 可视化模板，可选 'sunburst', 'network', 'treemap', 'raw-data'
    //   gzipSize: true, // 是否显示 gzip 压缩后的大小
    //   brotliSize: true // 是否显示 brotli 压缩后的大小
    // })
  ]
},
// 类型文件
{
  input: 'src/index.ts',
  output: {
    dir: 'testDist/esm/types',
    format: 'esm',
    preserveModules: true
  },
  plugins: [
    dts()
  ]
}
])