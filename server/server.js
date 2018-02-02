const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const socketIO = require('socket.io')
const cors = require('cors')

const mongoose = require('mongoose')

// http-server
const app = express()
const port = 5000
const server = http.createServer(app)
const io = socketIO(server)

const routers = require( './routers' );

// ログ出力
// const morgan = require('morgan')
// app.use(morgan('combined'))

// CORS対策
app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// db設定
const dbUrl = 'mongodb://localhost/crevo'

// MongoDBに接続してからサーバーを立てる
mongoose.connect(dbUrl, dbErr => {
  // dbに接続できない場合はエラー表示
  if (dbErr) throw new Error(dbErr)
  else console.log('db connected')

  app.listen(port, err => {
    if (err) throw new Error(err)
    else console.log(`listening on port ${port}`)
  })
})

app.use('/api', routers)
