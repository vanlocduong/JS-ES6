function User(first,last){
    this.firstname = first,
    this.lastname = last,
    this.showName =  function(){
        console.log(this.firstname + ' ' + this.lastname )
    }
}

// User.prototype.yourFeature 


var khoa = new User('Khoa','Nguyen')

var user2 = new User('user2','user2')

// User.prototype.featureNAme = 
// khoa.__proto__ = 

User.prototype.showVietnamese = function(){
    console.log('Ten cua toi la ' + this.firstname + ' ' + this.lastname)
}

User.prototype.showFullName = function(){
    console.log(this.firstname + ' ' + this.lastname)
}