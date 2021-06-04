module.exports = {
  type: 'react-component',
  npm: {
    cjs: false,
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
        demo: ["./demo/src/index.tsx"]
      },
      resolve: {
        extensions: [".ts", ".tsx", ".js"]
      },
      module: {
        rules: [
          { test: /\.tsx?$/, loader: "ts-loader" }
        ]
      },
    },
    html: {
      template: 'demo/src/index.html'
    }
  }
}
