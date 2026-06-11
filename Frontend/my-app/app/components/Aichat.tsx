"use client";

import { useState } from "react";

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState<any>("");

  const askAI = async () => {
    if (!message.trim()) return;

    try {
      const res = await fetch(
        `http://localhost:8000/movies/recommend?q=${message}`
      );

      const data = await res.json();

      console.log("API RESPONSE:", data);

      setReply(data);
    } catch (error) {
      setReply("Server not responding");
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          borderRadius: "50%",
          fontSize: 30,
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        🤖
      </button>

      {/* Chat Box */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width: 350,
            background: "#111",
            color: "white",
            padding: 15,
            borderRadius: 10,
            zIndex: 1000,
          }}
        >
          <h3>🎬 AI Movie Assistant</h3>

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me about movies..."
            style={{
              width: "100%",
              padding: 10,
              marginTop: 10,
            }}
          />

          <button
            onClick={askAI}
            style={{
              marginTop: 10,
              width: "100%",
              padding: 10,
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: 5,
            }}
          >
            Send
          </button>

          {/* RESPONSE SAFE RENDER */}
          <div style={{ marginTop: 15, whiteSpace: "pre-wrap" }}>
            {typeof reply === "string"
              ? reply
              : JSON.stringify(reply, null, 2)}
          </div>
        </div>
      )}
    </>
  );
}