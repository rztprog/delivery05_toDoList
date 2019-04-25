'use strict';

////////// VARIABLES /////////
//////////////////////////////


// A SUPPR
const body = document.getElementsByTagName("body")[0];

body.style.backgroundColor = "#222222";
body.style.color = "#FFF";


////////// FUNCTION //////////
//////////////////////////////


Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
})

var ulwrapper = new Vue({
	el: ".ulwrapper",
	data: {
		toDoList: [
		]
	},
	methods: {
		addItem: function() {
			return this.toDoList.push("{ " +  "data.value" + " }");
		},
		isEmpty: function() {
		
		}
	}
})
