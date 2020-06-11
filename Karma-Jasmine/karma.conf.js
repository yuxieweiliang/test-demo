// Karma configuration
// Generated on Sun Feb 04 2018 16:48:30 GMT+0800 (中国标准时间)
const path = require('path');
var webpack = require('webpack');
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'test/*.spec.js'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // 指定预处理器
    preprocessors: {
      'test/app.spec.js': ['webpack'],
      'src/app.js': 'coverage'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    webpack: {
      module: {
        loaders: [{
          test:/\.js$/,
          use: 'babel-loader',
          exclude: [
            path.resolve( __dirname, './test' ),
            path.resolve( __dirname, './node_modules' )
          ]
        }]
      },
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
