user = {
    firstname: 'firstname',
    // lastname: 'lastname',
    showName: function(){
        console.log(this.firstname + ' ' + this.lastname )
    }
}

khoa = {
    firstname: 'Khoa',
    // lastname: 'Nguyen'
}

linh = {
    firstname: "Linh"
}

khoa.__proto__ = user

linh.__proto__ = khoa


linh.showName()
