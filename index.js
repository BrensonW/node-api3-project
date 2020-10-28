// code away!

const server = require('express')
const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(`Server is lisenting on port ${port}`)
});