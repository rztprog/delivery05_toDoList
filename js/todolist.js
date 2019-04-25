'use strict';

////////// VARIABLES /////////
//////////////////////////////


////////// FUNCTION //////////
//////////////////////////////

var main = new Vue({
	el: '.main',
	data: {
		toDoList: [],
		inputfield: "",
	},
	methods: {

		addItem: function() {
			this.toDoList.push({ text: this.inputfield });
			this.inputfield = "";
		}
	}

});

var header = new Vue({
	el: '.header',
	data: {
		isDark: true,
	}

});


// Vue.component('todo-item', {
// 	props: ['todo'],
// 	template: '<li>{{ todo.text }}</li>'
// })

// var ulwrapper = new Vue({
// 	el: '.ulwrapper',
// 	data: {
// 		toDoList: [
// 		],
// 		value: ""
// 	},
// 	methods: {
// 		addItem: function() {
// 			this.isEmpty();
// 			this.toDoList.push({ text: this.value });
// 			this.value = "";
// 		},
// 		isEmpty: function() {
// 			for(let item of this.toDoList){
// 				if(item.text == this.value){
// 					console.log("found");
// 				}
// 			}
// 		},
// 		redField: function() {
		
// 		}
// 	}
// })

// var darkmode = new Vue({
// 	el: '.body',
// 	data: {
// 		islight: false,
// 		isdark: true
// 	},
// 	methods: {
// 		interuptor: function(){
// 			this.islight = !this.isligth;
// 			this.isdark = !this.isdark;
// 		}	
// 	}
// })
