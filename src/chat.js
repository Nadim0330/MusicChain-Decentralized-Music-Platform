import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getChatContract } from "./utils/chatContract";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #121212;
  color: white;
`;

const MessagesContainer = styled.div`
  width: 80%;
  height: 70vh;
  overflow-y: auto;
  padding: 20px;
  border: 1px solid white;
  margin-bottom: 10px;
`;

const MessageInput = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background: #ff9900;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
`;

export default function Chat() {
  const { owner } = useParams(); // Get recipient's wallet address
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    async function loadMessages() {
      try {
        const contract = await getChatContract();
        if (!contract) return;

        const chatMessages = await contract.getMessages(owner);
        const formattedMessages = chatMessages.map((msg) => ({
          sender: msg.sender,
          text: msg.text,
          timestamp: new Date(Number(msg.timestamp) * 1000).toLocaleString(), // Convert BigInt to Number
        }));

        setMessages(formattedMessages);
      } catch (error) {
        console.error("Error loading messages:", error);
      }
    }

    if (owner) loadMessages();
  }, [owner]);

  async function sendMessage() {
    if (!newMessage) return;

    try {
      const contract = await getChatContract();
      if (!contract) return;

      const tx = await contract.sendMessage(owner, newMessage);
      await tx.wait();

      setMessages([...messages, { sender: "You", text: newMessage, timestamp: new Date().toLocaleString() }]);
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }

  return (
    <Container>
      <h2>Chat with {owner.slice(0, 6)}...{owner.slice(-4)}</h2>
      <MessagesContainer>
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.sender.slice(0, 6)}...</strong>: {msg.text} <br />
            <small>{msg.timestamp}</small>
          </p>
        ))}
      </MessagesContainer>
      <MessageInput
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <Button onClick={sendMessage}>Send</Button>
    </Container>
  );
}
