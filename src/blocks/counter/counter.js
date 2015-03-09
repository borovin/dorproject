define(function (require) {

    var Block = require('kit/block/block');

    return Block.extend({
        countIndex: 0,
        countMax: 0,
        countInterval: null,
        globalEvents: {
            'keydown': function (e) {

                var block = this;

                clearInterval(block.countInterval);

                switch (e.which) {
                    case 37:
                        block.prev();
                        break;
                    case 39:
                        block.next();
                        break;
                }
            }
        },
        events: {
            'mouseover .counter__link': function (e) {

                var block = this,
                    $link = $(e.currentTarget),
                    index = block.$('.counter__link').index($link);

                clearInterval(block.countInterval);

                block.changeTo(index);
            }
        },
        render: function () {

            var block = this,
                render = Block.prototype.render.apply(block, arguments);

            block.countMax = block.el.querySelectorAll('.counter__link').length - 1;
            block.currentEl = block.el.querySelector('.counter__current');

            block.countInterval = setInterval(function () {
                block.next();
            }, 3000);

            return render;
        },
        changeTo: function (index) {

            var block = this;

            if (index >= 0 && index <= block.countMax) {
                block.countIndex = index;
                block.trigger('changeCount', block.countIndex);
            } else {
                return;
            }

            if (block.countInterval && block.countIndex == block.countMax) {
                clearInterval(block.countInterval);
            }

            block.$('.counter__link:eq(' + block.countIndex + ')')
                .addClass('counter__link_active')
                .siblings('.counter__link')
                .removeClass('counter__link_active');

            block.currentEl.innerHTML = block.countIndex;

        },
        prev: function () {

            var block = this;

            block.changeTo(block.countIndex - 1);
        },
        next: function () {

            var block = this;

            block.changeTo(block.countIndex + 1);
        }
    });
});