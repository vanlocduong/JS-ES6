// This in arrow function la global ngang hang voi cha cua no.
// this trong function binh thuong la cha cua no

// Arrow Function

var hi = function(){
  console.log(this)
}

var sayHello = () => {
  console.log(this)
}

// hi()
// sayHello()

// var firstname = 'Hung'

// var user = {
//   firstname: 'Khoa',
//   showName: function(){
//     console.log(this)
//   },
//   logName: () => {
//     console.log(this)
//   }

// }
// user.showName()
// user.logName()

// khi nao khong nen dung arrow function 
// tao mot ham voi prototype
// khong nen dung arrow function trong object vi con tro this khong the hien o trong object
// mot so truong hop callback dynamic(trong callback co su dung lai object cha cua no khong neu co su dung
// thi khong nen dung vd: 2 + 3)
function User(firstname) {
	this.firstname = 'Khoa';
}

User.prototype.showName = function() {
	console.log(this);
	console.log(this.firstname);
};

var khoa = new User();

khoa.showName();
