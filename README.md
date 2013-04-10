#Release Notes
Last Updated: 4/9/2013

##Clone It & Use It:
1. git clone https://github.com/filmmaker2011/handlebones.git
2. Start a web server. On a Mac:

- cd handlebones
- python -m SimpleHTTPServer

##Assignment 3 - Cart

_Cart: [http://localhost:8000/cart.html](http://localhost:8000/cart.html)_

_What's done:_
- Cart is integrated with TV Finder and Product Panel
- On Product panel, you can add to cart
- On the cart, you can Save for Later, Move to Cart, and Remove items
- Totals of Items for Purchase and Saved Items
- If you close the cart, you can reopen it and still see your Purchase items & Saved items
- 4/9 Update: cart item quantity in header now updates when you add items to the Cart

_Not done:_
- Total items in cart & sort of cart items
- Updating a Purchase item quantity when you type in a different quantity
- Subtotal at bottom of cart
- Order confirmation page

##Assignment 2 - Product Page:

_Full Product Page URL: [http://localhost:8000/itempage.html](http://localhost:8000/itempage.html)_

_TV Finder with Panel: [http://localhost:8000/index_p.html](http://localhost:8000/index_p.html)_

_What's done:_
- Models and views for product data and review data.
- Overlay and integration with Assignment 1.
- Image carousel and reviews carousel (based on Bootstrap.js code).
- Image carousel: Handlebars helpers generate position indicator dots and calculate with of indicator widget (for CSS centering).
- Product Details tabs (based on Bootstrap.js code).
- Product description: a Handlebars helper (cleanup) removes the HTML tags from the text.
- Reviews: filter by Age, sort (ascending & descending).
- Reviews: a Handlebars helper calculates the width of rating stars widgets
- Web fonts are used. Logos use actual text.
- 4/8 Update, Reviews: added Gender & Rating filters

_Not done:_
- Views for 'People who viewed this also viewed'.
- Web storage.

##Assignment 1 - TV Finder:

_URL: [http://localhost:8000/](http://localhost:8000/)_

_What's done:_
- Layout was widened to proper width.
- It now displays all 100 products.
- 4/7 Update: Type filter & Brand filter
- 4/7 Update: Sort by Price or Rating
- 4/7 Update: Clear Filters button
- 4/9 Update: TV size filter (slider)

_Not done:_
- N.A.
