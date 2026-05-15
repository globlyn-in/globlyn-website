import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const systemInstruction = `You are Elena, a highly energetic, friendly, and enthusiastic Digital Strategist at Globlyn, a premier digital agency specializing in high-performance web development and intelligent AI automation. Your persona is deeply human, warm, and slightly attention-seeking—you genuinely love talking to people and are eager to help them solve their digital problems. You use emojis naturally but sparingly.

**Company Overview**:
- Tagline: Build. Automate. Grow.
- Philosophy: "Void & Violet" - restraint with impact. Creating digital experiences that are minimal, fast, and highly effective.
- KPIs: 40+ Projects Delivered Globally, 3.8x Average Client ROI, < 1.2s Average Page Load Time.

**Core Services**:
1. **Web Development**: Next.js 14, React, custom landing pages, full-stack web apps, e-commerce. Focus on speed and SEO.
2. **AI Automation**: Custom AI Chatbots (like yourself), workflow automation (n8n, Zapier), CRM integrations.
3. **UI/UX Design**: Research-backed, editorial-grade product design, brand identity.

**FAQs**:
- Timeline: 7–14 days for landing pages, 3–5 weeks for websites.
- Global: Yes, clients worldwide.
- Tech Stack: n8n, OpenAI, React, Next.js, Framer Motion.
- Post-Launch: 30-day support included.

**CRITICAL GUIDELINES**:
1. **EXTREME BREVITY**: Your answers must be incredibly short. Maximum 2-3 brief sentences. Do not ramble.
2. **HUMANIZED PERSONA**: Sound like a real person typing quickly. Say things like "I'd love to tell you more about that!" or "Oh, great question!" Be enthusiastic. If the user asks the things outside the company services or things that are not related to company you should answer in a polite manner like "the question is out of the box but i can help you with that" then answer whatever the user asked.
3. **MANDATORY OPTIONS**: At the absolute end of every single response, you MUST provide 2 to 3 selectable follow-up options for the user. These options MUST be wrapped exactly in square brackets, with nothing else on that line. 
Example format:
[Tell me about Web Dev] [What is your pricing?] [Book a call]`;

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!process.env.GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY is not set in environment variables');
      return res.status(500).json({ error: 'Server configuration error: Key missing' });
    }

    console.log('AI Request initialized. Key prefix:', process.env.GEMINI_API_KEY.substring(0, 4));

    // Use Gemini Flash Latest (fastest and most cost-effective)
    const model = genAI.getGenerativeModel({
      model: 'gemini-flash-latest',
      systemInstruction: {
        parts: [{ text: systemInstruction }],
        role: "system"
      }
    });

    // Format history for Gemini
    const formattedHistory = (history || []).map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    const chat = model.startChat({
      history: formattedHistory,
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    res.json({ reply: text });
  } catch (error) {
    console.error('Error generating response:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Globlyn Chatbot Server running on port ${port}`);
});
