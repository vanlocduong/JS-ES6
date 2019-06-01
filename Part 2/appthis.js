// 1 this in a function , this will be poin to global
// var name = " Paul "
// function sayHell0(){
//     console.log(this.name);
// }

// sayHell0();
//2 function 
    // var name = " Paul "
    // function sayHell0(){
    //     var name = ' Khoa ';
    //     this.wellCome(name);
    // }
    // function wellCome(name) {
	// 	console.log('hi + ' + this);
	// }

    // sayHell0();


// 3 function call stack and call site

    // var name = ' Paul ';
    // function sayHell0() {
    //     // var name = ' Khoa ';
    //     console.log("Hello  ");
    //     this.wellCome();
    // }
    // function wellCome() {
    //     console.log('wellCome  ');
    //     like();
    // }

    // function like () {
    //     // debugger;
    //     console.log("like");
    // }

    // sayHell0();
// 4 implicit binding

// function welcome(){
//     console.log('welcome1 ' + this.name );
// }
// var user = {

//     name1 : 'paulduong',
//     pass : welcome
// }

// call site is user
// user.welcome();
// call site global call to welcome so here this is global
// welcome();

// 5 implicit lost 


// function welcome() {
// 	console.log('welcome1 ' + this.name);
// }
// var user = {
// 	name1: 'paulduong',
// 	pass: welcome,
// };

// var hi = user.welcome;
// var username = 'thu'
// hi()




// 5
// var user = {
//     firstName : "Khoa",
//     lastName : " Nguyen ",
//     showName : function(){
//         console.log(this.firstName + " " + this.lastName);

//         function showNameVietNamese() {
//             // debugger;
//             console.log("ten cua ban la " + this.firstName + " " + this.lastName);
//             console.log(this);
//         }

//         showNameVietNamese();
//     }
// };

// var firstName =  "Khoa";
// var   lastName = " Nguyen ";
// user.showName();