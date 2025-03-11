
// src/FAQChatbot.js
import React, { useState } from "react";
import { faqData } from "./faqData";
import "./../styles/FAQChatbot.css";

const FAQChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to manage chatbot visibility
  const [isMinimized, setIsMinimized] = useState(false); // State to manage minimized state

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user's message to the chat
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);

    // Find a matching FAQ answer
    const matchedFaq = faqData.find((faq) =>
      faq.question.toLowerCase().includes(input.toLowerCase())
    );

    // Add bot's response to the chat
    if (matchedFaq) {
      setMessages((prev) => [
        ...prev,
        { text: matchedFaq.answer, sender: "bot" },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, I couldn't find an answer to that question.", sender: "bot" },
      ]);
    }

    // Clear input field
    setInput("");
  };

  return (
    <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
      {/* Chatbot toggle button (small pop-up) */}
      {!isOpen && (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          QuikBot
        </button>
      )}

      {/* Chatbot content (expanded) */}
      {isOpen && (
        <div className="chatbot-content">
          <div className="chatbot-header">
            <h3>How may I help you?
                
            </h3>
            <button
              className="minimize-button"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              {isMinimized ? "↑" : "↓"}
            </button>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>

          {!isMinimized && (
            <>
              <div className="chatbot-messages">
                {messages.map((msg, index) => (
                  <div key={index} className={`message ${msg.sender}`}>
                    {msg.text}
                  </div>
                ))}
              </div>
              <div className="chatbot-input">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                />
                <button onClick={handleSend}>Send</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default FAQChatbot;