import React, { useState, useEffect, useRef } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPaperPlane, FaTimes } from "react-icons/fa";
import "./chatbot.css";
import chatbotIcon from "../Asset/chatbot.png";
// import pavalsoftLogo from "../Asset/Paval Soft - LOGO 1.svg";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([{ sender: "bot", text: "Hello! How can I assist you today?" }]);
    }, 60000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const generateBotResponse = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput.includes("hello") || userInput.includes("hi")) {
      return "Hello! How can I assist you today?";
    } else if (userInput.includes("services") || userInput.includes("service")) {
      return "We offer a wide range of services including Web Development, Mobile Applications, AI, and more. How can I help you?";
    } else if (userInput.includes("contact")) {
      return "You can reach us at support@pavalsoft.com or call us at +123 456 7890.";
    } else if (userInput.includes("thank you")) {
      return "You're welcome! Let me know if you need further assistance.";
    } else {
      return "I'm sorry, I didn't understand that. Can you please clarify?";
    }
  };

  const sendMessage = () => {
    if (input.trim() === "") return;
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      setMessages([...newMessages, { sender: "bot", text: generateBotResponse(input) }]);
    }, 1000);
  };

  return (
    <div
      className={`chatbot-container position-fixed bottom-0 end-0 m-3 ${isOpen ? "open" : ""}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {!isOpen && (
        <img
          src={chatbotIcon}
          alt="Chatbot"
          className="chatbot-icon"
          onClick={() => setIsOpen(true)}
          style={{ width: "60px", height: "60px", marginRight: "0px" }}
        />
      )}
      {isOpen && (
        <div className="chat-window bg-black border rounded shadow p-2" style={{paddingTop:"0px"
        }}>
          <div
            className="chat-header d-flex justify-content-between align-items-center text-white"
            style={{ backgroundColor: "#000", borderRadius: "5px 5px 0 0" }}
          >
            <div className="d-flex align-items-center">
              {/* <img
                src={pavalsoftLogo}
                alt="PavalSoft Logo"
                style={{ width: "90px", height: "30px", marginRight: "10px" }}
              /> */}
              <strong style={{ fontSize: "15px", height: "10px", width: "65px", textAlign: "center", flex: "1", color: "#8ec440" }}>Chatbot</strong>
            </div>
            <Button variant="outline-green" size="sm" onClick={() => setIsOpen(false)}style={{paddingRight:"5px",marginBottom:"0px"}}>
              <FaTimes size={25} color="#8ec440"  style={{padding:"10px 1px 0px 7px "}}/>
            </Button>
          </div>
          <div
            ref={chatBodyRef}
            className="chat-body"
            style={{
              maxHeight: "300px",
              overflowY: "auto",
              minHeight: "300px",
              backgroundColor: "#000",
              width: "270px", // Set width to 300px
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`d-flex my-2 ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"}`}
              >
                <div
                  className="p-2 rounded"
                  style={{
                    backgroundColor: msg.sender === "user" ? "#8ec440" : "#1b1b1a", // Gray background for received messages
                    color: msg.sender === "user" ? "#000" : "#fff", // White text for received messages
                    borderRadius: "5px",
                    maxWidth: "75%",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <InputGroup className="mt-2">
            <Form.Control
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                border: "2px solid #8EC440",
                padding: "10px 20px 10px 10px",
                width: "40px",
              }}
            />
            <Button
              onClick={sendMessage}
              style={{
                backgroundColor: "#8EC440",
                color: "#000",
                border: "2px solid #8EC440",
              }}
            >
              <FaPaperPlane color="#ddd" />
            </Button>
          </InputGroup>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
