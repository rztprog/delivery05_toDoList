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

