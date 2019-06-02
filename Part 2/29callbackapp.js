function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

 
async function downloadAvatar(url, onSuccess ){

    console.log('start downloading avatar')
    // tai avatar

    await sleep(3000)

    // tai xong thi update avatar 

    console.log('finish downloading avatar')
    onSuccess()
}



// downloadAvatar('url', function(){
//     console.log('updated avatar')
// })

setTimeout( function(){
    alert('HI')
}, 3000   ) 

