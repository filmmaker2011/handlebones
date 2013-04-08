window.Application = {};

/*** Base View Class ***/
Application.View = Backbone.View.extend({
    render: function() {
        this.$el.html('');
        var context = this.model ? this.model.attributes : {},
            output = this.options.template(context);
        this.$el.html(output);
        return this;
    }
});

/*** TV Finder Classes ***/

    /* TV Finder Collection */
    Application.FinderResults = Backbone.Collection.extend({
        url: 'data/televisions.json'
    });

    /* Filter View (extended by FinderFilterView & ReviewFilterView) */
    Application.FilterView = Backbone.View.extend({
        initialize: function() {
            console.log('Im in FilterView');
            this.collection.originalModels = _.clone(this.collection.models);
            this.listenTo(this, 'change:filter', this.filterResults);
            this.listenTo(this.collection, 'reset', this.updateMatches);
        },

        setFilter: function (e) {
            this.filter = e.currentTarget.value;
            this.selector = e.currentTarget.id;
            console.log('selector id:', this.selector);
            this.trigger("change:filter", this.selector);
        },

        filterResults: function (selector) {
            console.log('in filterResults, selector: ', selector);
            if (this.filter === "All") {
                this.collection.reset(this.collection.originalModels);
            } else {
                //  this.collection.reset(this.collection.originalModels, {silent: true});
                var filter = this.filter,
                    filtered = _.filter(this.collection.models, function (item) {
                        return item.get(selector) === filter;
                    });

                this.collection.reset(filtered);
            }
        },

        render: function(){
            this.$el.html('');
            var context = {},
                output = this.options.template(context);
            this.$el.html(output);
            this.updateMatches();
            return this;
        },

        updateMatches: function() {
            this.$el.find('.matches').text(this.collection.length + ' MATCHES');
        }
    });

    /* TV Finder Filters View */
    Application.FinderFilterView = Application.FilterView.extend({
        el: '#finder-filters',

        events: {
            'change #type': 'setFilter',
            'change #brand': 'setFilter',
            'change #sort-on': 'finderSort',
            'click #clear-filters': 'resetCollection'
        },

        resetCollection: function() {
            this.collection.reset(this.collection.originalModels);
        },

        finderSort: function() {
            var sortVal = $('#sort-on').val();
             //   model = this.collection.model;
            this.collection.comparator = function(model) {
                switch(sortVal) {
                    case 'pricehigh':
                        // Price High to Low
                        return -model.get('price');
                        break;
                    case 'price':
                        // Price Low to High
                        return model.get('price');
                        break;
                    case 'rating':
                        // Rating High to Low
                        return -model.get('rating');
                        break;
                    case 'ratinglow':
                        // Rating Low to High
                        return model.get('rating');
                        break;
                }
            };
            this.collection.sort();
            this.collection.trigger('nowSorted');
        },

        // Render TV Size Slider
        showSizeSlider: function() {
            $("#size-slider").slider({
                range: true,
                min: 0,
                max: 77,
                values: [ 25, 50 ],
                slide: function( event, ui ) {
                    $( '#size' ).val( ui.values[ 0 ] + '" - ' + ui.values[ 1 ] + '"' );
                }
            });
            $( '#size' ).val( $( '#size-slider' ).slider( 'values', 0 ) +
                '" - ' + $( '#size-slider' ).slider( 'values', 1 ) + '"' );
        }
    });

    /* TV Finder Collection View */
    Application.FinderResultsView = Backbone.View.extend({
        initialize: function() {
         //   this.collection.originalModels = _.clone(this.collection.models);
            this.render();
            this.listenTo(this.collection, 'reset', this.render);
            this.listenTo(this.collection, 'nowSorted', this.render);
        },

        addView: function(model) {
            var modelView = new Application.FinderModelView({
                model: model,
                template: Handlebars.templates['index'],
                tagName: 'article',
                className: 'product'
            });
            this.$el.append(modelView.render().el);
            return this;
        },

        render: function(){
            this.$el.html('');
            this.collection.each(this.addView, this);
/*            $('#matches').text(this.collection.length + ' MATCHES');  */
            return this;
        }
    });

    /* TV Finder Model View */
    Application.FinderModelView = Application.View;

