import type { PlasmoCSConfig } from "plasmo"
import { useEffect, useState, useRef } from "react"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}

export default function explainButton() {

  const [popupVisible, setPopupVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedText, setSelectedText] = useState("")
  const [responseText, setResponseText] = useState(null);
  const timeout = useRef(null)
  useEffect(() => {
    const handleEvent = (e) => {
      const selection = window.getSelection()
      const text = selection?.toString().trim()

      if (text) {
        const rect = selection.getRangeAt(0).getBoundingClientRect();
        setPosition({
          x: rect.right + 10 + window.scrollX,
          y: rect.top + window.scrollY,
        });
        setSelectedText(text)
        setPopupVisible(true)
        setResponseText(null)

        if (timeout.current) {
          clearTimeout(timeout.current);
        }

      } else {
        setPopupVisible(false)
        setResponseText(null)
      }
    }
    const handleClickAnywhere = (e) => {
      const selection = window.getSelection();
      if (!selection || selection.toString().trim() === "") {
        setPopupVisible(false);
        setResponseText(null)
      }
    };

    document.addEventListener("mouseup", handleEvent);
    document.addEventListener("mousedown", handleClickAnywhere);

    return () => {
      document.removeEventListener("mouseup", handleEvent);
      document.removeEventListener("mousedown", handleClickAnywhere);
      clearTimeout(timeout.current)
    }
  }, [])

  const handleExplain = async () => {
    try {
      const response = await fetch("http://127.0.0.1:3000/api/explain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: selectedText })
      });

      const data = await response.json();
      setResponseText(data.explanation || JSON.stringify(data))

    } catch (error) {
      console.error("error in send back text ", error)
    }
  }

  return (
    <>
      {popupVisible && (
       <div
          style={{
            position: "absolute",
            top: `${position.y}px`,
            left: `${position.x}px`,
            backgroundColor: responseText ? "#333" : "#007bff",
            color: "white",
            padding: "8px 14px",
            borderRadius: "6px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            fontSize: "14px",
            maxWidth:responseText ? "1000px" : "auto",
            display:responseText ? "inline-block" : "none",
            zIndex: 9999
          }}
        >
          {responseText ? (
            <div>{responseText}</div>
          ) : (
            <button
              onClick={handleExplain}
              style={{
                background: "none",
                color: "white",
                border: "none",
                fontSize: "14px",
                cursor: "pointer",
                maxWidth:"200px",
              }}
            >
              Explain
            </button>
          )}
        </div>
      )}
    </>

  )
}