Handlebars.registerHelper('cleanup', function(content){
    content = content.replace(/(<([^>]+)>)/ig, '');
    content = content.replace('Â', '');
    return content;
});


Handlebars.registerHelper('make_indicators', function(items){
    var out = '';
    for (var i = 0, l = items.length; i < l; i++) {
        out = out + '<li data-target="#prod-carousel" data-slide-to="' + i + '"></li>';
    }
    return out;
});