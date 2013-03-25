/**
 * Created with JetBrains WebStorm.
 * User: s0whyte
 * Date: 3/16/13
 * Time: 12:50 PM
 * To change this template use File | Settings | File Templates.
 */

window.Application = {};

/*** Product Classes ***/
    Application.Product = Backbone.Model.extend({
        urlRoot: '/data/product-detail',

        parse: function(response) {
            var prodResponse = {};

            prodResponse.genericContent = response[0].genericContent;
            prodResponse.alternateImageData = response[0].alternateImageData;
            prodResponse.customerRatingUrl = response[0].customerRatingUrl;
            prodResponse.itemAttributes = response[0].itemAttributes;
            prodResponse.sellers = response[0].sellers;
            /* calculate width of carousel indicator div */
            prodResponse.indicatorWidth = prodResponse.alternateImageData.length * 24;
            return prodResponse;
        }
    });

    Application.ProdIntroView = Backbone.View.extend({
        className: 'product',

        initialize: function(){
            this.model.on('reset', this.render, this);              // fetch() triggers a reset
            this.model.set({'pw': Math.round(this.model.attributes.genericContent.rating * 20) });
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
    Application.Reviews = Backbone.Collection.extend({
        url: 'data/ratingsReviews.json'
    });

    Application.ReviewsView = Backbone.View.extend({
        initialize: function() {
            this.collection.originalModels = _.clone(this.collection.models);
            this.render();
            $("#age-label").append(this.createSelect());
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
            console.log('Reviewer: ', modelView.model.get('customer'));
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
                };
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

    /* Model View for a Review */
    Application.ModelView = Backbone.View.extend({
        initialize: function(){
            /* Create new attribute 'reviewDate' to sort by review date */
            var reviewDateObj = new Date(this.model.get('date'));
            this.model.set('reviewDate', reviewDateObj.getTime());      // date in milliseconds

            // Create new attributes for rating star widths (used in the ratings template)
            this.model.set({
                'aw': Math.round(this.model.attributes['rating'] * 20),
                'vw': Math.round(this.model.attributes['value'] * 20),
                'mew': Math.round(this.model.attributes['meetsexpectations'] * 20),
                'pqw': Math.round(this.model.attributes['picturequality'] * 20),
                'sqw': Math.round(this.model.attributes['soundquality'] * 20),
                'fw': Math.round(this.model.attributes['features'] * 20)
            });
        },

        render: function() {
            var context = this.model ? this.model.attributes : {},
                output = this.options.template(context);
            this.$el.html(output);
            return this;
        }
    });

/*** Code to run at "DOM ready" ***/
$(function() {
    var reviewsView,
        reviews = new Application.Reviews(),
        loadReviews = reviews.fetch(),

        tvIntroView,
        tvDetailsView,
        tv = new Application.Product( {id: '15105450'} ),
        loadTV = tv.fetch();

    loadTV.done(function(){
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
    });

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
    $('#sort').on('change', function(){
        reviewsView.reSort($('#sort').val());
        $('#review-carousel').delay(100).carousel(0);
        $('#review-carousel .item:first-child').addClass('active');
    });

})
