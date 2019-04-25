'use strict';

////////// VARIABLES /////////
//////////////////////////////


////////// FUNCTION //////////
//////////////////////////////


Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
})

var ulwrapper = new Vue({
	el: '.ulwrapper',
	data: {
		toDoList: [
		],
		value: ""
	},
	methods: {
		addItem: function() {
			this.toDoList.push({ text: this.value });
			this.value = "";
		},
		isEmpty: function() {

		},
		redField: function() {
		
		}
	}
})

var darkmode = new Vue({
	el: '.body',
	data: {
		islight: false,
		isdark: true
	},
	methods: {
		interuptor: function(){
			this.islight = !this.isligth;
			this.isdark = !this.isdark;
		}	
	}
})
