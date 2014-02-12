var ProductList = {
    init: function() {
        console.log('ProductList.init');

        this.products = [
            new Product('Haframjöl'),
            new Product('Gróft haframjöl'),
            new Product('Lífrænt haframjöl')
        ];

        this.render();
    },

    render: function () {
        $('body').append('<h2>Vörulínan</h2>');
        this.products.forEach(function(p) {
            $('body').append('<p>' + p.name + '</p>');
        });
    }
};

var Product = function(name) {
    this.name = name;
};