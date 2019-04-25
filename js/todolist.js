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
		isDark: false,
	},
	methods: {
		addItem: function() {
			if(this.inputfield == "") {
				return
				// return redField();
			}else{
				for(let item of this.toDoList){
					if(item == this.inputfield){
						console.log("FOUND");
					}
				}
				this.toDoList.push({ text: this.inputfield });
				this.inputfield = "";
			}
		},
		clearList: function() {
			this.toDoList = [];
		},
		redField: function() {
		
		//	return setTimeout( () => (isDark) ? "rgba(170, 170, 170, 0.9)" : "rgba(230, 230, 230, 0.9)", 500);
		},
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
