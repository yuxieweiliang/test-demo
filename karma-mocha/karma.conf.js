const path = require('path');
const webpack = require('webpack');
module.exports = function(config) {
  config.set({

    /***
     * 基础路径，用在files，exclude属性上
     */
    basePath: '',


    /**
     * 测试框架
     * 可用的框架：https://npmjs.org/browse/keyword/karma-adapter
     */
    frameworks: ['mocha', 'chai', 'sinon'],

    /**
     * 需要加载到浏览器的文件列表
     */
    files: [
      // {pattern:'src/*.js',included:true},
      'test/*.spec.js'
    ],

    /**
     * 排除的文件列表
     */
    exclude: [],

    /**
     * 在浏览器使用之前处理匹配的文件
     * 可用的预处理: https://npmjs.org/browse/keyword/karma-preprocessor
     */
    preprocessors: {
      'test/**.spec.js': ['webpack'],
      'src/*.js':['coverage']
    },

    /**
     * 使用测试结果报告者
     * 可能的值: "dots", "progress"
     * 可用的报告者：https://npmjs.org/browse/keyword/karma-reporter
     */
    reporters: ['progress', 'coverage', 'mocha'],

    /**
     * 服务端口号
     */
    port: 9876,


    /**
     * 启用或禁用输出报告或者日志中的颜色
     */
    colors: true,

    /**
     * 配置打印信息的颜色
     */
    mochaReporter: {
      // output: 'autowatch',
      // showDiff: true
      colors: {
        success: 'blue',
        info: 'green',
        warning: 'cyan',
        error: 'red'
      },
      symbols: {
        success: '+',
        info: '#',
        warning: '!',
        error: 'x'
      }
    },

    /**
     * 日志等级
     * 可能的值：
     * config.LOG_DISABLE //不输出信息
     * config.LOG_ERROR    //只输出错误信息
     * config.LOG_WARN //只输出警告信息
     * config.LOG_INFO //输出全部信息
     * config.LOG_DEBUG //输出调试信息
     */
    logLevel: config.LOG_INFO,

    /**
     * 启用或禁用自动检测文件变化进行测试
     */
    autoWatch: true,

    /**
     * 测试启动的浏览器
     * 可用的浏览器：https://npmjs.org/browse/keyword/karma-launcher
     */
    browsers: ['PhantomJS'],

    /**
     * 开启或禁用持续集成模式
     * 设置为true, Karma将打开浏览器，执行测试并最后退出
     */
    singleRun: false,

    /**
     * 并发级别（启动的浏览器数）
     */
    concurrency: Infinity,

   /* plugins: [
      // require('karma-babel-preprocessor'),
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-sinon'),
      require('karma-webpack'),
      // require('karma-chrome-launcher')
      // require('karma-phantomjs-launcher')
    ],*/

    webpack: {
      /*resolve: {
        extensions: ['.js']
      },*/
      module: {
        loaders: [{
          test:/\.js$/,
          use: 'babel-loader',
          exclude: [
            path.resolve( __dirname, './node_modules' )
          ]
        }]
      },
      stats: "errors-only",
      devServer:{
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }
    },
    /**
     * 指定覆盖率代码所在的位置及类型,
     * 默认位置为coverage 类型为html。
     * 使用reporters为"coverage"时报告输出的类型和那目录
     */
    /*coverageReporter: {
     type : 'html',
     dir : 'coverage/'
     }*/

  })
}
