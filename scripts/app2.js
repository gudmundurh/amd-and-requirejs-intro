require.config({    
    shim: {
        'lib/jquery-2.1.0': {exports: 'jQuery'},
        'lib/underscore': {exports: '_'}
    }    
});

define(['ProductList'], function (ProductList) {
    var App = {
        init: function() {
            console.log('App.init');
            ProductList.init();
        }
    };

    //$(function() {
        App.init();
    //});
});