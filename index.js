module.exports = function NewmanReporterSlackExtended (newman, options) {
    newman.on('done', (err, e) => {
      console.log(e)
      console.log(e.failures)
    })

}
