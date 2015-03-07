define(function (require) {

    var Block = require('kit/block/block'),
        countIndex = 0,
        countMax = 0;

    $(document).on('keydown', function(e){

        switch (e.which) {
            case 37:
                countIndex > 0 && $(document).trigger('changeCount', --countIndex);
                break;
            case 39:
                countIndex < countMax && $(document).trigger('changeCount', ++countIndex);
                break;
        }
    });

    return Block.extend({
        globalEvents: {
            'changeCount': function(e, index){

                var block = this,
                    count = block.el.querySelector('.counter__current'),
                    $link = block.$('.counter__link:eq(' + index + ')');

                $link
                    .addClass('counter__link_active')
                    .siblings('.counter__link')
                    .removeClass('counter__link_active');

                count.innerHTML = index;
            }
        },
        events: {
            'mouseover .counter__link': function (e) {

                var block = this,
                    $link = $(e.currentTarget),
                    index = block.$('.counter__link').index($link);

                countIndex = index;

                block.trigger('changeCount', index);
            }
        },
        render: function(){

            var block = this,
                render = Block.prototype.render.apply(block, arguments);

            countMax = block.el.querySelectorAll('.counter__link').length - 1;

            return render;
        }
    });
});