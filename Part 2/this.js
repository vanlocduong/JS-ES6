// var name = 'loc'
// function sayHello (){
//     console.log(this.name);
// }
// sayHello()

// function Name (){
//     var value = 'name';
//     this.welcome(value);
// }

// function welcome(name){
//     console.log('name ' + this)
// }

// Name()

// implicit binding
goodbye: function{
    console.log('log ' + this.name);
},
	
var user = {
	name: 'name',
	pass: goodbye,
};
var hi = user.goodbye
hi()
// goodbye();