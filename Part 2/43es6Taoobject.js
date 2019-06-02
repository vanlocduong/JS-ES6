

class User{
    constructor(firstname,lastname){
        this.firstname = firstname
        this.lastname = lastname
    }
    showName(){
        return this.firstname + ' ' + this.lastname 
    }

}

// function User(firstname,lastname){
//     this.firstname = firstname
//     this.lastname = lastname
//     
// }


// User.prototype.showName = function(){

// }


var khoa = new User('Khoa','Nguyen')
