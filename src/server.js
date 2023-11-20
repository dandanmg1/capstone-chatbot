const OpenAI = require ('openai');
  
const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config()
const openai = new OpenAI({
    apiKey: process.env.API_KEY, // defaults to process.env["OPENAI_API_KEY"]
  });
const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = process.env.API_KEY;

app.post('/completions', async (req, res) => {
    try {
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: "user", content: req.body.message }],
            model: "gpt-3.5-turbo",
            max_tokens: 100,
          });
        console.log('test',chatCompletion)
    
    } catch (error) {
        console.error('Error in /completions:', error.message);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

const server = require('http').createServer(app);
app.listen(PORT, () => console.log('Your server is running on PORT ' + PORT));