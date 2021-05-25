module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'StichLibrary',
      externals: {
        react: 'React'
      }
    }
  },
  webpack: {
    extra: {
      entry: {
        demo: ["./demo/src/index.js"]
      },
      resolve: {
        extensions: [".ts", ".tsx", ".js"]
      },
      module: {
        rules: [
          { test: /\.tsx?$/, loader: "ts-loader" }
        ]
      },
    }
  }
}
