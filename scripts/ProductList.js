define(['lib/jquery-2.1.0', 'lib/underscore', 'lib/text!ProductList.html'], function($, _, templateHtml) {
    return {
        init: function() {
            console.log('ProductList.init');

            this.products = [
                { name: 'Haframjöl' },
                { name: 'Lífrænt haframjöl' },
                { name: 'Gróft haframjöl' },
                { name: 'Gróft lífrænt haframjöl' }
            ];

            this.template = _.template(templateHtml);

            this.render();
        },

        render: function () {
            $('body').append(this.template(this));
        }
    };
});