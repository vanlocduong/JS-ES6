// use bind 

var paul = {
    firstname: 'Paul',
    lastname: 'Duong',
    showName: function(){
        console.log(this.firstname +  ' bind  '  + this.lastname)
    }
}
function displayName(age, address){
    console.log(this.firstname + ' bind ' + this.lastname);
    console.log(age + " " + address);
    return true;
}
// se chay displayName voi this la paul, duoc gan vao 
var sayHellName = displayName.bind(paul);
sayHellName(24, 'Da Nang');


// use apply 
var paul = {
    firstname: 'Paul',
    lastname: 'Duong',
    showName: function(){
        console.log(this.firstname +  ' '  + this.lastname)
    }
}
function displayName(age, address){
    console.log(this.firstname + ' ' + this.lastname);
    console.log(age + " " + address);
    return true;
}
// khong can goi sayHellName(); as bind() and truyen vao cho no la mot mang
// apply la array 
var sayHellName = displayName.apply(paul, [24, "Da Nang"]);
// sayHellName();


// use call( goi truc tiep) 
var paul = {
    firstname: 'Paul',
    lastname: 'Duong',
    showName: function(){
        console.log(this.firstname +  ' '  + this.lastname)
    }
}
function displayName(age, address){
    console.log(this.firstname + ' ' + this.lastname);
    console.log(age + " " + address);
    return true;
}
// vi call goi truc tiep nen khong can goi ham ( no se thuc hien truc tiep)
var sayHellName = displayName.call(paul, 24, "Da Nang");
// sayHellName(24, "Da Nang");

// function borrowing

var linh = {
    firstname: 'Linh',
    lastname: 'Nguyen'
}

paul.showName.call(linh)

// IEFE
khoa.showName.bind(linh)()
