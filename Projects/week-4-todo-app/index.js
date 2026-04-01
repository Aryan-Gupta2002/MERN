const express = require('express')
const app = express()   // Creating Variable for express

// Route Handling Below 
app.get('/', (req, res) => {
    res.send('Hello World')
})  //.get = GET method request

// req: request which is sent by client, can read body(payload)
// res : response sent back by the server
// res.json ({}), will send json file to front end
// res.send( html doc), we can also send html as response.
// NOTE: only one res.send() is allowed for an endpoint

// Some Extra Route endpoint for GET and POST methods
app.get('/hi', (req, res) => {
    res.send('Hi, this is a new route')
})
app.post('/', (req, res) => {
    res.send('Post Hello Worlds')
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})  //Which port , This line makes sure that process runs infinintely