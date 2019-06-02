
var khoa = {
    firstname: 'Khoa',
    lastname: 'Nguyen',
    showName: function(){
        console.log(this.firstname +  ' '  + this.lastname)
    }
}
// function borrowing

var linh = {
    firstname: 'Linh',
    lastname: 'Nguyen'
}

// khoa.showName.call(linh)

// IEFE
khoa.showName.bind(linh)()








// function displayName(age,address){
//      console.log(this.firstname +  ' '  + this.lastname)
//      console.log(age + ' ' + address )
//      return true
// }

// var sayIntro = displayName.bind(khoa)

// sayIntro(21,'HCM')









