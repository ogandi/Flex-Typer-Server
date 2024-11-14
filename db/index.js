const mongoose = require('mongoose')

mongoose.connect( process.env.DATABASE_URL )

mongoose.connection.on('connected', () => {
  console.log(`connected to mongoDB ${mongoose.connection.name}`)
  
})


