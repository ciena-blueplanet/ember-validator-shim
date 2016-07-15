module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'validator', target: '5.4.0'}
    ])
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