/*** Product Classes ***/

    /* Product Model */
    Application.Product = Backbone.Model.extend({
        urlRoot: '/data/product-detail',

        parse: function(response) {
            var prodResponse = {};

            prodResponse.genericContent = response[0].genericContent;
            prodResponse.alternateImageData = response[0].alternateImageData;
            prodResponse.customerRatingUrl = response[0].customerRatingUrl;
            prodResponse.itemAttributes = response[0].itemAttributes;
            prodResponse.currentItemPrice = response[0].sellers[0].currentItemPrice;
            prodResponse.baseSuggPrice = response[0].sellers[0].baseSuggPrice;
            prodResponse.imagePostCardURL = response[0].imagePostCardURL;
            prodResponse.cartItemQty = 0;
            return prodResponse;
        }
    });

    /* Product Model Views */
    Application.ProdModelView = Application.View.extend({
        initialize: function(){
            this.listenTo(this.model, 'reset', this.render);              // fetch() triggers a reset
        }
    });


/*** Review Classes ***/

    /* Reviews Collection */
    Application.Reviews = Backbone.Collection.extend({
        url: 'data/ratingsReviews.json'
    });

    /* Reviews Collection View */
    Application.ReviewsView = Backbone.View.extend({
        initialize: function() {
            this.collection.originalModels = _.clone(this.collection.models);
            this.render();
            $("#age-label").append(this.createSelect());    // create age filter
            $("#age-label select").attr('id', 'age');
            this.listenTo(this, 'change:filter', this.filterResults);
            this.listenTo(this.collection, 'reset', this.render);
        },

        events: {
            'change #gender': 'setFilter',
            'change #age': 'setFilter',
            'change #rating': 'setFilter'
        },

        addView: function(reviewModel) {
            var modelView = new Application.ReviewModelView({
                model: reviewModel,
                template: Handlebars.templates['reviews'],
                tagName: 'article',
                className: 'item review'
            });
            this.$el.append(modelView.render().el);
            return this;
        },

        render: function(){
            this.$el.html('');
            this.collection.each(this.addView, this);
            $('#total-reviews').text('(' + this.collection.length + ' Total)');
            return this;
        },

        /* Sort Reviews */
        reSort: function(sortVal){
            this.collection.comparator = function(reviewModel) {
                switch(sortVal) {
                    case 'helpful':
                        // Most helpful to least helpful
                        return -reviewModel.get('helpfulvotes');    // minus sign (-) sets descending order
                        break;
                    case 'newest':
                        // Newest to Oldest
                        return -reviewModel.get('reviewDate');
                        break;
                    case 'oldest':
                        // Oldest to Newest
                        return reviewModel.get('reviewDate');
                        break;
                    case 'high':
                        // Rating High to Low
                        return -reviewModel.get('rating');
                        break;
                    case 'low':
                        // Rating Low to High
                        return reviewModel.get('rating');
                        break;
                }
            };
            this.collection.sort();
            this.render();
        },

        /* Get age values from models */
        getAges: function () {
            return _.uniq(this.collection.pluck("age").sort());     // JavaScript's sort() puts them in order
        },

        /* Create Age Filter <select> element based on age values in the models */
        createSelect: function () {
            var select = $("<select/>", {
                html: "<option value='All'>All Ages</option>"
            });

            _.each(this.getAges(), function (item) {
                $("<option/>", {
                    value: item,
                    text: item
                }).appendTo(select);
            });
            return select;
        },

        /* Set filterAge property and a fire change event */
        setFilter: function (e) {
            this.filterAge = e.currentTarget.value;
            this.selector = e.currentTarget.id;
            this.trigger("change:filter", this.selector);
        },

        /* Filter by Age */
        filterResults: function (selector) {
            var loadViews;
            if (this.filterAge === "All") {
                loadViews = this.collection.reset(this.collection.originalModels);
            } else {
                loadViews = this.collection.reset(this.collection.originalModels, {silent: true});
                var filterAge = this.filterAge,
                    filtered = _.filter(this.collection.models, function (item) {
                        return item.get(selector) == filterAge;
                    });

                this.collection.reset(filtered);
            }
        }
    });

    /* Review Model View */
    Application.ReviewModelView = Application.View.extend({
        initialize: function(){
            /* Create new attribute 'reviewDate' to sort by review date */
            var reviewDateObj = new Date(this.model.get('date'));
            this.model.set('reviewDate', reviewDateObj.getTime());      // date in milliseconds
        }
    });

