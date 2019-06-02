
var a = 2


// extends

Number.prototype.square = function(){
    return this*this
}

Number.prototype.cube = function(){
    return this.square()*this
}

console.log(a.cube())

var b = 3 
console.log(b.cube())
