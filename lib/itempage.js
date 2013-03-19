/**
 * Created with JetBrains WebStorm.
 * User: s0whyte
 * Date: 3/16/13
 * Time: 12:50 PM
 * To change this template use File | Settings | File Templates.
 */

window.Application = {};

Application.Reviews = Backbone.Collection.extend({
    url: 'ratingsReviews.json'
});

Application.ReviewsView = Backbone.View.extend({

    initialize: function() {
        this.render()
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
    reSort: function(sortVal){
        this.collection.comparator = sortVal;
        this.collection.sort();
        this.$el.html('');
        this.render();
    },

    /* Create Age Filter <select> element based on age values in the models */
    getAges: function () {
        return _.uniq(this.collection.pluck("age"));
    },
    createSelect: function () {
        select = $("<select/>", {
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
                        console.log(item.attributes,filterAge, item.get("age") == filterAge);
                        return item.get("age") == filterAge;
                    });

                this.collection.reset(filtered);
                console.log('Models after Age filter: ' , this.collection.length);
        }
    }
});

Application.ModelView = Backbone.View.extend({
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


$(function() {
    var reviewsView,
        reviews = new Application.Reviews(),
        loadReviews = reviews.fetch();

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
