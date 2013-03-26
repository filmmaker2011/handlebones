/* Remove the HTML tags from content text */
Handlebars.registerHelper('cleanup', function(content){
    content = content.replace(/(<([^>]+)>)/ig, '');
    content = content.replace('Â', '');
    return content;
});

/* Calculate the width of the carousel position indicator (to center it properly) */
Handlebars.registerHelper('getIndicatorWidth', function(imageArray) {
    return imageArray.length * 24;              // Each positional dot uses 24px (12px width + 12px margin = 24px)
});

/* Calculate the width of rating stars */
Handlebars.registerHelper('getStarsWidth', function(ratingCategory) {
    return Math.round(ratingCategory * 20);     // Each rating star is 20 pixels wide
});