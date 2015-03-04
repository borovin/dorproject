requirejs.config({});

define(function (require) {

    var page = document.body.dataset.page;

    requirejs([page], function (Page) {
        new Page;
    });

});