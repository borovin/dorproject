define(function (require) {

    var Block = require('kit/block/block'),
        countIndex = 0,
        countMax = 0,
        countInterval;

    function nextStage() {
        countIndex < countMax && $(document).trigger('changeCount', ++countIndex);

        if (countIndex == countMax) {
            clearInterval(countInterval);
        }
    }

    function prevStage() {
        countIndex > 0 && $(document).trigger('changeCount', --countIndex);
    }

    $(document).on('keydown', function (e) {

        clearInterval(countInterval);

        switch (e.which) {
            case 37:
                prevStage();
                break;
            case 39:
                nextStage();
                break;
        }
    });

    return Block.extend({
        globalEvents: {
            'changeCount': function (e, index) {

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

                clearInterval(countInterval);

                var block = this,
                    $link = $(e.currentTarget),
                    index = block.$('.counter__link').index($link);

                countIndex = index;

                block.trigger('changeCount', index);
            }
        },
        render: function () {

            var block = this,
                render = Block.prototype.render.apply(block, arguments);

            countMax = block.el.querySelectorAll('.counter__link').length - 1;

            countInterval = setInterval(function () {
                nextStage();
            }, 3000);

            return render;
        }
    });
});