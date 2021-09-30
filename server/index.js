const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Your app listening at http://localhost:${PORT}`)
})