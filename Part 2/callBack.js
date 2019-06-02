function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function downLoadAvatar(url, onSuccess){
    console.log("downloading avatar");
    // 
    await sleep(3000);

    console.log('finshed downloading avatar');
    onSuccess();
}

// function updateAvatar() {
//     console.log("updating avatar");
// }

setTimeout(function(){
    alert("Hello my name is Paul")
}, 3000)

downLoadAvatar("https://avater.com", function () {
    console.log("update avatar expression ");
})