// function
function sayHi(name){
    console.log(arguments);
    console.log(typeof arguments);
    let total = 0;
    for(i = 0; i < arguments.length ; i ++){
        if(typeof arguments[i] === 'object'){
            total += arguments[i].age;
        }
    }
    console.log("total :" + total);
}

var user = {
    age : 151,
    pass: 123
}
var user1 = {
    age : 151,
    pass: 123
}
var user2 = {
    age : 151,
    pass: 123
}

sayHi(user, user1, user2);

//-- overloading 


function sayHi(name, address) {
    let middleName = arguments[2]  || ''
	console.log('name: ' + name + 'dia chi: ' + address + ' middleName '+ middleName);
	console.log(2);
}

function sayHi(name, address, middleName ) {
    console.log('name: ' + name + ' dia chi:   ' + address + ' middleName: ' + middleName);
	console.log(3);
}

function sayHello (name){
    console.log(name);
    console.log(name);
}

sayHello("loc", "duong")

sayHi('loc', 'qn');
sayHi('loc', 'qn', 'van');

// -- default arguments
// if khong co doi so thi chung ta nen set tham so = 0 tranh trong hop undefine hoac co the check = if 
function Sum (a, b,c = 0){
    // var c = c || 0 

    // if ( c === undefined){
    //     c = 0;
    // }
    return a + b + c;
}

console.log("sum = "+ Sum( 2,4))



//-- express function 
function sayHi(name) {
	console.log('in the function ne');
}

function sayHi2(name) {
	console.log('in the function ne 2');
}

// var hi = function(name){
//     console.log(name)
//     return true
// }('Khoa')

// console.log(hi)

// "ashdjahsjdh"

// {}
// 2*2*2

// (function() {
// 	var name = 'Khoa';
// 	console.log(name);
// 	console.log(this);
// })();

// var name = 'Linh';

// --closure là một bao đóng giữ lại các biến( giu lại biến age + name mặc dù đã xóa addPeople)

// function addPeope(name){
//     var age = 18;
//     return function send(message){
//         // debugger
//         console.log("hi "+ name + " message : " + message + " " +age);
//     }
// }

// var hi = addPeope("Paul")
// console.log(hi)
// hi("I love u")

// --closure with function 
// function addPeople(name){
//     var id = 18;
//     return {
//         getId : function(){
//             return 'id' + id; 
//         },
//         setId : function(newID){
//             id = newID;
//             return ' id' + id; 
//         }
//     }
// }

// var addPeople = addPeope()
// console.log(addPeope)
// console.log(addPeope.getId())
// addPeope.setId(96)
// console.log(addPeope.setId());

// -closure with array 
// function testClosureArray(){
//     var arrays = [];
//     for( let i = 0; i < 3; i ++){
//         arrays[i] = function(){
//             console.log(i);
//         }
//     }
//     return arrays;
// }

// var run1 = testClosureArray();
// run1[0]();
// run1[1]();
// run1[2  ]();




