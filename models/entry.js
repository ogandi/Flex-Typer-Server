require('../db')
const mongoose = require('mongoose')

const leaderboardSchema = new mongoose.Schema({
    username: String,
    wpm: Number, 
    totalCharacters: Number

},{ timestamps: true })

const Entry = mongoose.model('Entry', leaderboardSchema)

module.exports = Entry