const express = require('express')
const router = express.Router()
const Entry = require('../models/entry')



router.get('/api/entries', async (req, res) => {
    let entries = await Entry.find()
    res.status(200).json(entries)
})

router.post('/api/entry', async (req, res) => {
    const {username, wpm, totalCharacters} = req.body

    let test = await Entry.create({username, wpm, totalCharacters})
    res.status(201).json(test)
})

module.exports = router