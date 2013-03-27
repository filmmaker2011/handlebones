window.Application = {};

/*** TV Finder Classes ***/
Application.FinderResults = Backbone.Collection.extend({
    url: 'data/televisions.json'
});

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
    initialize: function(){
        // Create new attributes for rating star widths (used in the ratings template)
        this.model.set({
            'aw': Math.round(this.model.attributes['rating'] * 20)
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
    var finderResultsView,
        finderResults = new Application.FinderResults(),
        loadFinderResults = finderResults.fetch();

    loadFinderResults.done(function(){
        finderResultsView = new Application.FinderResultsView({ collection: finderResults});
        $('#search-results').append(finderResultsView.el);
    });
})

