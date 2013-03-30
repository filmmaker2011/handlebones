(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<a class=\"url\" href=\"";
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
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getStarsWidth),stack1 ? stack1.call(depth0, depth0.rating, options) : helperMissing.call(depth0, "getStarsWidth", depth0.rating, options)))
    + "px;\">";
  if (stack2 = helpers.rating) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rating; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div></div>";
  return buffer;
  });
templates['prod_details'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                            <tr>\n                                <td>"
    + escapeExpression(((stack1 = depth0.attributeName),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                                <td>"
    + escapeExpression(((stack1 = depth0.attributeValue),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                            </tr>\n                        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                            <h4>";
  if (stack1 = helpers.itemName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.itemName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n                            <p>\n                                <strong>Assembled Country of Origin:</strong> ";
  if (stack1 = helpers.assembledCountryOfOrigin) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.assembledCountryOfOrigin; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<br/>\n                                <strong>Components Country of Origin:</strong> ";
  if (stack1 = helpers.componentsCountryOfOrigin) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.componentsCountryOfOrigin; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<br/>\n                                <strong>Supplier Warranty:</strong> ";
  if (stack1 = helpers.supplierWarranty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.supplierWarranty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n                            </p>\n                        ";
  return buffer;
  }

  buffer += "    <header class=\"clearfix\">\n        <h2>Product Details</h2>\n        <button class=\"have-question chevron\">Have a Question? </button>\n    </header>\n\n        <div class=\"tabbable tabs-left\">\n            <ul class=\"nav nav-tabs\">\n                <li class=\"active\"><a href=\"#tab1\" data-toggle=\"tab\">Full Description</a></li>\n                <li><a href=\"#tab2\" data-toggle=\"tab\">Specifications</a></li>\n                <li><a href=\"#tab3\" data-toggle=\"tab\">Warranty</a></li>\n                <li><a href=\"#tab4\" data-toggle=\"tab\">Financing</a></li>\n                <li><a href=\"#tab5\" data-toggle=\"tab\">Gifting</a></li>\n            </ul>\n\n            <div class=\"tab-content\">\n\n                "
    + "\n                <section class=\"tab-pane active short-desc\" id=\"tab1\">\n                    ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.cleanup),stack1 ? stack1.call(depth0, ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.shortDescription), options) : helperMissing.call(depth0, "cleanup", ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.shortDescription), options)))
    + "\n                </section>\n\n                "
    + "\n                <section class=\"tab-pane\" id=\"tab2\">\n                    <table class=\"table table-striped table-condensed\">\n                        ";
  stack2 = helpers.each.call(depth0, depth0.itemAttributes, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                    </table>\n                </section>\n\n                "
    + "\n                <section class=\"tab-pane\" id=\"tab3\">\n                    <h4>Product Warranty:</h4>\n                    <div class=\"warranty-details\">\n                        ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack2 = helpers.genericContent) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.genericContent; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.genericContent) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                    </div>\n\n                    <aside class=\"care-plan clearfix\">\n                        <img class=\"protected-logo\" src=\"img/care-plan.jpg\" alt=\"protection logo\">\n                        <div class=\"details\">\n                            <h4>Walmart Product Care Plans</h4>\n                            <p>A limited product warranty is included free for most items. With an optional Walmart Care Plan you can extend coverage up to 3 additional years. Walmart Care Plan Extended Warranties cover 100% of the cost for repair or replacement, including shipping charges for the exchange. <a href=\"#\">See Details</a></p>\n                            <p>We'll show you extended warranty options and pricing at checkout if applicable.</p>\n                        </div>\n                    </aside>\n\n                    <p>If you made your purchase in a Walmart store and would like to purchase a warranty,\n                        <a href=\"http://see.walmart.com/walmart/protection-plans/\" title=\"Warranty &amp; Installation Plans\">Click Here</a>\n                    </p>\n                </section>\n\n                "
    + "\n                <section class=\"tab-pane\" id=\"tab4\">\n                    <h4>Enjoy Great Financing!</h4>\n                    <p>Make the most of your shopping experience with the Walmart Discover&reg; or Walmart Credit Card.</p>\n                    <p>Open a Walmart Credit Card, Spend $100 Today and Get $20 Back*</p>\n                    <p>*Offer subject to credit approval</p>\n                    <p><a href=\"#\">Learn More</a> or <a href=\"#\">Apply Now</a></p>\n                    <p><strong>No Payments + No Interest</strong> if Paid in Full in 6 Months!</p>\n\n                    <h4>BillMeLater</h4>\n                    <p>Enjoy no payments for 6 months. You'll have 6 months with no payments, and no interest if paid in full within 6 months on orders over $250. Otherwise, interest will be charged from the original date of purchase. Bill Me Later is the quick, easy, secure way to buy online without using your credit card. Simply select Bill Me Later at checkout. Subject to credit approval.</p>\n                    <p><a href=\"#\">See Terms</a></p>\n                </section>\n\n                "
    + "\n                <section class=\"tab-pane\" id=\"tab5\">\n                    <h4>Gifting Options:</h4>\n                    <p>Gift options are not available for this item.</p>\n                </section>\n            </div>\n        </div>";
  return buffer;
  });
templates['prod_intro'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"item\"><img class=\"item-image\" src=\""
    + escapeExpression(((stack1 = depth0.lgImageSrc),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\"product image\"></div>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <li data-target=\"#prod-carousel\" data-slide-to=\""
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></li>\n            ";
  return buffer;
  }

  buffer += "    <h1>"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.itemName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n    <div class=\"clearfix\">\n        <div class=\"item-rating rating\" title=\"";
  if (stack2 = helpers.rating) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rating; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " stars\"><div class=\"stars\" style=\"width:";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getStarsWidth),stack1 ? stack1.call(depth0, depth0.rating, options) : helperMissing.call(depth0, "getStarsWidth", depth0.rating, options)))
    + "px;\">";
  if (stack2 = helpers.rating) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rating; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div></div>\n        <p class=\"item-review-links\"><a href=\"#rr-section\">25 Reviews</a> | <a href=\"#\">Write a Review</a> | <a href=\"#\">Ask a Question</a></p>\n    </div>\n    <p class=\"item-price\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.sellers),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.currentItemPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n\n    <div id=\"prod-carousel\" class=\"carousel slide\">\n\n        <!-- Carousel items -->\n        <div class=\"carousel-inner\">\n        ";
  stack2 = helpers.each.call(depth0, depth0.alternateImageData, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </div>\n        <ol class=\"carousel-indicators clearfix\" style=\"width:";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getIndicatorWidth),stack1 ? stack1.call(depth0, depth0.alternateImageData, options) : helperMissing.call(depth0, "getIndicatorWidth", depth0.alternateImageData, options)))
    + "px\">\n            ";
  stack2 = helpers.each.call(depth0, depth0.alternateImageData, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </ol>\n        <!-- Carousel nav -->\n        <a class=\"carousel-control left\" href=\"#prod-carousel\" data-slide=\"prev\"></a>\n        <a class=\"carousel-control right\" href=\"#prod-carousel\" data-slide=\"next\"></a>\n    </div>\n\n    <h2>About</h2>\n    <div class=\"clearfix\">\n        <p class=\"short-desc\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.cleanup),stack1 ? stack1.call(depth0, ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.shortDescription), options) : helperMissing.call(depth0, "cleanup", ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.shortDescription), options)))
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
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


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
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getStarsWidth),stack1 ? stack1.call(depth0, depth0.rating, options) : helperMissing.call(depth0, "getStarsWidth", depth0.rating, options)))
    + "px;\">";
  if (stack2 = helpers.rating) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rating; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div></div>\n    </header>\n\n    <p class=\"review-text\">";
  if (stack2 = helpers.review) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.review; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n</div>\n\n<footer>\n    <ul class=\"rating-data\">\n        <li>\n            Value:\n            <div class=\"rating\" title=\"";
  if (stack2 = helpers.value) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.value; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " stars\"><div class=\"stars\" style=\"width:";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getStarsWidth),stack1 ? stack1.call(depth0, depth0.value, options) : helperMissing.call(depth0, "getStarsWidth", depth0.value, options)))
    + "px;\">";
  if (stack2 = helpers.value) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.value; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div></div>\n        </li>\n        <li>\n            Meets Expectations:\n            <div class=\"rating\" title=\"";
  if (stack2 = helpers.meetsexpectations) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.meetsexpectations; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " stars\"><div class=\"stars\" style=\"width:";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getStarsWidth),stack1 ? stack1.call(depth0, depth0.meetsexpectations, options) : helperMissing.call(depth0, "getStarsWidth", depth0.meetsexpectations, options)))
    + "px;\">";
  if (stack2 = helpers.meetsexpectations) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.meetsexpectations; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div></div>\n        </li>\n        <li>\n            Picture Quality:\n            <div class=\"rating\" title=\"";
  if (stack2 = helpers.picturequality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.picturequality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " stars\"><div class=\"stars\" style=\"width:";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getStarsWidth),stack1 ? stack1.call(depth0, depth0.picturequality, options) : helperMissing.call(depth0, "getStarsWidth", depth0.picturequality, options)))
    + "px;\">";
  if (stack2 = helpers.picturequality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.picturequality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div></div>\n        </li>\n        <li>\n            Sound Quality:\n            <div class=\"rating\" title=\"";
  if (stack2 = helpers.soundquality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.soundquality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " stars\"><div class=\"stars\" style=\"width:";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getStarsWidth),stack1 ? stack1.call(depth0, depth0.soundquality, options) : helperMissing.call(depth0, "getStarsWidth", depth0.soundquality, options)))
    + "px;\">";
  if (stack2 = helpers.soundquality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.soundquality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div></div>\n        </li>\n        <li>\n            Features:\n            <div class=\"rating\" title=\"";
  if (stack2 = helpers.features) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.features; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " stars\"><div class=\"stars\" style=\"width:";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.getStarsWidth),stack1 ? stack1.call(depth0, depth0.features, options) : helperMissing.call(depth0, "getStarsWidth", depth0.features, options)))
    + "px;\" title=\"";
  if (stack2 = helpers.features) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.features; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " stars\">";
  if (stack2 = helpers.features) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.features; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div></div>\n        </li>\n    </ul>\n    <ul class=\"customer-data\">\n        <li>Age: <span>";
  if (stack2 = helpers.age) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.age; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></li>\n        <li>Gender: <span>";
  if (stack2 = helpers.gender) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.gender; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></li>\n        <li>Ownership: <span>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></li>\n        <li>Usage: <span>";
  if (stack2 = helpers.usage) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.usage; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></li>\n        <li>City: <span>";
  if (stack2 = helpers.city) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.city; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></li>\n    </ul>\n</footer>\n";
  return buffer;
  });
})();
