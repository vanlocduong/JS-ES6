// class User {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     console.log("Im here");
//   }
//   showName() {
//     return this.firstname + " " + this.lastname;
//   }
// }

// class Student extends User {
//   constructor(firstname, lastname, id) {
//     super(firstname, lastname);
//     this.id = id;
//     // this.showId = function(){
//     //   return this.id
//     // }
//   }
//   showId() {
//     return this.id;
//   }
// }

// var khoa = new Student("Khoa", "Nguyen", "1234");
// khoa.showName();
// khoa.showId();

function User(firstname,lastname){
  this.firstname = firstname
  this.lastname = lastname
}

User.prototype.showId = function(){
  return this.id
}

var Student = new User()

Student.id = '1234'

console.log(Student.showId())

-> Syntax Sugar