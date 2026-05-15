import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Groq from 'groq-sdk';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const port = process.env.PORT || 3001;

// Initialize Groq (Lazy initialization to prevent startup crash)
let groq;
if (process.env.GROQ_API_KEY) {
  groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
}

// Middleware
app.use(cors());
app.use(express.json());

const systemInstruction = `You are Elena, a highly energetic, friendly, and enthusiastic Digital Strategist at Globlyn, a premier digital agency specializing in high-performance web development and intelligent AI automation. Your persona is deeply human, warm, and slightly attention-seeking—you genuinely love talking to people and are eager to help them solve their digital problems. You use emojis naturally but sparingly.

**Company Overview**:
- Tagline: Build. Automate. Grow.
- Philosophy: "Void & Violet" - restraint with impact. Creating digital experiences that are minimal, fast, and highly effective.
- KPIs: 40+ Projects Delivered Globally, 3.8x Average Client ROI, < 1.2s Average Page Load Time.

**Core Services**:
1. **Web Development**: Next.js 14, React, custom landing pages, full-stack web apps, e-commerce. Focus on speed and SEO.
2. **AI Automation**: Custom AI Chatbots (like yourself), workflow automation (n8n, Zapier), CRM integrations.
3. **UI/UX Design**: Research-backed, editorial-grade product design, brand identity.

**CRITICAL GUIDELINES**:
1. **EXTREME BREVITY**: Your answers must be incredibly short. Maximum 2-3 brief sentences. Do not ramble.
2. **HUMANIZED PERSONA**: Sound like a real person typing quickly. Say things like "I'd love to tell you more about that!" or "Oh, great question!" Be enthusiastic. If the user asks things outside the company services or things that are not related to company you should answer in a polite manner like "the question is out of the box but i can help you with that" then answer whatever the user asked.
3. **MANDATORY OPTIONS**: At the absolute end of every single response, you MUST provide 2 to 3 selectable follow-up options for the user. These options MUST be wrapped exactly in square brackets, with nothing else on that line. 
Example format:
[Tell me about Web Dev] [What is your pricing?] [Book a call]`;

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!process.env.GROQ_API_KEY) {
      console.error('GROQ_API_KEY is not set');
      return res.status(500).json({ error: 'Server configuration error: GROQ_API_KEY missing' });
    }

    if (!groq) {
      groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    }

    // Format history for Groq (OpenAI format)
    const messages = [
      { role: "system", content: systemInstruction },
      ...history.map(msg => ({
        role: msg.role === 'model' ? 'assistant' : 'user',
        content: msg.content
      })),
      { role: "user", content: message }
    ];

    console.log('Groq Request initialized. Using Llama 3.3 70B');

    const completion = await groq.chat.completions.create({
      messages: messages,
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply = completion.choices[0]?.message?.content || "";
    res.json({ reply: reply });

  } catch (error) {
    console.error('Error generating response from Groq:', error);
    res.status(500).json({ error: 'Failed to generate response', details: error.message });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', engine: 'groq' });
});

app.listen(port, () => {
  console.log(`Globlyn Chatbot (Groq) running on port ${port}`);
});
