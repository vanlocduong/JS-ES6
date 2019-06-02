// function constructor


// var firstname = 'Global'



function User(firstname, lastname){

    console.log(this)
    this.firstname = firstname
    this.lastname = lastname
    this.showName = function(){
         console.log(this.firstname + ' ' + this.lastname )
    }

}

var khoa = new User('Khoa','Nguyen')





var user = {
    firstname: 'firstname',
    lastname: 'lastname',
    showName: function(){
        console.log(this.firstname + ' ' + this.lastname )
    }
}



