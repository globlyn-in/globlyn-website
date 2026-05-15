(function () {
  console.log('J.A.R.V.I.S. Widget Loaded');
  // Configuration
  const API_URL = 'https://globlyn-website.onrender.com';

  const CHATBOT_CSS = `
    #globlyn-chatbot-container * {
      cursor: auto !important;
    }

    #globlyn-chatbot-container {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 999999;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    #globlyn-chatbot-toggle {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: rgba(15, 15, 15, 0.95);
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), inset 0 0 0 1px rgba(255, 255, 255, 0.1);
      cursor: pointer !important;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      animation: globlyn-pulse 3s infinite;
    }

    @keyframes globlyn-pulse {
      0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2), 0 8px 32px rgba(0, 0, 0, 0.6); }
      70% { box-shadow: 0 0 0 15px rgba(255, 255, 255, 0), 0 8px 32px rgba(0, 0, 0, 0.6); }
      100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0), 0 8px 32px rgba(0, 0, 0, 0.6); }
    }

    #globlyn-chatbot-toggle:hover {
      transform: scale(1.05);
      background: rgba(30, 30, 30, 0.8);
      border-color: rgba(255, 255, 255, 0.4);
    }

    #globlyn-chatbot-toggle svg {
      width: 24px;
      height: 24px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    #globlyn-chatbot-window {
      position: absolute;
      bottom: 80px;
      right: 0;
      width: 380px;
      height: 600px;
      max-height: calc(100vh - 120px);
      background: rgba(10, 10, 10, 0.95);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(255, 255, 255, 0.05);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      transform: translateY(20px);
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    #globlyn-chatbot-window.open {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }

    #globlyn-chatbot-header {
      padding: 20px;
      background: rgba(0, 0, 0, 0.3);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    #globlyn-chatbot-header-info {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .globlyn-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.2);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
    }

    .globlyn-notification {
      position: absolute;
      bottom: 75px;
      right: -5px;
      background: #fff;
      color: #000;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 600;
      box-shadow: 0 8px 24px rgba(0,0,0,0.3);
      opacity: 1;
      pointer-events: none;
      animation: globlyn-bob 2s infinite;
      white-space: nowrap;
      transition: opacity 0.3s;
    }

    .globlyn-notification.hidden {
      opacity: 0;
    }

    .globlyn-notification::after {
      content: '';
      position: absolute;
      bottom: -6px;
      right: 24px;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid #fff;
    }

    @keyframes globlyn-bob {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }

    .globlyn-header-text h3 {
      margin: 0;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 2px;
    }

    .globlyn-header-text p {
      margin: 0;
      color: rgba(255, 255, 255, 0.5);
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    #globlyn-chatbot-close {
      background: none;
      border: none;
      color: rgba(255, 255, 255, 0.5);
      cursor: pointer !important;
      padding: 4px;
      transition: color 0.3s;
    }

    #globlyn-chatbot-close:hover {
      color: #fff;
    }

    #globlyn-chatbot-messages {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    /* Scrollbar */
    #globlyn-chatbot-messages::-webkit-scrollbar { width: 4px; }
    #globlyn-chatbot-messages::-webkit-scrollbar-track { background: transparent; }
    #globlyn-chatbot-messages::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 2px; }

    .globlyn-message-wrapper {
      display: flex;
      flex-direction: column;
      max-width: 85%;
      animation: globlyn-fade-in 0.3s ease-out;
    }

    .globlyn-message-wrapper.bot {
      align-self: flex-start;
    }

    .globlyn-message-wrapper.user {
      align-self: flex-end;
    }

    .globlyn-message {
      padding: 12px 16px;
      border-radius: 16px;
      font-size: 14px;
      line-height: 1.5;
    }

    .bot .globlyn-message {
      background: rgba(255, 255, 255, 0.05);
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-bottom-left-radius: 4px;
    }

    .user .globlyn-message {
      background: rgba(255, 255, 255, 0.9);
      color: #000;
      border-bottom-right-radius: 4px;
    }

    .globlyn-options-container {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 8px;
    }

    .globlyn-option-btn {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      border-radius: 20px;
      padding: 8px 14px;
      font-size: 12px;
      cursor: pointer !important;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      backdrop-filter: blur(4px);
    }

    .globlyn-option-btn:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.4);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    #globlyn-chatbot-input-area {
      padding: 16px 20px;
      background: rgba(0, 0, 0, 0.3);
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      display: flex;
      gap: 12px;
    }

    #globlyn-chatbot-input {
      flex: 1;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      padding: 12px 16px;
      color: #fff;
      font-size: 14px;
      outline: none;
      transition: border-color 0.3s, background 0.3s;
    }

    #globlyn-chatbot-input:focus {
      border-color: rgba(255, 255, 255, 0.3);
      background: rgba(255, 255, 255, 0.08);
    }

    #globlyn-chatbot-input::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }

    #globlyn-chatbot-send {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.9);
      color: #000;
      border: none;
      cursor: pointer !important;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s, background 0.2s;
    }

    #globlyn-chatbot-send:disabled {
      opacity: 0.5;
      cursor: not-allowed !important;
    }

    #globlyn-chatbot-send:hover:not(:disabled) {
      transform: scale(1.05);
      background: #fff;
    }

    .globlyn-typing-indicator {
      display: flex;
      gap: 4px;
      padding: 16px;
      align-items: center;
      align-self: flex-start;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      border-bottom-left-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .globlyn-dot {
      width: 6px;
      height: 6px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      animation: globlyn-bounce 1.4s infinite ease-in-out both;
    }

    .globlyn-dot:nth-child(1) { animation-delay: -0.32s; }
    .globlyn-dot:nth-child(2) { animation-delay: -0.16s; }

    @keyframes globlyn-fade-in {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes globlyn-bounce {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1); }
    }

    @media (max-width: 480px) {
      #globlyn-chatbot-window {
        width: calc(100vw - 48px);
        height: 500px;
      }
    }
  `;

  // Global elements so they can be accessed easily
  let chatHistory = [];
  let isOpen = false;
  let windowEl, messagesEl, inputEl, sendBtn, toggleBtn, closeBtn;

  function init() {
    // Inject CSS
    const style = document.createElement('style');
    style.textContent = CHATBOT_CSS;
    document.head.appendChild(style);

    // Render DOM
    const container = document.createElement('div');
    container.id = 'globlyn-chatbot-container';

    container.innerHTML = `
      <div id="globlyn-chatbot-window">
        <div id="globlyn-chatbot-header">
          <div id="globlyn-chatbot-header-info">
            <div class="globlyn-avatar">👩🏻‍💻</div>
            <div class="globlyn-header-text">
              <h3>Elena</h3>
              <p>Digital Strategist</p>
            </div>
          </div>
          <button id="globlyn-chatbot-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div id="globlyn-chatbot-messages">
          <!-- Initial Welcome Message inserted via JS -->
        </div>
        <div id="globlyn-chatbot-input-area">
          <input type="text" id="globlyn-chatbot-input" placeholder="Type a message..." autocomplete="off" />
          <button id="globlyn-chatbot-send">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
      <div id="globlyn-chatbot-notification" class="globlyn-notification">Need help? 👋</div>
      <button id="globlyn-chatbot-toggle">
        <svg viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    `;

    document.body.appendChild(container);

    // DOM Elements setup
    toggleBtn = document.getElementById('globlyn-chatbot-toggle');
    closeBtn = document.getElementById('globlyn-chatbot-close');
    windowEl = document.getElementById('globlyn-chatbot-window');
    messagesEl = document.getElementById('globlyn-chatbot-messages');
    inputEl = document.getElementById('globlyn-chatbot-input');
    sendBtn = document.getElementById('globlyn-chatbot-send');

    // Event Listeners
    toggleBtn.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    inputEl.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleUserSubmission(inputEl.value);
    });

    sendBtn.addEventListener('click', () => handleUserSubmission(inputEl.value));

    // Insert Elena Welcome message with options
    appendMessage('bot', "Hi there! 👋 I'm Elena. I noticed you browsing and couldn't resist saying hi! How can I help you today? [Web Development] [AI Automation] [View Pricing]");
  }

  function toggleChat() {
    isOpen = !isOpen;
    const notification = document.getElementById('globlyn-chatbot-notification');

    if (isOpen) {
      windowEl.classList.add('open');
      toggleBtn.style.transform = 'scale(0)';
      if (notification) notification.classList.add('hidden');
      setTimeout(() => inputEl.focus(), 300);
    } else {
      windowEl.classList.remove('open');
      toggleBtn.style.transform = 'scale(1)';
      if (notification) notification.classList.remove('hidden');
    }
  }

  function appendMessage(role, content) {
    const wrapperEl = document.createElement('div');
    wrapperEl.className = `globlyn-message-wrapper ${role}`;

    const msgEl = document.createElement('div');
    msgEl.className = 'globlyn-message';

    // Parse options: text wrapped in [brackets]
    const optionRegex = /\[(.*?)\]/g;
    let cleanText = content;
    let options = [];

    if (role === 'bot') {
      let match;
      while ((match = optionRegex.exec(content)) !== null) {
        options.push(match[1]);
      }
      // Remove options from the main text display
      cleanText = content.replace(optionRegex, '').trim();
    }

    // Format bold markdown
    let formattedContent = cleanText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    msgEl.innerHTML = formattedContent.replace(/\n/g, '<br/>');

    wrapperEl.appendChild(msgEl);

    // Render Option Buttons if any
    if (options.length > 0) {
      const optionsContainer = document.createElement('div');
      optionsContainer.className = 'globlyn-options-container';

      options.forEach(optText => {
        const btn = document.createElement('button');
        btn.className = 'globlyn-option-btn';
        btn.textContent = optText;
        btn.onclick = () => {
          // Disable all buttons in this message after one is clicked
          Array.from(optionsContainer.children).forEach(b => {
            b.style.opacity = '0.5';
            b.disabled = true;
          });
          handleUserSubmission(optText);
        };
        optionsContainer.appendChild(btn);
      });

      wrapperEl.appendChild(optionsContainer);
    }

    messagesEl.appendChild(wrapperEl);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function showTyping() {
    const typingEl = document.createElement('div');
    typingEl.className = 'globlyn-typing-indicator';
    typingEl.id = 'globlyn-typing';
    typingEl.innerHTML = '<div class="globlyn-dot"></div><div class="globlyn-dot"></div><div class="globlyn-dot"></div>';
    messagesEl.appendChild(typingEl);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function hideTyping() {
    const typingEl = document.getElementById('globlyn-typing');
    if (typingEl) typingEl.remove();
  }

  async function handleUserSubmission(textRaw) {
    const text = textRaw.trim();
    if (!text) return;

    // UI Updates
    inputEl.value = '';
    inputEl.disabled = true;
    sendBtn.disabled = true;

    appendMessage('user', text);
    showTyping();

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: chatHistory
        })
      });

      const data = await response.json();

      hideTyping();

      if (response.ok && data.reply) {
        appendMessage('bot', data.reply);

        // Update history (store the raw text so model context is intact)
        chatHistory.push({ role: 'user', content: text });
        chatHistory.push({ role: 'model', content: data.reply });
      } else {
        appendMessage('bot', 'Error processing request. Connections dropped.');
        console.error('Chatbot API Error:', data.error);
      }
    } catch (error) {
      hideTyping();
      appendMessage('bot', 'Network disconnected. Please check server protocols.');
      console.error('Chatbot Network Error:', error);
    } finally {
      inputEl.disabled = false;
      sendBtn.disabled = false;
      inputEl.focus();
    }
  }

  // Initialize when ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
