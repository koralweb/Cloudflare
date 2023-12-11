const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    fs.readFile('../dist/index.html', (err, data) => {
        if (err) throw err;
        res.end(data);
    })
})

server.listen(3333, () => {
    console.log('Server start on port 3333 ...')
})

