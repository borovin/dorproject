define(function (require) {

    var Block = require('kit/block/block');

    return Block.extend({
        events: {
            'mousemove': function(e){

                var block = this,
                    offsetX = e.pageX - e.currentTarget.offsetLeft,
                    offsetY = e.pageY - e.currentTarget.offsetTop;

                block.background.style.left = -offsetX + "px";
                block.background.style.top = -0.5*offsetY + 20 + "px";
            }
        },
        render: function(){

            var block = this,
                render = Block.prototype.render.apply(block, arguments);

            block.background = block.el.querySelector('.minimap__background');

            return render;
        }
    });
});