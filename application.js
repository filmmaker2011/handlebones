window.Application = {};

Application.View = Backbone.View.extend({
  render: function() {
    var context = this.model ? this.model.attributes : {},
        output = this.options.template(context);
    this.$el.html(output);
  }
});

var Product = Backbone.Model.extend({
    defaults: {
        image: "http://i.walmartimages.com/i/p/00/84/52/26/00/0084522600507_180X180.jpg",
        url: 'http://www.walmart.com/ip/Vizio-42-E3D420VX/15992330',
        name: 'VIZIO 42" Class Theater 3D LCD HDTV with VIZIO Internet Apps 1080p 120Hz, E3D420VX',
        price: 598,
        rating: 4.738
    }
}),
    ProductView = Backbone.View.extend({
//        template: Handlebars.templates['index']
        render: function(){
            var html = '<p>{{name}}</p> <p>{{image}}</p> <p>{{price}}</p>';
            this.$el.html(html;)
        }
    });

$(function() {
  var product = new Product();
    productView = new ProductView(
        { model: 'product' }
    );
  productView.render();
  $('.search-results').append(productView.el);
});
