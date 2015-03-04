var fs = require('fs');
var path = fs.absolute(fs.workingDirectory + '/node_modules/phantomcss/phantomcss.js');
var phantomcss = require(path);

phantomcss.init({
    rebase: casper.cli.get("rebase"),
    libraryRoot: fs.absolute(fs.workingDirectory + '/node_modules/phantomcss'),
    screenshotRoot: fs.absolute(fs.workingDirectory + '/tests/ui/screenshots/' + casper.cli.options.platform),
    failedComparisonsRoot: fs.absolute(fs.workingDirectory + '/tests/ui/failures'),
    comparisonResultRoot: fs.absolute(fs.workingDirectory + '/tests/ui/results'),
    addLabelToFailedImage: false
});

casper.test.setUp(function () {

    casper.start(casper.cli.options.host);
    casper.viewport(1280, 1024);
    phantomcss.turnOffAnimations();

});

casper.test.tearDown(function(done) {

    casper.then(function(){
        phantomcss.compareSession();
    }).run(done);

});