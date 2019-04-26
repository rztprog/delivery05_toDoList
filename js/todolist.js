'use strict';

////////// VARIABLES /////////
//////////////////////////////


////////// FUNCTION //////////
//////////////////////////////

var main = new Vue({
	el: '.page',
	data: {
		toDoList: [],
		inputfield: "",
		isDark: false,
		lightClass: 'light',
		darkClass: 'dark'
	},
	methods: {
		addItem: function() {
			if(this.inputfield === "") {
				return;
				// return redField();
			}else{
				this.upperCase();
				for(let item of this.toDoList){
					if(item.text === this.inputfield){
						this.inputfield = "";
						return;
						// return redField();
					}
				}
				
				this.toDoList.push({ text: this.inputfield });
				return this.inputfield = "";
			}
		},
		clearList: function() {
			if (this.toDoList.length === 0){
				return;
			} else if (confirm("Are you sure ?")){
				return this.toDoList = [];
			}
		},
		upperCase: function() {
			this.inputfield = this.inputfield.split("");
			return this.inputfield = this.inputfield[0].toUpperCase() + this.inputfield.splice(1).join("");
		},
		redField: function() {
			// datastyle.backgroundColor = "rgb(255, 55, 55)";
			// return setTimeout( () => datastyle.backgroundColor = (i==0) ? "rgba(170, 170, 170, 0.9)" : "rgba(230, 230, 230, 0.9)", 500);
		},
	}
});