/*** Cart Classes ***/
    Application.CartItemModel = Application.Product.extend({
        defaults: {
            cartItemQty: 0,
            isInCart: false
        }
    });

    /* Cart Item Collection */
    Application.CartItems = Backbone.Collection.extend({
        model: Application.CartItemModel
    });

    Application.CartItemModelView = Application.View;

    /* Cart Item Collection view */
    Application.CartItemsView = Backbone.View.extend({
        initialize: function() {
            this.render();
            this.listenTo(this.collection, 'reset', this.render);
            this.listenTo(this.collection, 'add', this.render);
            this.listenTo(this.collection, 'remove', this.render);
        },

        addView: function(model) {
            var modelView = new Application.CartItemModelView({
                model: model,
                template: Handlebars.templates['cart_item'],
                tagName: 'article',
                className: 'cart-item'
            });
            this.$el.append(modelView.render().el);
            return this;
        },

        render: function(){
            this.$el.html('');
            this.collection.each(this.addView, this);
            console.log('subtotal = $', this.subTotal());
            return this;
        },

        subTotal: function(){
            var price = this.collection.pluck('currentItemPrice'),
                qty = this.collection.pluck('cartItemQty'),
                ttl = 0;
            for (var i = 0, l = qty.length; i < l; i++) {
                ttl += price[i] * qty[i];
            }
            return ttl;
        }
    });

    Application.CartSectionView = Backbone.View.extend({
        initialize: function() {
            this.listenTo(this.collection, 'reset', this.render);
            this.listenTo(this.collection, 'add', this.render);
            this.listenTo(this.collection, 'remove', this.render);
        },

        sumItemQty: function(){
            return _.reduce(this.collection.pluck("cartItemQty"), function(memo, qty){ return memo + parseInt(qty, 10); }, 0);
        },

        render: function(){
            this.$el.html('');
            var context = this.sumItemQty(),
                output = this.options.template({itemCount: context});
            this.$el.html(output);
            return this;
        }
    });


