var webpackConfig = require('./webpack.test');

module.exports = function (config) {
  var _config = {
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      {pattern: './config/karma-test-shim.js', watched: false},
      { pattern: './src/assets/**/*', watched: false, included: false, served: true, nocache: false }
    ],

    proxies: {
      "/assets/": "/base/src/assets/"
    },
    
    preprocessors: {
      './config/karma-test-shim.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,
       

    webpackMiddleware: {
      stats: 'errors-only'
    },
    
       
    webpackServer: {
      noInfo: true
    },
    client: {
      captureConsole: false
    },

    reporters:  ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  };

  config.set(_config);
};
