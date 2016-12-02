module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'validator', target: '6.2.0'}
    ])
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