/*** Code to run at "DOM ready" ***/
$(function() {

    /*** TV Finder ***/
    var finderFilterView,
        finderResultsView,
        finderResults = new Application.FinderResults(),
        loadFinderResults = finderResults.fetch();

    loadFinderResults.done(function(){
        finderFilterView = new Application.FinderFilterView({ collection: finderResults, template: Handlebars.templates['finder_filters'] });
        finderFilterView.render();
        finderFilterView.showSizeSlider();
        finderResultsView = new Application.FinderResultsView({ collection: finderResults});
        $('#search-results').append(finderResultsView.el);
    });

    /*** Product Panel ***/
    var tv,
        tvIntroView,
        tvDetailsView,
        loadTV,
        product,
        productRating,
        qtyToAdd = 0,

        reviewsView,
        reviews,
        loadReviews;

    /*** Cart ***/
    var cartItems  = new Application.CartItems(),
        cartSectionView = new Application.CartSectionView({collection: cartItems, template: Handlebars.templates['cart_section_header'] }),
        cartItemsView,
        savedItems = new Application.CartItems(),
        savedSectionView = new Application.CartSectionView({collection: savedItems, template: Handlebars.templates['saved_section_header'] }),
        savedItemsView;


    /* On TVFinder page, click on a product link: show product panel and panel backdrop */
    $('#search-results').on('click', '.url', function(e){
        e.preventDefault();
        console.log($(e.currentTarget).attr('href'));
        product = $(e.currentTarget).attr('href');      // URL of the product link
        productRating = finderResults.where({url: product})[0].get('rating');  // Get rating from TV Finder (to put on Product Panel) *
        product = product.match(/\d{8}$/);              // ID of the product
        tv = new Application.Product( {id: product} );
        loadTV = tv.fetch();
        loadTV.done(function(){
            tv.set({rating: productRating});                                    // * Set rating at top of Product Panel
            tvIntroView = new Application.ProdModelView({
                className: 'product',
                model: tv,
                template: Handlebars.templates['prod_intro']
            });
            tvDetailsView = new Application.ProdModelView({
                className: 'details',
                model: tv,
                template: Handlebars.templates['prod_details']
            });
            $('#prod-intro').append(tvIntroView.render().el);
            $('#prod-details').append(tvDetailsView.render().el);
            $('#prod-carousel').carousel({ interval: false });
            $('#prod-carousel .item:first-child, #prod-carousel .carousel-indicators li:first-child').addClass('active');

            reviews = new Application.Reviews();
            loadReviews = reviews.fetch();
            loadReviews.done(function(){
                reviewsView = new Application.ReviewsView({ collection: reviews, className: 'carousel-inner' });
                $('#review-carousel').append(reviewsView.el);
                $('#review-carousel').carousel({ interval: false });
                $('#review-carousel .item:first-child').addClass('active');
                $('#age-label select').on('change', function(e){
                    reviewsView.setFilter(e);
                    $('#review-carousel').carousel({ interval: false });
                    $('#review-carousel .item:first-child').addClass('active');
                });
            });
            $('.panel-backdrop').fadeIn('slow');
        });
    });

    /* On Product Panel */
        // select a quantity to be added to cart
        $('#page-content').on('change', '.buying-options .qty', function(e){
            qtyToAdd = e.currentTarget.value;
            console.log('qtyToAdd = ', qtyToAdd);
        });

        // click 'Add to Cart': add this product to cart */
        $('#page-content').on('click', '#add-to-cart', function(){
            console.log('# cartItems before adding: ', cartItems.length);
            var thisItem = tv.clone();
            thisItem.set({ cartItemQty: qtyToAdd});         // Use quantity the user selected on Product Panel
            thisItem.set({ isInCart: true });               // Flag this item as 'on the cart' (to adjust the template appropriately)
            cartItems.unshift(thisItem);
            cartItems.trigger('add');
            console.log('# cartItems after adding: ', cartItems.length);
            if (!cartItemsView) {
                $('#order').append(cartSectionView.el);
                cartItemsView = new Application.CartItemsView({ collection: cartItems, className: 'order-items' });
                $('#order').append(cartItemsView.el);
            }
        });

        // click close link: panel and backdrop disappear
        $('.close-panel').click(function(e){
            e.preventDefault();
            $('.panel-backdrop').fadeOut('slow', function(){
                $("#age").remove();
                tvIntroView.remove();
                tvDetailsView.remove();
                reviewsView.remove();
            });
        });

    /* On Top Nav, click cart link: backdrop and cart opens */
    $('#nav-buttons').on('click', '.open-cart', function(e){
        e.preventDefault();
        $('.cart-backdrop').fadeIn('slow');
    });

    /* On Cart */
        // click a Cart item's Save for Later button
       $('#page-content').on('click', '.save-item', function(e){
            var temp_id = $(e.currentTarget).attr('data-id'),
            thisItem = cartItems.get({ id: temp_id} );
            thisItem.set({ isInCart: false });                  // This is a 'saved' item (not 'on the cart')
            savedItems.unshift( thisItem );
            savedItems.trigger('add');

            if (!savedItemsView) {
                $('#saved').append(savedSectionView.el);
                savedItemsView = new Application.CartItemsView({ collection: savedItems, className: 'saved-items' });
                $('#saved').append(savedItemsView.el);
            }
           cartItems.remove(temp_id);

       });

        // click a Saved item's Move to Cart button
        $('#page-content').on('click', '.move-item', function(e){
            var temp_id = $(e.currentTarget).attr('data-id'),
                thisItem = savedItems.get({ id: temp_id} );

            thisItem.set({ isInCart: true });
            cartItems.unshift( thisItem );
            cartItems.trigger('add');

            savedItems.remove(temp_id);
        });

        // click a Cart item's Remove button
        $('#page-content').on('click', '#order .remove-item', function(e){
            var temp_id = $(e.currentTarget).attr('data-id'),
                thisItem = cartItems.get({ id: temp_id} );
            cartItems.remove(temp_id);
        });

        // click a Saved item's Remove button
        $('#page-content').on('click', '#saved .remove-item', function(e){
            var temp_id = $(e.currentTarget).attr('data-id'),
                thisItem = savedItems.get({ id: temp_id} );
            savedItems.remove(temp_id);
        });

    /* On Cart, click close-cart link: cart and backdrop disappear */
    $('.close-cart').click(function(e){
        e.preventDefault();
        $('.cart-backdrop').fadeOut('slow');
    });

    $('#sort').on('change', function(){
        reviewsView.reSort($('#sort').val());
        $('#review-carousel').delay(100).carousel(0);
        $('#review-carousel .item:first-child').addClass('active');
    });
});

