(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "\n";
  });
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li><img class=\"item-image\" src="
    + escapeExpression(((stack1 = depth0.lgImageSrc),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " alt=\"product image\"></li>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <tr>\n                        <td>"
    + escapeExpression(((stack1 = depth0.attributeName),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                        <td>"
    + escapeExpression(((stack1 = depth0.attributeValue),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                    </tr>\n                ";
  return buffer;
  }

  buffer += "<h1>"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.itemName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n<div class=\"clearfix\">\n    <div class=\"item-rating rating\" title=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " stars\"><div class=\"stars\" style=\"width:";
  if (stack2 = helpers.pw) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.pw; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "px;\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div></div>\n    <p class=\"item-review-links\"><a href=\"#rr-section\">25 Reviews</a> | <a href=\"#\">Write a Review</a> | <a href=\"#\">Ask a Question</a></p>\n</div>\n<p class=\"item-price\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.sellers),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.currentItemPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n\n<ul class=\"carousel\">\n";
  stack2 = helpers.each.call(depth0, depth0.alternateImageData, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>\n\n\n<h2>About</h2>\n<div class=\"short-desc\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.shortDescription)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n\n\n<section class=\"prod-details\">\n    <header>\n        <h2>Product Details</h2>\n        <button>Have a Question?</button>\n    </header>\n\n    <ul>\n        <li><a href=\"#\">Full Description</a></li>\n        <li><a href=\"#\">Specifications</a></li>\n        <li><a href=\"#\">Warranty</a></li>\n        <li><a href=\"#\">Financing</a></li>\n        <li><a href=\"#\">Gifting</a></li>\n    </ul>\n\n    <div>\n        <section class=\"full_desc\">\n            "
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.shortDescription)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n        </section>\n\n        <section class=\"specs\">\n            <table>\n                ";
  stack2 = helpers.each.call(depth0, depth0.itemAttributes, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n            </table>\n        </section>\n\n        <section class=\"warranty\">\n            <h3>Product warranty: <a href=\"#\">See details</a></h3>\n            <div class=\"warranty-details\">\n                <h3>"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.itemName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n                <p><strong>Assembled Country of Origin:</strong> "
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.assembledCountryOfOrigin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n                <p><strong>Components Country of Origin:</strong> "
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.componentsCountryOfOrigin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n                <p><strong>Supplier Warranty:</strong> "
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.supplierWarranty)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n            </div>\n\n            <aside>\n                <h3>Walmart Product Care Plans</h3>\n                <p>A limited product warranty is included free for most items. With an optional Walmart Care Plan you can extend coverage up to 3 additional years. Walmart Care Plan Extended Warranties cover 100% of the cost for repair or replacement, including shipping charges for the exchange. <a href=\"#\">See Details</a></p>\n                <p>We'll show you extended warranty options and pricing at checkout if applicable.</p>\n            </aside>\n\n            <p>If you made your purchase in a Walmart store and would like to purchase a warranty.\n                <a href=\"http://see.walmart.com/walmart/protection-plans/\" title=\"Warranty &amp; Installation Plans\">Click Here</a>\n            </p>\n        </section>\n\n        <section class=\"financing\">\n            <h3>Enjoy Great Financing!</h3>\n            <p>Make the most of your shopping experience with the Walmart Discover&reg; or Walmart Credit Card.</p>\n            <p>Open a Walmart Credit Card, Spend $100 Today and Get $20 Back*</p>\n            <p>*Offer subject to credit approval</p>\n            <p><a href=\"#\">Learn More</a> or <a href=\"#\">Apply Now</a></p>\n            <p><strong>No Payments + No Interest</strong> if Paid in Full in 6 Months!</p>\n            <p>Enjoy no payments for 6 months. You'll have 6 months with no payments, and no interest if paid in full within 6 months on orders over $250. Otherwise, interest will be charged from the original date of purchase. Bill Me Later is the quick, easy, secure way to buy online without using your credit card. Simply select Bill Me Later at checkout. Subject to credit approval.</p>\n            <p><a href=\"#\">See Terms</a></p>\n        </section>\n\n        <section class=\"gifting\">\n            <p>Gift options are not available for this item.</p>\n        </section>\n    </div>\n</section>";
  return buffer;
  });
templates['product_details'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <tr>\n                        <td>"
    + escapeExpression(((stack1 = depth0.attributeName),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                        <td>"
    + escapeExpression(((stack1 = depth0.attributeValue),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                    </tr>\n                ";
  return buffer;
  }

  buffer += "<section>\n    <header>\n        <h2>Product Details</h2>\n        <button>Have a Question?</button>\n    </header>\n\n    <ul>\n        <li><a href=\"#\">Full Description</a></li>\n        <li><a href=\"#\">Specifications</a></li>\n        <li><a href=\"#\">Warranty</a></li>\n        <li><a href=\"#\">Financing</a></li>\n        <li><a href=\"#\">Gifting</a></li>\n    </ul>\n\n    <div>\n        <section class=\"full_desc\">\n            "
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.shortDescription)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n        </section>\n\n        <section class=\"specs\">\n            <table>\n                ";
  stack2 = helpers.each.call(depth0, depth0.itemAttributes, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n            </table>\n        </section>\n\n        <section class=\"warranty\">\n            <h3>Product warranty: <a href=\"#\">See details</a></h3>\n            <div class=\"warranty-details\">\n                <h3>"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.itemName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n                <p><strong>Assembled Country of Origin:</strong> "
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.assembledCountryOfOrigin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n                <p><strong>Components Country of Origin:</strong> "
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.componentsCountryOfOrigin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n                <p><strong>Supplier Warranty:</strong> "
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.supplierWarranty)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n            </div>\n\n            <aside>\n                <h3>Walmart Product Care Plans</h3>\n                <p>A limited product warranty is included free for most items. With an optional Walmart Care Plan you can extend coverage up to 3 additional years. Walmart Care Plan Extended Warranties cover 100% of the cost for repair or replacement, including shipping charges for the exchange. <a href=\"#\">See Details</a></p>\n                <p>We'll show you extended warranty options and pricing at checkout if applicable.</p>\n            </aside>\n\n            <p>If you made your purchase in a Walmart store and would like to purchase a warranty.\n                <a href=\"http://see.walmart.com/walmart/protection-plans/\" title=\"Warranty &amp; Installation Plans\">Click Here</a>\n            </p>\n        </section>\n\n        <section class=\"financing\">\n            <h3>Enjoy Great Financing!</h3>\n            <p>Make the most of your shopping experience with the Walmart Discover&reg; or Walmart Credit Card.</p>\n            <p>Open a Walmart Credit Card, Spend $100 Today and Get $20 Back*</p>\n            <p>*Offer subject to credit approval</p>\n            <p><a href=\"#\">Learn More</a> or <a href=\"#\">Apply Now</a></p>\n            <p><strong>No Payments + No Interest</strong> if Paid in Full in 6 Months!</p>\n            <p>Enjoy no payments for 6 months. You'll have 6 months with no payments, and no interest if paid in full within 6 months on orders over $250. Otherwise, interest will be charged from the original date of purchase. Bill Me Later is the quick, easy, secure way to buy online without using your credit card. Simply select Bill Me Later at checkout. Subject to credit approval.</p>\n            <p><a href=\"#\">See Terms</a></p>\n        </section>\n\n        <section class=\"gifting\">\n            <p>Gift options are not available for this item.</p>\n        </section>\n    </div>\n</section>";
  return buffer;
  });
templates['reviews'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<header>\n    <h3 class=\"title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <p class=\"customer\">by <a href=\"#\">";
  if (stack1 = helpers.customer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a> on ";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <div class=\"avg-rating rating\" title=\"";
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
    + "</div></div>\n</header>\n\n<p class=\"review-text\">";
  if (stack1 = helpers.review) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.review; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n<footer>\n    <ul class=\"rating-data\">\n        <li>\n            Value:\n            <div class=\"rating\" title=\"";
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
