user = {
    firstname: 'firstname',
    // lastname: 'lastname',
    showName: function(){
        console.log(this.firstname + ' ' + this.lastname )
    }
}

khoa = {
    firstname: 'Khoa',
    lastname: 'Nguyen'
}

// Reflection in Javascript -> View/Edit

// console.log(Reflect.get(user,'firstname')) 


Reflect.setPrototypeOf(khoa,user)

khoa.showName()
// khoa.__proto__ = user




