var TodoView = Backbone.View.extend({
 events: {
 	"click h3": "clickeo"
 },
 clickeo : function(){
 	alert(this.model.get('description'));
 },

template: _.template("<h3><%= description %></h3>"),

render: function(){
	var attributes = this.model.toJson();
	this.$el.html(this.template(attributes));
 }
});


var todoView = new TodoView({model : todoItem});
todoView.render();
console.log(todoView.el)