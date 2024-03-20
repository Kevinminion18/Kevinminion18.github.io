'use strict';

const express = require('express');
const app = express();

const multer = require("multer");

const INVALID_REQUESTS = 400;
const SERVER_ERROR = 500;
const PORT_NUMBER = 8000;

// for application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true})); // built-in middleware
// for application/json
app.use(express.json()); // built-in middleware
// for multipart/form-data (required with FormData)
app.use(multer().none()); // requires the "multer" module

import { config } from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

// Initialize dotenv configuration to load your .env variables
config();

// Initialize OpenAI API with your API key
const openAi = new OpenAIApi(new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY,
}));

// Endpoint to handle chat messages
app.post('/chat-message', async (req, res) => {
  try {
    const response = await openAi.createCompletion({
      model: 'gpt-4-turbo-preview', // Ensure to replace with the desired model version
      prompt: req.body.message, // User's message from the website
      temperature: 0.7,
      max_tokens: 150,
    });

    // Since we're using the OpenAI SDK, the structure to access the completion text might differ slightly
    // Adjust the response structure according to the SDK documentation or your specific version
    const message = response.data.choices[0].text.trim();
    res.json({ message: message });
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    res.status(500).send('An error occurred');
  }
});

app.use(express.static('public'));
const PORT = process.env.PORT || PORT_NUMBER;
app.listen(PORT);
