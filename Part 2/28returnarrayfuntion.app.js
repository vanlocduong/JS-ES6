
function functionCreator(){

    var arrays = []
    
    for (let i = 0; i < 3; i++ ){
         arrays[i] = function(){
             console.log(i)
         }
    }
    
    return arrays // array of functions
}

var showNumbers = functionCreator()

// console.log(showNumbers[0])

showNumbers[0]()
showNumbers[1]()
showNumbers[2]()