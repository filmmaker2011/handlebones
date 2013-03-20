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
        url: '/data/item-data/item-15105450.json'
    });

    Application.ProductsView = Backbone.View.extend({
        initialize: function() {
            this.render();
            this.collection.on('reset', this.render, this);
        },

        addView: function(model) {
            var modelView = new Application.ProdModelView({
                model: model,
                template: Handlebars.templates['tv'],
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
        comparator: function(reviewModel) {
            var str = reviewModel.get("date");
            str = str.toLowerCase();
            str = str.split("");
            str = _.map(str, function(letter) {
                return String.fromCharCode(-(letter.charCodeAt(0)));
            });
            return str;
        },
        initialize: function() {
            this.render();
            $("#age-label").append(this.createSelect());
            this.on("change:filterAge", this.filterByAge, this);
            this.collection.on('reset', this.render, this);
        },

        addView: function(reviewModel) {
            var modelView = new Application.ModelView({
                model: reviewModel,
                template: Handlebars.templates['index'],
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
                        return -reviewModel.get('helpfulvotes');    // minus sign (-) does descending order
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
        initialize: function(){
            /* Create new attribute 'reviewDate' to sort by review date */
            var reviewDateObj = new Date(this.model.get('date'));
            this.model.attributes['reviewDate'] = reviewDateObj.getTime();  // date in milliseconds
        },
        render: function() {
            // Calculate star width for ratings
            this.model.attributes['aw'] = this.model.attributes['rating'] * 20;
            this.model.attributes['vw'] = this.model.attributes['value'] * 20;
            this.model.attributes['mew'] = this.model.attributes['meetsexpectations'] * 20;
            this.model.attributes['pqw'] = this.model.attributes['picturequality'] * 20;
            this.model.attributes['sqw'] = this.model.attributes['soundquality'] * 20;
            this.model.attributes['fw'] = this.model.attributes['features'] * 20;
            var context = this.model ? this.model.attributes : {},
                output = this.options.template(context);
            this.$el.html(output);
            return this;
        }
    });

/*** Code to run at "DOM ready" ***/
$(function() {
    var tvsView,
        tvs = new Application.Products,
        loadTVs = tvs.fetch();
    var reviewsView,
        reviews = new Application.Reviews(),
        loadReviews = reviews.fetch();

    loadTVs.done(function(){
        //console.log(tvs.at(0).attributes.genericContent.itemName);
        console.log(tvs.length);
        tvsView = new Application.ProductsView({ collection: tvs});

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

})
