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
           // $("#age-label").append(this.createSelect());
           // this.on("change:filterAge", this.filterByAge, this);
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
    var reviewsControlsView,
        reviewsView,
        reviews = new Application.Reviews(),
        loadReviews = reviews.fetch(),

        tvIntroView,
        tvDetailsView,
        tv,
        loadTV,
        product,
        productRating,

        backdrop = '<div class="panel-backdrop"></div>';

    /* Click on product link: show panel and panel backdrop */
    $('#search-results').on('click', '.url', function(e){
        e.preventDefault();
        product = $(e.currentTarget).attr('href');      // URL of the product link
        productRating = finderResults.findWhere({url: product}).get('rating');  // Get rating from TV Finder (to put on Product Panel) *
        product = product.match(/\d{8}$/);              // ID of the product
        tv = new Application.Product( {id: product} );
        loadTV = tv.fetch();
        loadTV.done(function(){
            tv.set({rating: productRating});                                    // * Set rating for Product Panel
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
            $('.page-content').prepend(backdrop);
            $('.panel-backdrop, .panel').fadeIn('slow');
        });

    });
    /* Click close button:  panel and backdrop disappear */
    $('.close-panel').click(function(){
        $("#age-selector").remove();
        $('.panel-backdrop, .panel').fadeOut('slow', function(){
            $('.panel-backdrop').detach();
        });
        tvIntroView.remove();
        tvDetailsView.remove();
        reviewsView.remove();
    });

    $('#sort').on('change', function(){
        reviewsView.reSort($('#sort').val());
        $('#review-carousel').delay(100).carousel(0);
        $('#review-carousel .item:first-child').addClass('active');
    });
});

