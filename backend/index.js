
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json());

const productRouter = require('./router/product')
app.use(productRouter.router)

  
app.get('/', (req, res, next) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`)
})

