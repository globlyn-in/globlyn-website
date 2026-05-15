(function () {
  console.log('Globlyn Chatbot (Elena) Loaded');
  // Configuration
  const API_URL = 'https://globlyn-website.onrender.com/api/chat';

  const CHATBOT_CSS = `
    #globlyn-chatbot-container * {
      cursor: auto !important;
      box-sizing: border-box;
    }

    #globlyn-chatbot-container {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 999999;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }

    #globlyn-chatbot-toggle {
      width: 68px;
      height: 68px;
      border-radius: 50%;
      background: #111;
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
      cursor: pointer !important;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      position: relative;
    }

    /* Rotating Attention Ring */
    #globlyn-chatbot-toggle::before {
      content: '';
      position: absolute;
      inset: -3px;
      border-radius: 50%;
      background: conic-gradient(from 0deg, transparent, #007AFF, #5856D6, transparent);
      animation: globlyn-rotate 2s linear infinite;
      z-index: -1;
      opacity: 0.8;
    }

    #globlyn-chatbot-toggle::after {
      content: '';
      position: absolute;
      inset: 1px;
      background: #111;
      border-radius: 50%;
      z-index: -1;
    }

    @keyframes globlyn-rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    #globlyn-chatbot-toggle svg {
      width: 32px;
      height: 32px;
      transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    #globlyn-chatbot-toggle:hover {
      transform: scale(1.1);
    }

    #globlyn-chatbot-window {
      position: absolute;
      bottom: 84px;
      right: 0;
      width: 400px;
      height: 640px;
      max-height: calc(100vh - 140px);
      background: rgba(28, 28, 30, 0.85);
      backdrop-filter: blur(50px);
      -webkit-backdrop-filter: blur(50px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 30px;
      box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      transform: translateY(30px) scale(0.95);
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }

    #globlyn-chatbot-window.open {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0) scale(1);
    }

    #globlyn-chatbot-header {
      padding: 24px;
      background: rgba(255, 255, 255, 0.03);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .globlyn-status-dot {
      width: 8px;
      height: 8px;
      background: #34C759;
      border-radius: 50%;
      box-shadow: 0 0 10px #34C759;
      animation: globlyn-status-blink 2s infinite;
    }

    @keyframes globlyn-status-blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    #globlyn-chatbot-header-info {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .globlyn-avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: linear-gradient(135deg, #2C2C2E 0%, #1C1C1E 100%);
      border: 1px solid rgba(255,255,255,0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }

    .globlyn-header-text h3 {
      margin: 0;
      color: #fff;
      font-size: 17px;
      font-weight: 600;
    }

    .globlyn-header-text .status-row {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-top: 2px;
    }

    .globlyn-header-text p {
      margin: 0;
      color: rgba(255, 255, 255, 0.4);
      font-size: 12px;
      font-weight: 500;
    }

    #globlyn-chatbot-messages {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding-bottom: 30px;
    }

    .globlyn-message-wrapper {
      display: flex;
      flex-direction: column;
      max-width: 80%;
      animation: globlyn-pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    @keyframes globlyn-pop {
      from { opacity: 0; transform: scale(0.8) translateY(10px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }

    .globlyn-message-wrapper.bot { align-self: flex-start; }
    .globlyn-message-wrapper.user { align-self: flex-end; }

    .globlyn-message {
      padding: 12px 18px;
      font-size: 15px;
      line-height: 1.4;
      border-radius: 20px;
    }

    .bot .globlyn-message {
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
      border-bottom-left-radius: 4px;
      backdrop-filter: blur(10px);
    }

    .user .globlyn-message {
      background: linear-gradient(180deg, #007AFF 0%, #005BBF 100%);
      color: #fff;
      border-bottom-right-radius: 4px;
      box-shadow: 0 4px 15px rgba(0, 122, 255, 0.3);
    }

    #globlyn-chatbot-input-area {
      padding: 20px;
      background: transparent;
      display: flex;
      gap: 12px;
      align-items: center;
    }

    #globlyn-chatbot-input {
      flex: 1;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 25px;
      padding: 12px 20px;
      color: #fff;
      font-size: 15px;
      outline: none;
      transition: all 0.3s;
    }

    #globlyn-chatbot-input:focus {
      background: rgba(255, 255, 255, 0.12);
      border-color: rgba(255, 255, 255, 0.3);
    }

    #globlyn-chatbot-send {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #007AFF;
      color: #fff;
      border: none;
      cursor: pointer !important;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
    }

    #globlyn-chatbot-send:hover { transform: scale(1.1); background: #0084ff; }

    .globlyn-option-btn {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      border-radius: 18px;
      padding: 8px 16px;
      font-size: 13px;
      cursor: pointer !important;
      transition: all 0.3s;
      margin-top: 6px;
    }

    .globlyn-option-btn:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: #007AFF;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .globlyn-notification {
      position: absolute;
      bottom: 85px;
      right: 0px;
      background: #fff;
      color: #000;
      padding: 10px 18px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 700;
      box-shadow: 0 10px 30px rgba(0,0,0,0.4);
      opacity: 1;
      pointer-events: none;
      animation: globlyn-attention 4s infinite;
      white-space: nowrap;
      transition: opacity 0.3s;
    }

    @keyframes globlyn-attention {
      0%, 15%, 100% { transform: translateY(0) scale(1); }
      5% { transform: translateY(-10px) scale(1.1); }
      10% { transform: translateY(0) scale(1) rotate(3deg); }
      12% { transform: rotate(-3deg); }
    }

    .globlyn-notification::after {
      content: '';
      position: absolute;
      bottom: -6px;
      right: 28px;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid #fff;
    }

    .globlyn-typing-indicator {
      display: flex;
      gap: 4px;
      padding: 12px 18px;
      align-items: center;
      align-self: flex-start;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      border-bottom-left-radius: 4px;
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

  // Global elements
  let chatHistory = [];
  let isOpen = false;
  let windowEl, messagesEl, inputEl, sendBtn, toggleBtn, closeBtn;

  function init() {
    const style = document.createElement('style');
    style.textContent = CHATBOT_CSS;
    document.head.appendChild(style);

    const container = document.createElement('div');
    container.id = 'globlyn-chatbot-container';

    container.innerHTML = `
      <div id="globlyn-chatbot-window">
        <div id="globlyn-chatbot-header">
          <div id="globlyn-chatbot-header-info">
            <div class="globlyn-avatar">👩🏻‍💻</div>
            <div class="globlyn-header-text">
              <h3>Elena</h3>
              <div class="status-row">
                <div class="globlyn-status-dot"></div>
                <p>Always Active</p>
              </div>
            </div>
          </div>
          <button id="globlyn-chatbot-close" style="background:none; border:none; color:rgba(255,255,255,0.4); cursor:pointer;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div id="globlyn-chatbot-messages"></div>
        <div id="globlyn-chatbot-input-area">
          <input type="text" id="globlyn-chatbot-input" placeholder="iMessage" autocomplete="off" />
          <button id="globlyn-chatbot-send">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>
      </div>
      <div id="globlyn-chatbot-notification" class="globlyn-notification">Need help? 👋</div>
      <button id="globlyn-chatbot-toggle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </button>
    `;

    document.body.appendChild(container);

    toggleBtn = document.getElementById('globlyn-chatbot-toggle');
    closeBtn = document.getElementById('globlyn-chatbot-close');
    windowEl = document.getElementById('globlyn-chatbot-window');
    messagesEl = document.getElementById('globlyn-chatbot-messages');
    inputEl = document.getElementById('globlyn-chatbot-input');
    sendBtn = document.getElementById('globlyn-chatbot-send');

    toggleBtn.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    inputEl.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleUserSubmission(inputEl.value);
    });

    sendBtn.addEventListener('click', () => handleUserSubmission(inputEl.value));

    appendMessage('bot', "Hi there! 👋 I'm Elena. I noticed you browsing and couldn't resist saying hi! How can I help you today? [Web Development] [AI Automation] [View Pricing]");
  }

  function toggleChat() {
    isOpen = !isOpen;
    const notification = document.getElementById('globlyn-chatbot-notification');

    if (isOpen) {
      windowEl.classList.add('open');
      toggleBtn.style.transform = 'scale(0)';
      if (notification) notification.style.display = 'none';
      setTimeout(() => inputEl.focus(), 300);
    } else {
      windowEl.classList.remove('open');
      toggleBtn.style.transform = 'scale(1)';
      if (notification) notification.style.display = 'block';
    }
  }

  function appendMessage(role, content) {
    const wrapperEl = document.createElement('div');
    wrapperEl.className = `globlyn-message-wrapper ${role}`;

    const msgEl = document.createElement('div');
    msgEl.className = 'globlyn-message';

    const optionRegex = /\[(.*?)\]/g;
    let cleanText = content;
    let options = [];

    if (role === 'bot') {
      let match;
      while ((match = optionRegex.exec(content)) !== null) {
        options.push(match[1]);
      }
      cleanText = content.replace(optionRegex, '').trim();
    }

    let formattedContent = cleanText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    msgEl.innerHTML = formattedContent.replace(/\n/g, '<br/>');
    wrapperEl.appendChild(msgEl);

    if (options.length > 0) {
      const optionsContainer = document.createElement('div');
      optionsContainer.style.display = 'flex';
      optionsContainer.style.flexWrap = 'wrap';
      optionsContainer.style.gap = '8px';
      optionsContainer.style.marginTop = '8px';

      options.forEach(optText => {
        const btn = document.createElement('button');
        btn.className = 'globlyn-option-btn';
        btn.textContent = optText;
        btn.onclick = () => {
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

    inputEl.value = '';
    inputEl.disabled = true;
    sendBtn.disabled = true;

    appendMessage('user', text);
    showTyping();

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: chatHistory })
      });

      const data = await response.json();
      hideTyping();

      if (response.ok && data.reply) {
        appendMessage('bot', data.reply);
        chatHistory.push({ role: 'user', content: text });
        chatHistory.push({ role: 'model', content: data.reply });
      } else {
        appendMessage('bot', 'Error processing request. Connections dropped.');
      }
    } catch (error) {
      hideTyping();
      appendMessage('bot', 'Network disconnected. Please check server protocols.');
    } finally {
      inputEl.disabled = false;
      sendBtn.disabled = false;
      inputEl.focus();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
