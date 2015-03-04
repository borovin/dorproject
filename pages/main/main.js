define(function (require) {

    var Page = require('kit/page/page');

    return Page.extend({
        blocks: {
            minimap: require('blocks/minimap/minimap')
        }
    });

});