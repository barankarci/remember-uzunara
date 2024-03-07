const request = require("request")

const getData = (url) => {
    return new Promise((resolve, reject) => {
        (async () => {
            request(url, (error, response, body) => {
                if (error) {
                    reject(error)
                }
                else {
                    const json = JSON.parse((body))
                    resolve(json)
                }
            })
        })()
    })
}




(async() => {
    const result = await getData("https://jsonplaceholder.typicode.com/posts/1")
    console.log(result)
})()






// getData("https://jxsonplaceholder.typicode.com/posts/1").then(result => {
//     console.log(result)
// }).catch(error => {
//     console.log(error)
// }).finally(() => {
//     console.log("her türlü çalıaşacak ya şş")
// })