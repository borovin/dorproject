var os = require('os');

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-shell');

    grunt.config.init({
        shell: {
            test: {
                command: 'casperjs test tests/<%- grunt.option("suite") ? grunt.option("suite") + ".js" : "" %> --host=<%- grunt.option("host") || "http://localhost:8080" %> --includes=./tools/casperInclude.js --platform=' + os.platform()
            }
        }
    });

    grunt.registerTask('test', ['shell:test']);

};