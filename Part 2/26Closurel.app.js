

function talkTo(people){

    var age = 18

    return function send(message){
        debugger
        console.log('Hi, '+ people + ' ' + message + age )

         
    }
}

var hi = talkTo('Khoa')

console.log(hi)

hi('I love u')
