const NewmanReporterSlackExtended = (newman, options, collectionRunOptions) => {
  newman.on('done', (err, summary) => {
    if (err) {
      return;
    }

    console.log(summary);
  });
};

module.exports = NewmanReporterSlackExtended;
