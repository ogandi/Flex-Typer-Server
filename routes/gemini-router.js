const express = require('express')
const router = express.Router()
const gemAPI = require('../models/gemini-api')


router.get('/api/generate-paragraph/:prompt/:length', async (req, res) => {
    let prompt = req.params.prompt
    let length = req.params.length
    // console.log(length);
    
    try {
        const promptResponse = await gemAPI(prompt, length);
        let filteredReponse = promptResponse.replaceAll("\n", "").replace(/\s+/g, " ").trim()
        // console.log(filteredReponse);
        
        
        return res.json({filteredReponse})

      } catch (error) {
        console.error(error)
        res.status(500).send("Error generating content")
      }
  })

  module.exports = router
