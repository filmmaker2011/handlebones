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
    $el: $('#carousel'),

    initialize: function() {
        _.bindAll(this, 'addView', 'render', 'reSort', 'getAges', 'createSelect', 'setFilter', 'filterByAge');
        $("#age-label").append(this.createSelect());
        this.on("change:filterAge", this.filterByAge, this);
        this.collection.on('reset', this.render, this);
    },
    events: {
        'change #age-label select': 'setFilter'     // set up handler for when Age filter changes
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
        this.collection.each(this.addView, this);
        $('#total-reviews').text('(' + this.collection.length + ' Total)');
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
        if (this.filterAge === "all") {
            this.collection.reset();
        } else {
            this.collection.reset({ silent: true });

            var filterAge = this.filterAge,
                filtered = _.filter(this.collection.models, function (item) {
                    return item.get("age") === filterAge;
                });

            this.collection.reset(filtered);
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

var reviewsView,
    reviews = new Application.Reviews();

$(function() {
    var loadReviews = reviews.fetch();

    loadReviews.done(function(){
        reviewsView = new Application.ReviewsView({ collection: reviews});
        $('#ratings-reviews').append(reviewsView.render().el);
    });

    $('#sort').on('change', function(){
        reviewsView.reSort($('#sort').val());
    });
})
