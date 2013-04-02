window.Application = {};

/*** TV Finder Classes ***/

    /* TV Finder Collection */
    Application.FinderResults = Backbone.Collection.extend({
        url: 'data/televisions.json'
    });

    /* TV Finder Collection View */
    Application.FinderResultsView = Backbone.View.extend({
        initialize: function() {
            this.collection.originalModels = _.clone(this.collection.models);
            this.render();
            this.collection.on('reset', this.render, this);
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
            $('#matches').text(this.collection.length + ' MATCHES');
            return this;
        }
    });

    /* TV Finder Model View */
    Application.FinderModelView = Backbone.View.extend({

        render: function() {
            var context = this.model ? this.model.attributes : {},
                output = this.options.template(context);
            this.$el.html(output);
            return this;
        }
    });

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
            prodResponse.sellers = response[0].sellers;
            prodResponse.imagePostCardURL = response[0].imagePostCardURL;
            prodResponse.cartItemQty = 0;
            return prodResponse;
        }
    });

    /* Product Model Views */
    Application.ProdIntroView = Backbone.View.extend({
        className: 'product',

        initialize: function(){
            this.model.on('reset', this.render, this);              // fetch() triggers a reset
        },
        render: function() {
            var context = this.model ? this.model.attributes : {},
                output = this.options.template(context);
            this.$el.html(output);
            return this;
        }
    });
    Application.ProdDetailsView = Backbone.View.extend({
        className: 'details',

        initialize: function(){
            this.model.on('reset', this.render, this);              // fetch() triggers a reset
        },
        render: function() {
            var context = this.model ? this.model.attributes : {},
                output = this.options.template(context);
            this.$el.html(output);
            return this;
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
            $("#age-label select").attr('id', 'age-selector');

            this.on("change:filterAge", this.filterByAge, this);
            this.collection.on('reset', this.render, this);
        },

        addView: function(reviewModel) {
            var modelView = new Application.ModelView({
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
                html: "<option value='all'>All Ages</option>"
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
            this.trigger("change:filterAge");
        },

        /* Filter by Age */
        filterByAge: function () {
            var loadViews;
            if (this.filterAge === "all") {
                loadViews = this.collection.reset(this.collection.originalModels);
            } else {
                loadViews = this.collection.reset(this.collection.originalModels, {silent: true});
                var filterAge = this.filterAge,
                    filtered = _.filter(this.collection.models, function (item) {
                        return item.get("age") == filterAge;
                    });

                this.collection.reset(filtered);
            }
        }
    });

    /* Review Model View */
    Application.ModelView = Backbone.View.extend({
        initialize: function(){
            /* Create new attribute 'reviewDate' to sort by review date */
            var reviewDateObj = new Date(this.model.get('date'));
            this.model.set('reviewDate', reviewDateObj.getTime());      // date in milliseconds
        },

        render: function() {
            var context = this.model ? this.model.attributes : {},
                output = this.options.template(context);
            this.$el.html(output);
            return this;
        }
    });

/*** Cart Classes ***/
    Application.CartItemModel = Application.Product.extend({
    });

    /* Cart Item Collection */
    Application.CartItems = Backbone.Collection.extend({
        model: Application.CartItemModel
    });

    Application.CartItemModelView = Backbone.View.extend({
        render: function() {
            var context = this.model ? this.model.attributes : {},
                output = this.options.template(context);
            this.$el.html(output);
            return this;
        }
    });

    /* Cart Item Collection view */
    Application.CartItemsView = Backbone.View.extend({
        initialize: function() {
            this.render();
            this.collection.on('reset', this.render, this);
            this.collection.on('add', this.render, this);
            this.collection.on('remove', this.render, this);
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
            this.$el.prepend('<h3><img class="triangle" src="" alt=""><a href="/"><span class="item-count">' + this.sumItemQty() + ' Items</span> for Purchase</a></h3>');
            console.log('subtotal = $', this.subTotal());
            return this;
        },
        sumItemQty: function(){
            return _.reduce(this.collection.pluck("cartItemQty"), function(memo, num){ return memo + parseInt(num); }, 0);
        },
        subTotal: function(){
            return _.reduce(this.collection.pluck("sellers.0.currentItemPrice"), function(memo, num){ return memo + parseInt(num); }, 0);
        }
    });

    Application.SavedItemsView = Application.CartItemsView.extend({
       render: function(){
           this.$el.html('');
           this.collection.each(this.addView, this);
           this.$el.prepend('<h3><img class="triangle" src="" alt=""><a href="/"><span class="item-count">' + this.sumItemQty() + ' Saved Items</span></a></h3>');
           return this;
       }
    });

/*** Code to run at "DOM ready" ***/
$(function() {
    /** Render TV Size Slider ***/
    $( "#size-slider" ).slider({
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

    /*** TV Finder ***/
    var finderResultsView,
        finderResults = new Application.FinderResults(),
        loadFinderResults = finderResults.fetch();

    loadFinderResults.done(function(){
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
        savedItems = new Application.CartItems(),
        cartItemsView,
        savedItemsView;


    /* On TVFinder page, click on a product link: show product panel and panel backdrop */
    $('#search-results').on('click', '.url', function(e){
        e.preventDefault();
        product = $(e.currentTarget).attr('href');      // URL of the product link
        productRating = finderResults.findWhere({url: product}).get('rating');  // Get rating from TV Finder (to put on Product Panel) *
        product = product.match(/\d{8}$/);              // ID of the product
        tv = new Application.Product( {id: product} );
        loadTV = tv.fetch();
        loadTV.done(function(){
            tv.set({rating: productRating});                                    // * Set rating at top of Product Panel
            tvIntroView = new Application.ProdIntroView({
                model: tv,
                template: Handlebars.templates['prod_intro']
            });
            tvDetailsView = new Application.ProdDetailsView({
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
            thisItem.set({ cartItemQty: qtyToAdd});                // Use quantity the user selected on Product Panel
            cartItems.unshift(thisItem);
            cartItems.trigger('add');
            console.log('# cartItems after adding: ', cartItems.length);
            if (!cartItemsView) {
                cartItemsView = new Application.CartItemsView({ collection: cartItems, className: 'order-items' });
                $('#order').append(cartItemsView.el);
            }
        });

        // click close link: panel and backdrop disappear
        $('.close-panel').click(function(e){
            e.preventDefault();
            $('.panel-backdrop').fadeOut('slow', function(){
                $("#age-selector").remove();
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
            console.log( 'Got the id: ', temp_id );
            console.log( 'Found a match: ', thisItem );

            console.log('# savedItems before saving: ', savedItems.length);
            savedItems.unshift( thisItem );
            savedItems.trigger('add');
            console.log('# savedItems after adding: ', savedItems.length);

            if (!savedItemsView) {
                savedItemsView = new Application.SavedItemsView({ collection: savedItems, className: 'saved-items' });
                $('#saved').append(savedItemsView.el);
            }
           console.log('# cartItems before removing: ', cartItems.length);
           cartItems.remove(temp_id);
           console.log('# cartItems after removing: ', cartItems.length);

       });

        // click a Saved item's Move to Cart button
        $('#page-content').on('click', '.move-item', function(e){
            var temp_id = $(e.currentTarget).attr('data-id'),
                thisItem = savedItems.get({ id: temp_id} );
            console.log( 'Got the id: ', temp_id );
            console.log( 'Found a match: ', thisItem );

            console.log('# cartItems before moving: ', cartItems.length);
            cartItems.unshift( thisItem );
            cartItems.trigger('add');
            console.log('# cartItems after moving: ', cartItems.length);

            console.log('# savedItems before removing: ', savedItems.length);
            savedItems.remove(temp_id);
            console.log('# savedItems after removing: ', savedItems.length);

        });
        // click a Cart item's Remove button
        $('#page-content').on('click', '#order .remove-item', function(e){
            var temp_id = $(e.currentTarget).attr('data-id'),
                thisItem = cartItems.get({ id: temp_id} );
            console.log('# cartItems before removing: ', cartItems.length);
            cartItems.remove(temp_id);
            console.log('# cartItems after removing: ', cartItems.length);
        });

        // click a Saved item's Remove button
        $('#page-content').on('click', '#saved .remove-item', function(e){
            var temp_id = $(e.currentTarget).attr('data-id'),
                thisItem = savedItems.get({ id: temp_id} );
            console.log('# savedItems before removing: ', savedItems.length);
            savedItems.remove(temp_id);
            console.log('# savedItems after removing: ', savedItems.length);
        });

    /* On Cart, click close-cart link: cart and backdrop disappear */
    $('.close-cart').click(function(e){
        e.preventDefault();
        $('.cart-backdrop').fadeOut('slow', function(){
            if (cartItemsView){
                //cartItemsView.remove();
                //savedItemsView.remove();
                console.log('You have items...Yay!')
            }
            else {
                console.log('No items on cart yet');
            }
        });
    });

    $('#sort').on('change', function(){
        reviewsView.reSort($('#sort').val());
        $('#review-carousel').delay(100).carousel(0);
        $('#review-carousel .item:first-child').addClass('active');
    });
});

