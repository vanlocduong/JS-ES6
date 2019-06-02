// Viet method bang  prototype tiet kiem bo nho hon 

// constructor la mot class es6
class User{
    constructor(firstName, lastName){
        this.firstName = firstName;
    this.lastName = lastName;
    }
    // tao them tinh nang cho no tuong tu nhu add prototype
    showName () {
        console.log("this is function showName");
    }
}

// tao object voi contructor ,
// function User(firstName , lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// tao them tinh nang cho no 
// User.prototype.showName = function (){
//     console.log("this is function showName ")
// }

var paul = new User("Paul", "Duong")