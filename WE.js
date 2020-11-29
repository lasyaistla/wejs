const { fstat } = require('fs')
const http = require('http')
const port = 3000

const server = http.createServer(function (req, res) {
    res.writegead(200, { 'Content-Type': 'Text/html' })
    fstat.readFile('WE.html', function (error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error:not found:(')
        }
        else {
            res.write(data)
        }
        res.end()
    })
    res.write('Welcome to WE')
    res.end()

})


server.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong', error)
    }
    else
        console.log('Server is listening on port' + port)
})
