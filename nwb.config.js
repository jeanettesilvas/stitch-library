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
  }
}
