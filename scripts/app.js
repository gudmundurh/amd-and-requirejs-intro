
var App = {
    init: function() {
        console.log('App.init');
        ProductList.init();
    }
};

$(document).on('ready', function() {
    App.init();
});