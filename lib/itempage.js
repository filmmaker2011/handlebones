/**
 * Created with JetBrains WebStorm.
 * User: s0whyte
 * Date: 3/16/13
 * Time: 12:50 PM
 * To change this template use File | Settings | File Templates.
 */

window.Application = {};

/*** Product Classes ***/
    Application.Products = Backbone.Collection.extend({
        url: '/data/products.json'
    });

    Application.ProductsView = Backbone.View.extend({
        initialize: function() {
            this.render();
            this.collection.on('reset', this.render, this);
        },

        addView: function(model) {
            var modelView = new Application.ProdModelView({
                model: model,
                template: Handlebars.templates['product'],
                tagName: 'article',
                className: 'product'
            });
            this.$el.append(modelView.render().el);
            return this;
        },

        render: function(){
            this.$el.html('');
            this.collection.each(this.addView, this);
            console.log('We just ran RENDER!');
            return this;
        }
    });

    Application.ProdModelView = Backbone.View.extend({
        initialize: function(){
            console.log('In ProductModelView: ', this.model.attributes.alternateImageData[0].lgImageSrc);
            var imageSource = this.model.attributes.alternateImageData[0].lgImageSrc;
            console.log('imageSource = ', imageSource);
            this.model.set({'imageSource': imageSource});
            this.model.set({'pw': Math.round(this.model.attributes.genericContent.rating * 20) });
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
        url: 'ratingsReviews.json'
    });

    Application.ReviewsView = Backbone.View.extend({
        initialize: function() {
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
                className: 'review'
            });
            this.$el.append(modelView.render().el);
            return this;
        },

        render: function(){
            this.$el.html('');
            this.collection.each(this.addView, this);
            $('#total-reviews').text('(' + this.collection.length + ' Total)');
            console.log('We just ran RENDER!');
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
                loadViews = this.collection.fetch();
            } else {
                loadViews = this.collection.fetch({silent: true});
                console.log('Models before Age filter: ', this.collection.length);
                    var filterAge = this.filterAge,
                        filtered = _.filter(this.collection.models, function (item) {
                        //    console.log(item.attributes,filterAge, item.get("age") == filterAge);
                            return item.get("age") == filterAge;
                        });

                    this.collection.reset(filtered);
                    console.log('Models after Age filter: ' , this.collection.length);
            }
        }
    });

    /* Model View for a Review */
    Application.ModelView = Backbone.View.extend({
        defaults: {
            'aw': 0, 'vw': 0, 'met': 0, 'pqw': 0, 'sqw': 0, 'fw': 0     // see initialize below
        },

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

        tvsView,
        tvs = new Application.Products,
        loadTVs = tvs.fetch();

    loadTVs.done(function(){
        tvsView = new Application.ProductsView({ collection: tvs});
        $('#product-wrapper').append(tvsView.el);
    });

    loadReviews.done(function(){
        reviewsView = new Application.ReviewsView({ collection: reviews});
        $('#ratings-reviews').append(reviewsView.el);
        $('#age-label select').on('change', function(e){
            reviewsView.setFilter(e);
        });
    });

    $('#sort').on('change', function(){
        reviewsView.reSort($('#sort').val());
    });

    $('#slider-code').tinycarousel();

})
