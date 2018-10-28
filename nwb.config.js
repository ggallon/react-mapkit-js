module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactMapKit',
      externals: {
        react: 'React'
      }
    }
  }
}
