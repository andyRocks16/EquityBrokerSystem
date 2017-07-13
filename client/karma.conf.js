// Karma configuration
// Generated on Wed Apr 19 2017 11:58:00 GMT+0530 (India Standard Time)

//**Added Manually**
// var webpackConfig = require('./webpack.config.dev.js');
var webpackConfig = require('webpack');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    //add a webpack section to your Karma configuration **Added Manually**
    // webpack: webpackConfig,
webpack: {
                module: {
                loaders: [
                    {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        },


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

  
    // list of files / patterns to load in the browser
    files: [
      // 'test/**/*Spec.js',
      // 'test/Spec.js',
      // './components/Login/Login.component.js',
      'test/*.js',
      // 'test/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // 'test/**/*Spec.js': ['webpack'],
      // 'test/Spec.js': ['webpack'],
      '../test/*.js' : ['webpack'],
      'test/*.js': ['webpack'],
      // 'test/**/*.js': ['webpack'],
      // 'test/**/*Spec.jsx' : ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


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
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
