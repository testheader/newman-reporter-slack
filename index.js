module.exports = function NewmanReporterSlackExtended(newman, options) {
  let requestInformation;
  let runInformation;

  newman.on("beforeIteration", (err, e) => {
    //reset and prime run
    runInformation = new Object();
    runInformation.requests = [];
    runInformation.totalFailedRequest = 0;
    runInformation.totalFailedAssertions = 0;
    runInformation.collection = newman.summary.collection.name;
  });

  newman.on("beforeItem", (err, e) => {
    //reset and prime request
    requestInformation = new Object();
    requestInformation.requestName = "";
    requestInformation.assertions = [];
    requestInformation.headers = [];
    requestInformation.body = "";
    requestInformation.failedAssertions = 0;
    requestInformation.requestFailed = false;
  });

  newman.on("assertion", (err, e) => {
    //set assertion data in object
    let assertion = new Object();
    assertion.title = e.assertion;
    assertion.message = e.error.message;

    //add assertion to list
    requestInformation.assertions.push(assertion);
    requestInformation.failedAssertions++;
    runInformation.totalFailedAssertions++;
    requestInformation.requestFailed = true;
  });

  newman.on("item", (err, e) => {
    requestInformation.requestName = e.item.name;
    requestInformation.body = e.item.request.body;
    requestInformation.headers = e.item.request.headers.members;

    if (requestInformation.requestFailed) {
      runInformation.totalFailedRequest++;
    }

    //add finished information to the run results
    runInformation.requests.push(requestInformation);
  });

  newman.on("done", (err, e) => {
    //display everything
    console.log(`${JSON.stringify(runInformation, null, 2)}`);
  });
};
