(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n   <h3>Item Details</h3>\n  <p>id: ";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p>comparable: \"";
  if (stack1 = helpers.comparable) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.comparable; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p>upc: ";
  if (stack1 = helpers.upc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.upc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n<p>Customer: ";
  if (stack1 = helpers.customer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p>Date: ";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n";
  return buffer;
  });
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<heading>\n    <h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <p>by ";
  if (stack1 = helpers.customer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " on ";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.verified),stack1 == null || stack1 === false ? stack1 : stack1.status)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    <div>";
  if (stack2 = helpers.rating) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rating; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n</heading>\n\n<p>";
  if (stack2 = helpers.review) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.review; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n\n<footer>\n    <div>\n        <ul>\n            <li>Age: ";
  if (stack2 = helpers.age) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.age; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</li>\n            <li>Gender: ";
  if (stack2 = helpers.gender) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.gender; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</li>\n            <li>Ownership: ";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</li>\n            <li>Usage: ";
  if (stack2 = helpers.usage) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.usage; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</li>\n            <li>City: ";
  if (stack2 = helpers.city) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.city; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</li>\n        </ul>\n    </div>\n</footer>\n\n";
  return buffer;
  });
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<heading>\n    <h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <p>by ";
  if (stack1 = helpers.customer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " on ";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.verifiedText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.verifiedText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <div>";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n</heading>\n\n<p>";
  if (stack1 = helpers.review) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.review; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n<footer>\n    <div>\n        <ul>\n            <li>Age: ";
  if (stack1 = helpers.age) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.age; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li>Gender: ";
  if (stack1 = helpers.gender) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.gender; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li>Ownership: ";
  if (stack1 = helpers.ownership) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ownership; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li>Usage: ";
  if (stack1 = helpers.usage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.usage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li>City: ";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n        </ul>\n    </div>\n</footer>\n\n";
  return buffer;
  });
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<heading>\n    <h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <p>by ";
  if (stack1 = helpers.customer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " on ";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.verifiedText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.verifiedText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <div>";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n</heading>\n\n<p>";
  if (stack1 = helpers.review) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.review; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n<footer>\n    <div>\n        <ul>\n            <li>\n                <p>Value: </p><div>";
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            </li>\n            <li>\n                <p>Meets Expectations: </p><div>";
  if (stack1 = helpers.meetsexpectations) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.meetsexpectations; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            </li>\n            <li>\n                <p>Picture Quality: </p><div>";
  if (stack1 = helpers.picturequality) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.picturequality; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            </li>\n            <li>\n                <p>Sound Quality: </p><div>";
  if (stack1 = helpers.soundquality) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.soundquality; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            </li>\n            <li>\n                <p>Features: </p><div>";
  if (stack1 = helpers.features) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.features; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            </li>\n        </ul>\n        <ul>\n            <li>Age: ";
  if (stack1 = helpers.age) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.age; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li>Gender: ";
  if (stack1 = helpers.gender) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.gender; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li>Ownership: ";
  if (stack1 = helpers.ownership) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ownership; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li>Usage: ";
  if (stack1 = helpers.usage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.usage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li>City: ";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n        </ul>\n    </div>\n</footer>\n\n";
  return buffer;
  });
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<heading>\n    <h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <p>by ";
  if (stack1 = helpers.customer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " on ";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.verifiedText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.verifiedText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <div>";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n</heading>\n\n<p>";
  if (stack1 = helpers.review) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.review; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n<footer>\n    <div class=\"clearfix\">\n        <ul style=\"float:left;\">\n            <li>\n                <p>Value: </p><div>";
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            </li>\n            <li>\n                <p>Meets Expectations: </p><div>";
  if (stack1 = helpers.meetsexpectations) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.meetsexpectations; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            </li>\n            <li>\n                <p>Picture Quality: </p><div>";
  if (stack1 = helpers.picturequality) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.picturequality; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            </li>\n            <li>\n                <p>Sound Quality: </p><div>";
  if (stack1 = helpers.soundquality) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.soundquality; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            </li>\n            <li>\n                <p>Features: </p><div>";
  if (stack1 = helpers.features) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.features; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            </li>\n        </ul>\n        <ul style=\"float:left;\">\n            <li>Age: ";
  if (stack1 = helpers.age) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.age; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li>Gender: ";
  if (stack1 = helpers.gender) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.gender; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li>Ownership: ";
  if (stack1 = helpers.ownership) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ownership; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li>Usage: ";
  if (stack1 = helpers.usage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.usage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li>City: ";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n        </ul>\n    </div>\n</footer>\n\n";
  return buffer;
  });
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<heading>\n    <h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <p>by ";
  if (stack1 = helpers.customer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " on ";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <div>";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n</heading>\n\n<p>";
  if (stack1 = helpers.review) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.review; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n<footer>\n    <div class=\"clearfix\">\n        <ul style=\"float:left;\">\n            <li>\n                <p>Value: </p><div>";
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            </li>\n            <li>\n                <p>Meets Expectations: </p><div>";
  if (stack1 = helpers.meetsexpectations) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.meetsexpectations; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            </li>\n            <li>\n                <p>Picture Quality: </p><div>";
  if (stack1 = helpers.picturequality) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.picturequality; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            </li>\n            <li>\n                <p>Sound Quality: </p><div>";
  if (stack1 = helpers.soundquality) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.soundquality; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            </li>\n            <li>\n                <p>Features: </p><div>";
  if (stack1 = helpers.features) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.features; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            </li>\n        </ul>\n        <ul style=\"float:left;\">\n            <li>Age: ";
  if (stack1 = helpers.age) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.age; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li>Gender: ";
  if (stack1 = helpers.gender) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.gender; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li>Ownership: ";
  if (stack1 = helpers.ownership) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ownership; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li>Usage: ";
  if (stack1 = helpers.usage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.usage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n            <li>City: ";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n        </ul>\n    </div>\n</footer>\n\n";
  return buffer;
  });
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<heading>\n    <h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <p>by ";
  if (stack1 = helpers.customer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " on ";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <div class=\"avg-rating rating\"><div class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n</heading>\n\n<p>";
  if (stack1 = helpers.review) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.review; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n<footer>\n    <div class=\"clearfix\">\n        <ul class=\"rating-data\">\n            <li>\n                Value: <div class=\"rating\"><div class=\"stars\">";
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n            </li>\n            <li>\n                Meets Expectations: <div class=\"rating\"><div class=\"stars\">";
  if (stack1 = helpers.meetsexpectations) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.meetsexpectations; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n            </li>\n            <li>\n                Picture Quality: <div class=\"rating\"><div class=\"stars\">";
  if (stack1 = helpers.picturequality) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.picturequality; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n            </li>\n            <li>\n                Sound Quality: <div class=\"rating\"><div class=\"stars\">";
  if (stack1 = helpers.soundquality) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.soundquality; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n            </li>\n            <li>\n                Features: <div class=\"rating\"><div class=\"stars\">";
  if (stack1 = helpers.features) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.features; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n            </li>\n        </ul>\n        <ul class=\"customer-data\">\n            <li>Age: <span>";
  if (stack1 = helpers.age) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.age; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Gender: <span>";
  if (stack1 = helpers.gender) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.gender; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Ownership: <span>";
  if (stack1 = helpers.ownership) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ownership; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Usage: <span>";
  if (stack1 = helpers.usage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.usage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>City: <span>";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n        </ul>\n    </div>\n</footer>\n\n";
  return buffer;
  });
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<heading>\n    <h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <p>by ";
  if (stack1 = helpers.customer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " on ";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <div class=\"avg-rating rating\"><div class=\"stars\" style=\"width:";
  if (stack1 = helpers.aw) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.aw; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n</heading>\n\n<p>";
  if (stack1 = helpers.review) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.review; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n<footer>\n    <div class=\"clearfix\">\n        <ul class=\"rating-data\">\n            <li>\n                Value: <div class=\"rating\"><div class=\"stars\" style=\"width:";
  if (stack1 = helpers.vw) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.vw; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\">";
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n            </li>\n            <li>\n                Meets Expectations: <div class=\"rating\"><div class=\"stars\" style=\"width:";
  if (stack1 = helpers.mew) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mew; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\">";
  if (stack1 = helpers.meetsexpectations) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.meetsexpectations; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n            </li>\n            <li>\n                Picture Quality: <div class=\"rating\"><div class=\"stars\" style=\"width:";
  if (stack1 = helpers.pqw) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pqw; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\">";
  if (stack1 = helpers.picturequality) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.picturequality; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n            </li>\n            <li>\n                Sound Quality: <div class=\"rating\"><div class=\"stars\" style=\"width:";
  if (stack1 = helpers.sqw) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.sqw; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\">";
  if (stack1 = helpers.soundquality) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.soundquality; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n            </li>\n            <li>\n                Features: <div class=\"rating\"><div class=\"stars\" style=\"width:";
  if (stack1 = helpers.fw) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fw; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\">";
  if (stack1 = helpers.features) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.features; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n            </li>\n        </ul>\n        <ul class=\"customer-data\">\n            <li>Age: <span>";
  if (stack1 = helpers.age) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.age; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Gender: <span>";
  if (stack1 = helpers.gender) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.gender; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Ownership: <span>";
  if (stack1 = helpers.ownership) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ownership; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Usage: <span>";
  if (stack1 = helpers.usage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.usage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>City: <span>";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n        </ul>\n    </div>\n</footer>\n\n";
  return buffer;
  });
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<heading>\n    <h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <p>by ";
  if (stack1 = helpers.customer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " on ";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <div class=\"avg-rating rating\"><div class=\"stars\" style=\"width:";
  if (stack1 = helpers.aw) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.aw; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\" title=\"";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n</heading>\n\n<p>";
  if (stack1 = helpers.review) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.review; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n<footer>\n    <div class=\"clearfix\">\n        <ul class=\"rating-data\">\n            <li>\n                Value:\n                <div class=\"rating\"><div class=\"stars\" style=\"width:";
  if (stack1 = helpers.vw) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.vw; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\" title=\"";
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " stars\">";
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n            </li>\n            <li>\n                Meets Expectations:\n                <div class=\"rating\"><div class=\"stars\" style=\"width:";
  if (stack1 = helpers.mew) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.mew; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\" title=\"";
  if (stack1 = helpers.meetsexpectations) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.meetsexpectations; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " stars\">";
  if (stack1 = helpers.meetsexpectations) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.meetsexpectations; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n            </li>\n            <li>\n                Picture Quality:\n                <div class=\"rating\"><div class=\"stars\" style=\"width:";
  if (stack1 = helpers.pqw) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pqw; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\" title=\"";
  if (stack1 = helpers.picturequality) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.picturequality; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " stars\">";
  if (stack1 = helpers.picturequality) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.picturequality; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n            </li>\n            <li>\n                Sound Quality:\n                <div class=\"rating\"><div class=\"stars\" style=\"width:";
  if (stack1 = helpers.sqw) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.sqw; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\" title=\"";
  if (stack1 = helpers.soundquality) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.soundquality; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " stars\">";
  if (stack1 = helpers.soundquality) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.soundquality; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\n            </li>\n            <li>\n                Features:\n                <div class=\"rating\"><div class=\"stars\" style=\"width:";
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
    + "</div></div>\n            </li>\n        </ul>\n        <ul class=\"customer-data\">\n            <li>Age: <span>";
  if (stack1 = helpers.age) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.age; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Gender: <span>";
  if (stack1 = helpers.gender) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.gender; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Ownership: <span>";
  if (stack1 = helpers.ownership) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ownership; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Usage: <span>";
  if (stack1 = helpers.usage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.usage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>City: <span>";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n        </ul>\n    </div>\n</footer>\n\n";
  return buffer;
  });
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<heading>\n    <h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <p>by ";
  if (stack1 = helpers.customer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " on ";
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
    + "</div></div>\n</heading>\n\n<p>";
  if (stack1 = helpers.review) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.review; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n<footer>\n    <div class=\"clearfix\">\n        <ul class=\"rating-data\">\n            <li>\n                Value:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Meets Expectations:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Picture Quality:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Sound Quality:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Features:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n        </ul>\n        <ul class=\"customer-data\">\n            <li>Age: <span>";
  if (stack1 = helpers.age) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.age; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Gender: <span>";
  if (stack1 = helpers.gender) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.gender; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Ownership: <span>";
  if (stack1 = helpers.ownership) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ownership; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Usage: <span>";
  if (stack1 = helpers.usage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.usage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>City: <span>";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n        </ul>\n    </div>\n</footer>\n\n";
  return buffer;
  });
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<heading>\n    <h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <p class=\"review-text\">by ";
  if (stack1 = helpers.customer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " on ";
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
    + "</div></div>\n</heading>\n\n<p>";
  if (stack1 = helpers.review) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.review; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n<footer>\n    <div class=\"clearfix\">\n        <ul class=\"rating-data\">\n            <li>\n                Value:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Meets Expectations:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Picture Quality:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Sound Quality:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Features:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n        </ul>\n        <ul class=\"customer-data\">\n            <li>Age: <span>";
  if (stack1 = helpers.age) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.age; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Gender: <span>";
  if (stack1 = helpers.gender) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.gender; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Ownership: <span>";
  if (stack1 = helpers.ownership) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ownership; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Usage: <span>";
  if (stack1 = helpers.usage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.usage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>City: <span>";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n        </ul>\n    </div>\n</footer>\n\n";
  return buffer;
  });
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<heading>\n    <h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <p class=\"review-text\">by ";
  if (stack1 = helpers.customer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " on ";
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
    + "</div></div>\n</heading>\n\n<p>";
  if (stack1 = helpers.review) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.review; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n<footer>\n    <div class=\"clearfix\">\n        <ul class=\"rating-data\">\n            <li>\n                Value:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Meets Expectations:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Picture Quality:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Sound Quality:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Features:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n        </ul>\n        <ul class=\"customer-data\">\n            <li>Age: <span>";
  if (stack1 = helpers.age) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.age; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Gender: <span>";
  if (stack1 = helpers.gender) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.gender; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Ownership: <span>";
  if (stack1 = helpers.ownership) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ownership; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Usage: <span>";
  if (stack1 = helpers.usage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.usage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>City: <span>";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n        </ul>\n    </div>\n</footer>\n\n";
  return buffer;
  });
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<heading>\n    <h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <p>by ";
  if (stack1 = helpers.customer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " on ";
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
    + "</div></div>\n</heading>\n\n<p class=\"review-text\">";
  if (stack1 = helpers.review) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.review; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n<footer>\n    <div class=\"clearfix\">\n        <ul class=\"rating-data\">\n            <li>\n                Value:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Meets Expectations:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Picture Quality:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Sound Quality:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Features:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n        </ul>\n        <ul class=\"customer-data\">\n            <li>Age: <span>";
  if (stack1 = helpers.age) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.age; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Gender: <span>";
  if (stack1 = helpers.gender) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.gender; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Ownership: <span>";
  if (stack1 = helpers.ownership) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ownership; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Usage: <span>";
  if (stack1 = helpers.usage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.usage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>City: <span>";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n        </ul>\n    </div>\n</footer>\n\n";
  return buffer;
  });
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<header>\n    <h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <p>by ";
  if (stack1 = helpers.customer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " on ";
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
    + "</p>\n\n<footer>\n    <div class=\"clearfix\">\n        <ul class=\"rating-data\">\n            <li>\n                Value:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Meets Expectations:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Picture Quality:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Sound Quality:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Features:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n        </ul>\n        <ul class=\"customer-data\">\n            <li>Age: <span>";
  if (stack1 = helpers.age) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.age; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Gender: <span>";
  if (stack1 = helpers.gender) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.gender; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Ownership: <span>";
  if (stack1 = helpers.ownership) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ownership; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Usage: <span>";
  if (stack1 = helpers.usage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.usage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>City: <span>";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n        </ul>\n    </div>\n</footer>\n\n";
  return buffer;
  });
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<header>\n    <h3 class=\"title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <p class=\"customer\">by ";
  if (stack1 = helpers.customer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " on ";
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
    + "</p>\n\n<footer>\n    <div>\n        <ul class=\"rating-data\">\n            <li>\n                Value:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Meets Expectations:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Picture Quality:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Sound Quality:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n            <li>\n                Features:\n                <div class=\"rating\" title=\"";
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
    + "</div></div>\n            </li>\n        </ul>\n        <ul class=\"customer-data\">\n            <li>Age: <span>";
  if (stack1 = helpers.age) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.age; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Gender: <span>";
  if (stack1 = helpers.gender) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.gender; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Ownership: <span>";
  if (stack1 = helpers.ownership) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ownership; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>Usage: <span>";
  if (stack1 = helpers.usage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.usage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n            <li>City: <span>";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n        </ul>\n    </div>\n</footer>\n\n";
  return buffer;
  });
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<header>\n    <h3 class=\"title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <p class=\"customer\">by ";
  if (stack1 = helpers.customer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " on ";
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
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<header>\n    <h3 class=\"title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <p class=\"customer\">by ";
  if (stack1 = helpers.customer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " on ";
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
    + "</p>\n\n<footer class=\"clearfix\">\n    <ul class=\"rating-data\">\n        <li>\n            Value:\n            <div class=\"rating\" title=\"";
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
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
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
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
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
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
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
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"product\">\n  <img class=\"image\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"TV image\">\n  <h3 class=\"name\"><a class=\"url\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n  <ul class=\"descrip\"><li>31.5\" screen measured diagonally from corner to corner <LI>HDMI inputs: 3<li>Wall-mountable, detachable base<li>High brightness of 420 cd/m2 with 6.5 ms response time</ul>\n  <p class=\"price\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <p class=\"rating\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</article>";
  return buffer;
  });
})();
