define(function (require) {

    var Page = require('kit/page/page');

    return Page.extend({
        blocks: {
            counter: require('blocks/counter/counter'),
            intro: require('blocks/intro/intro')
        }
    });

});