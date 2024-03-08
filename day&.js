const request = require("request");

const getData = (url) => {
    return new Promise((result, resolve) => {
        (async () => {
            request(url, (error, response, body) => {
                const json = JSON.parse(body)
                resolve(getData)
            })
        })()
    })
}

(async () => {
    const result = await getData("https://jsonplaceholder.typicode.com/posts/1")
    const result2 = await getData("https://jsonplaceholder.typicode.com/posts/")
})()











