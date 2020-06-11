const config = {
  karmaTypescriptConfig: {
    bundlerOptions: {
      addNodeGlobals:true,
      constants: {
        __PRODUCTION__:false },
      entrypoints:/.spec.(ts|tsx)$/,
      exclude: ["react/addons"],
      ignore: ["ws"],
      noParse:"jquery",
      resolve: {
        alias: {
          "@angular/upgrade/static$":"../bundles/upgrade-static.umd.js" },
        extensions: [".js", ".json"],
        directories: ["node_modules"]
      },
      sourceMap:false,
      transforms: [require("karma-typescript-es6-transform")()],
      validateSyntax:true
    },
    compilerDelay:500,
    compilerOptions: {
      noImplicitAny:true,
    },
    coverageOptions: {
      instrumentation:true,
      exclude:/.(d|spec|test).ts/i,
      threshold: {
        global: {
          statements:100,
          branches:100,
          functions:-10,
          lines:100,
          excludes: [
            "src/foo/**/*.js" ]
        },
        file: {
          statements: -10,
          branches: 100,
          functions:100,
          lines:100,
          excludes: [
            "src/bar/**/*.js" ],
          overrides: {
            "src/file.js": {
              statements:90 }
          }
        }
      },
    },
    exclude: ["broken"],
    include: {
      mode:"replace",
      values: ["**/*.ts"]
    },
    remapOptions: {
      warn:function(message){
        console.log(message);
      }
    },
    reports: {
      "cobertura": {
        "directory":"coverage",
        "filename":"cobertura/coverage.xml" },
      "html":"coverage",
      "text-summary":"" },
    transformPath:function(filepath) {
      returnfilepath.replace(/.(ts|tsx)$/, ".js");
    },
    tsconfig:"./tsconfig.json"
  }
}
