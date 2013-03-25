(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\"></a>\n<h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n<ul class=\"descrip\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</ul>\n<p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n<div class=\"rating\" title=\"";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " stars\"><div class=\"stars\" style=\"width:";
  if (stack1 = helpers.aw) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.aw; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>";
  return buffer;
  });
templates['prod_details'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                            <tr>\n                                <td>"
    + escapeExpression(((stack1 = depth0.attributeName),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                                <td>"
    + escapeExpression(((stack1 = depth0.attributeValue),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                            </tr>\n                        ";
  return buffer;
  }

  buffer += "    <header class=\"clearfix\">\n        <h2>Product Details</h2>\n        <button class=\"have-question\">Have a Question?</button>\n    </header>\n\n        <div class=\"tabbable tabs-left\">\n            <ul class=\"nav nav-tabs\">\n                <li class=\"active\"><a href=\"#tab1\" data-toggle=\"tab\">Full Description</a></li>\n                <li><a href=\"#tab2\" data-toggle=\"tab\">Specifications</a></li>\n                <li><a href=\"#tab3\" data-toggle=\"tab\">Warranty</a></li>\n                <li><a href=\"#tab4\" data-toggle=\"tab\">Financing</a></li>\n                <li><a href=\"#tab5\" data-toggle=\"tab\">Gifting</a></li>\n            </ul>\n\n            <div class=\"tab-content\">\n                <section class=\"tab-pane active short-desc\" id=\"tab1\">\n                    "
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.shortDescription)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                </section>\n\n                <section class=\"tab-pane\" id=\"tab2\">\n                    <table class=\"table table-striped table-condensed\">\n                        ";
  stack2 = helpers.each.call(depth0, depth0.itemAttributes, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n                    </table>\n                </section>\n\n                <section class=\"tab-pane\" id=\"tab3\">\n                    <h4>Product Warranty:</h4>\n                    <div class=\"warranty-details\">\n                        <h4>"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.itemName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n                        <p>\n                            <strong>Assembled Country of Origin:</strong> "
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.assembledCountryOfOrigin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n                            <strong>Components Country of Origin:</strong> "
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.componentsCountryOfOrigin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n                            <strong>Supplier Warranty:</strong> "
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.supplierWarranty)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                        </p>\n                    </div>\n\n                    <aside class=\"care-plan\">\n                        <h4>Walmart Product Care Plans</h4>\n                        <p>A limited product warranty is included free for most items. With an optional Walmart Care Plan you can extend coverage up to 3 additional years. Walmart Care Plan Extended Warranties cover 100% of the cost for repair or replacement, including shipping charges for the exchange. <a href=\"#\">See Details</a></p>\n                        <p>We'll show you extended warranty options and pricing at checkout if applicable.</p>\n                    </aside>\n\n                    <p>If you made your purchase in a Walmart store and would like to purchase a warranty,\n                        <a href=\"http://see.walmart.com/walmart/protection-plans/\" title=\"Warranty &amp; Installation Plans\">Click Here</a>\n                    </p>\n                </section>\n\n                <section class=\"tab-pane\" id=\"tab4\">\n                    <h4>Enjoy Great Financing!</h4>\n                    <p>Make the most of your shopping experience with the Walmart Discover&reg; or Walmart Credit Card.</p>\n                    <p>Open a Walmart Credit Card, Spend $100 Today and Get $20 Back*</p>\n                    <p>*Offer subject to credit approval</p>\n                    <p><a href=\"#\">Learn More</a> or <a href=\"#\">Apply Now</a></p>\n                    <p><strong>No Payments + No Interest</strong> if Paid in Full in 6 Months!</p>\n\n                    <h4>BillMeLater</h4>\n                    <p>Enjoy no payments for 6 months. You'll have 6 months with no payments, and no interest if paid in full within 6 months on orders over $250. Otherwise, interest will be charged from the original date of purchase. Bill Me Later is the quick, easy, secure way to buy online without using your credit card. Simply select Bill Me Later at checkout. Subject to credit approval.</p>\n                    <p><a href=\"#\">See Terms</a></p>\n                </section>\n\n                <section class=\"tab-pane\" id=\"tab5\">\n                    <h4>Gifting Options:</h4>\n                    <p>Gift options are not available for this item.</p>\n                </section>\n            </div>\n        </div>";
  return buffer;
  });
templates['prod_intro'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"item\"><img class=\"item-image\" src=\""
    + escapeExpression(((stack1 = depth0.lgImageSrc),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\"product image\"></div>\n        ";
  return buffer;
  }

  buffer += "    <h1>"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.itemName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n    <div class=\"clearfix\">\n        <div class=\"item-rating rating\" title=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " stars\"><div class=\"stars\" style=\"width:";
  if (stack2 = helpers.pw) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.pw; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "px;\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div></div>\n        <p class=\"item-review-links\"><a href=\"#rr-section\">25 Reviews</a> | <a href=\"#\">Write a Review</a> | <a href=\"#\">Ask a Question</a></p>\n    </div>\n    <p class=\"item-price\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.sellers),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.currentItemPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n\n    <div id=\"prod-carousel\" class=\"carousel slide\">\n\n        <!-- Carousel items -->\n        <div class=\"carousel-inner\">\n        ";
  stack2 = helpers.each.call(depth0, depth0.alternateImageData, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </div>\n        <ol class=\"carousel-indicators clearfix\" style=\"width:";
  if (stack2 = helpers.indicatorWidth) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.indicatorWidth; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "px\">\n            <li data-target=\"#prod-carousel\" data-slide-to=\"0\"></li>\n            <li data-target=\"#prod-carousel\" data-slide-to=\"1\"></li>\n            <li data-target=\"#prod-carousel\" data-slide-to=\"2\"></li>\n            <li data-target=\"#prod-carousel\" data-slide-to=\"3\"></li>\n        </ol>\n        <!-- Carousel nav -->\n        <a class=\"carousel-control left\" href=\"#prod-carousel\" data-slide=\"prev\"></a>\n        <a class=\"carousel-control right\" href=\"#prod-carousel\" data-slide=\"next\"></a>\n    </div>\n\n    <h2>About</h2>\n    <div class=\"clearfix\">\n        <p class=\"short-desc\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.shortDescription)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n        <div class=\"buying-options\">\n            <form class=\"clearfix\" action=\"/\">\n                <label>\n                    <select class=\"qty\" id=\"qty\">\n                        <option>Qty</option>\n                        <option>1</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                        <option>5</option>\n                    </select>\n                </label>\n                <button class=\"add-to-cart\" id=\"add-to-cart\">Add to Cart</button>\n            </form>\n\n            <ul>\n                <li class=\"links find-link\"><a href=\"#\">Find This Product Locally</a></li>\n                <li class=\"links arrival-link\"><a href=\"#\">Calculate Arrival Date</a></li>\n                <li class=\"links share-link\"><a href=\"#\">Share With a Friend</a></li>\n            </ul>\n        </div>\n    </div>\n\n";
  return buffer;
  });
templates['prod_similar'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<header class=\"clearfix\">\n    <h2>People Who Viewed This Item Also Viewed</h2>\n    <button class=\"see-more\">See More</button>\n</header>";
  });
templates['reviews'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"content\">\n    <header>\n        <h3 class=\"title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n        <p class=\"customer\">by <a href=\"#\">";
  if (stack1 = helpers.customer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a> on ";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n        <div class=\"avg-rating rating\" title=\"";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " stars\"><div class=\"stars\" style=\"width:";
  if (stack1 = helpers.aw) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.aw; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n    </header>\n\n    <p class=\"review-text\">";
  if (stack1 = helpers.review) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.review; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</div>\n\n<footer>\n    <ul class=\"rating-data\">\n        <li>\n            Value:\n            <div class=\"rating\" title=\"";
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " stars\"><div class=\"stars\" style=\"width:";
  if (stack1 = helpers.vw) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.vw; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\">";
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n        </li>\n        <li>\n            Meets Expectations:\n            <div class=\"rating\" title=\"";
  if (stack1 = helpers.meetsexpectations) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.meetsexpectations; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " stars\"><div class=\"stars\" style=\"width:";
  if (stack1 = helpers.mew) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mew; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\">";
  if (stack1 = helpers.meetsexpectations) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.meetsexpectations; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n        </li>\n        <li>\n            Picture Quality:\n            <div class=\"rating\" title=\"";
  if (stack1 = helpers.picturequality) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.picturequality; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " stars\"><div class=\"stars\" style=\"width:";
  if (stack1 = helpers.pqw) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pqw; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\">";
  if (stack1 = helpers.picturequality) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.picturequality; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n        </li>\n        <li>\n            Sound Quality:\n            <div class=\"rating\" title=\"";
  if (stack1 = helpers.soundquality) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.soundquality; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " stars\"><div class=\"stars\" style=\"width:";
  if (stack1 = helpers.sqw) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.sqw; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\">";
  if (stack1 = helpers.soundquality) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.soundquality; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n        </li>\n        <li>\n            Features:\n            <div class=\"rating\" title=\"";
  if (stack1 = helpers.features) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.features; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " stars\"><div class=\"stars\" style=\"width:";
  if (stack1 = helpers.fw) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fw; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\" title=\"";
  if (stack1 = helpers.features) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.features; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " stars\">";
  if (stack1 = helpers.features) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.features; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n        </li>\n    </ul>\n    <ul class=\"customer-data\">\n        <li>Age: <span>";
  if (stack1 = helpers.age) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.age; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n        <li>Gender: <span>";
  if (stack1 = helpers.gender) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.gender; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n        <li>Ownership: <span>";
  if (stack1 = helpers.ownership) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ownership; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n        <li>Usage: <span>";
  if (stack1 = helpers.usage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.usage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n        <li>City: <span>";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n    </ul>\n</footer>\n\n";
  return buffer;
  });
})();
