const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
})

const samuel = async() =>{
    console.log('olá')
    await sleep(1000)
    console.log('depois de 2segs')
}
