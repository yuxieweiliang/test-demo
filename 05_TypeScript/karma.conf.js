module.exports = function(config) {
  config.set({

    frameworks: ["mocha", "karma-typescript"],
    types : [
      "mocha",
      "expect.js"
    ],

    files: [
      { pattern: "node_modules/expect.js/index.js" },
      { pattern: "src/**/*.ts" },
      { pattern: "test/**/*.spec.ts" }
    ],

    preprocessors: {
      "**/**/*.ts": ["karma-typescript"],
    },

    autoWatch: true,

    // logLevel: config.LOG_DEBUG,

    reporters: ["dots", "karma-typescript"],

    karmaTypescriptConfig: {
      bundlerOptions: {
        acornOptions: {
          ecmaVersion: 8,
        },
        transforms: [
          require("karma-typescript-es6-transform")({
            presets: [
              ["@babel/preset-env", {
                targets: {
                  chrome: "60"
                }
              }]
            ]
          })
        ]
      }
    },
    bundlerOptions: {
      acornOptions: {
        ecmaVersion: 8,
      },
      transforms: [
        require("karma-typescript-es6-transform")({
          presets: [
            ["@babel/preset-env", {
              targets: {
                chrome: "60"
              }
            }]
          ]
        })
      ]
    },

    browsers: ["ChromeHeadless"],

    // 单次运行
    singleRun: false,

    tsconfig:"./tsconfig.json"
  });
};
