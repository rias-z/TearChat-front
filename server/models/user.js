const mongoose = require('mongoose')


const Schema = mongoose.Schema

let UserSchema = new Schema({
  user_id: { type: [Number], required: true, unique: true},
  name : { type: String, unique: true },
  password : { type: String }
})

module.exports = mongoose.model('user', UserSchema)
