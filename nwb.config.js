module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'StitchLibrary',
      externals: {
        react: 'React'
      }
    }
  }
}
