// var con duoc goi function scope
var hi = 1123
var hi = 1123
var hi  = " 123"

// const va let deu khong the khai bao ten bien trung nhau
// let co the sua duoc
let let1= 123
let1 = 1234
// let let1 = "123"

// const khong the sua duoc
const con = 123
// con = 1234 nhu the nay se khong duoc
// const con = 1234

// function varLet(){
//     var hi = "hi"
// }
console.log(hi)
console.log(let1);

// khi nao nen dung
var arr = [];
for (let i = 0; i < 5; i ++ ){
    arr [i] = function () {
        console.log(i);
    }
}
// 1 2 3 4 
arr[0]()
arr[1]();
arr[2]();
arr[3]();
// dung vs var
var arr = [];
for (var i = 0; i < 5; i++) {
	arr[i] = function() {
		console.log(i);
	};
}
// 5 5 5 5 
arr[0]();
arr[1]();
arr[2]();
arr[3]();
