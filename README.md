#Release Notes
Last Updated: 3/26/2013

##Clone It & Use It:
1. git clone https://github.com/filmmaker2011/handlebones.git
2. Start a web server. On a Mac:

- cd handlebones
- python -m SimpleHTTPServer

##Assignment 2 - Product Page:

_URL: [http://localhost:8000/itempage.html](http://localhost:8000/itempage.html)_

_What's done:_
- Models and views for product data and review data.
- Product data is fetched for one, hardcoded item id.
- Image carousel and reviews carousel (based on Bootstrap.js code).
- Image carousel: Handlebars helpers generate position indicator dots and calculate with of indicator widget (for CSS centering).
- Product Details tabs (based on Bootstrap.js code).
- Product description: a Handlebars helper (cleanup) removes the HTML tags from the text.
- Reviews: filter by age, sort (ascending & descending).
- Reviews: a Handlebars helper calculates the width of rating stars widgets
- Web fonts are used. Logos use actual text.

_Not done:_
- Overlay and integration with Assignment 1.
- Views for 'People who viewed this also viewed'.
- Web storage.
- Reviews: gender and ratings filters.

##Assignment 1 - TV Finder:

_URL: [http://localhost:8000/](http://localhost:8000/)_

_What's done:_
- Layout was widened to proper width.
- It now displays all 100 products.

_Not done:_
- Filtering of product results.
