define(function (require) {

    var Block = require('kit/block/block');

    return Block.extend({
        globalEvents: {
            changeCount: function(e, index){

                var block = this;

                block.$('.intro__content:lt(' + index + '), .intro__content:eq(' + index + ')')
                    .addClass('intro__content_visible');

                block.$('.intro__content:gt(' + index + ')')
                    .removeClass('intro__content_visible');
            }
        }
    });
});