module.exports = function NewmanReporterSlackExtended (newman, options) {

    let buildup = new Object();
    buildup.requestName = ""
    buildup.assertions = []
    buildup.headers = []
    buildup.body = ""

    newman.on('beforeItem', (err, e) => {
        //reset ouput
        buildup.assertions = []
        buildup.requestName = e.item.name
    })

    newman.on('assertion', (err, e) => {
        //set assertion data in object
        let assertion = new Object()
        assertion.title = e.assertion;
        assertion.message = e.error.message;

        //add assertion to list
        buildup.assertions.push(assertion)
    })

    newman.on('item', (err, e) => {
        buildup.requestName = e.item.name
        buildup.body = e.item.request.body;
        buildup.headers = e.item.request.headers.members;


        //display everything
        console.log(`\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`)
        console.log(`${JSON.stringify(buildup, null, 2)}`)
    })
}