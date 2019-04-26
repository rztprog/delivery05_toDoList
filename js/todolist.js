'use strict';

////////// VARIABLES /////////
//////////////////////////////


////////// FUNCTION //////////
//////////////////////////////


var page = new Vue({
	el: '.page',
	data: {
		toDoList: [],
		inputfield: "",
		isDark: false,
		hasError: false,
		activeLight: 'light',
		activeDark: 'dark',
	},
	methods: {
		addItem: function() {
			if(this.inputfield === "") {
				// return;
				return this.redField();
			}else{
				this.upperCase();
				for(let item of this.toDoList){
					if(item.text === this.inputfield){
						this.inputfield = "";
						// return;
						return this.redField();
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
			this.hasError = true;
			return setTimeout( () => this.hasError = false, 400);
		},
		darkMode: function() {
			if(this.isDark == true){
				return this.isDark = false;
			} else{
				return this.isDark = true;
			}
		}
	}
});

