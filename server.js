const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res)=>{
    const url = req.url
    console.log(url)

    // for the main content
    if(url === '/index.html'){
        fs.readFile(
            './index.html',
            (err, data)=>{
                if(err){
                    console.log(err)
                }else{
                    res.write(data)
                    res.end()
                }
            }
        )
    }else if(url==='/style.css'){
        fs.readFile(
            './style.css',
            (err, data)=>{
                if(err){
                    console.log(err)
                }else{
                    res.write(data)
                    res.end()
                }
            }
        )
    }else if(url==='/index.js'){
        fs.readFile(
            './index.js',
            (err, data)=>{
                if(err){
                    console.log(err)
                }else{
                    res.write(data)
                    res.end()
                }
            }
        )
    }else {
        fs.readFile(
            './index.html',
            (err, data)=>{
                if(err){
                    console.log(err)
                }else{
                    res.write(data)
                    res.end()
                }
            }
        )
    }
})





server.listen(3000)