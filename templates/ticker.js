define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "				<div id=\"tab-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\r\n					<a href=\"#tab-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" class=\"tab\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\r\n					<div class=\"content\">\r\n						<table>\r\n					      	<thead>\r\n					      		<tr>\r\n						      		<th>Id</th>\r\n						      		<th>Balance</th>\r\n						      		<th>Pending Balance</th>\r\n						      		<th>Interest Rate</th>\r\n						      		<th>Current Rate</th>\r\n						      		<th>Over Draft Account</th>\r\n						      		<th>Limit</th>\r\n					      		</tr>\r\n					      	</thead>\r\n					      	<tbody>\r\n					      		<tr>\r\n					      			<td>"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "</td>\r\n					      			<td>"
    + escapeExpression(((helper = (helper = helpers.balance || (depth0 != null ? depth0.balance : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"balance","hash":{},"data":data}) : helper)))
    + "</td>\r\n					      			<td>"
    + escapeExpression(((helper = (helper = helpers.pendingBalance || (depth0 != null ? depth0.pendingBalance : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pendingBalance","hash":{},"data":data}) : helper)))
    + "</td>\r\n					      			<td>"
    + escapeExpression(((helper = (helper = helpers.interestRate || (depth0 != null ? depth0.interestRate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"interestRate","hash":{},"data":data}) : helper)))
    + "</td>\r\n					      			<td>"
    + escapeExpression(((helper = (helper = helpers.currentRate || (depth0 != null ? depth0.currentRate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"currentRate","hash":{},"data":data}) : helper)))
    + "</td>\r\n					      			<td>"
    + escapeExpression(((helper = (helper = helpers.overdraftAccount || (depth0 != null ? depth0.overdraftAccount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"overdraftAccount","hash":{},"data":data}) : helper)))
    + "</td>\r\n					      			<td>"
    + escapeExpression(((helper = (helper = helpers.limit || (depth0 != null ? depth0.limit : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"limit","hash":{},"data":data}) : helper)))
    + "</td>\r\n					      		</tr>\r\n					      	</tbody>\r\n				      	</table>					\r\n					</div>\r\n				</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"watchlist\">\r\n	<button type=\"button\">Show additional watch list</button>\r\n	<a href=\"javascript:void(0);\" id=\"newWatchList\">Create a new watch list</a>	\r\n	<div id=\"contain\">\r\n		<div class=\"accordion\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.ticker : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\r\n	</div>	\r\n</div>";
},"useData":true}); });