define(function (require) {

    var Block = require('kit/block/block');

    return Block.extend({
        el: '#page',
        blocks: {
            minimap: require('blocks/minimap/minimap')
        }
    });
});