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
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h1>"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.itemName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n<div class=\"item-rating rating\" title=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " stars\"><div class=\"stars\" style=\"width:";
  if (stack2 = helpers.pw) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.pw; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "px;\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div></div>\n<p class=\"item-review-links\"><a href=\"#rr-section\">25 Reviews</a> | <a href=\"#\">Write a Review</a> | <a href=\"#\">Ask a Question</a></p>\n<p class=\"item-price\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.sellers),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.currentItemPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n\n<img class=\"item-image\" src=\"";
  if (stack2 = helpers.imageSource) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.imageSource; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" alt=\"product image\">\n\n<h2>About</h2>\n<div class=\"short-desc\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.shortDescription)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>";
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
templates['tv'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return " \n";
  });
})();
