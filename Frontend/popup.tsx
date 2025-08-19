import React from "react"

function Popup() {
  return (
    <div
      style={{
        background:"linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        
        width: "300px",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
        padding: "16px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "12px", paddingLeft:"10px",marginTop:"0px",color:"#ccc" }}>
        Model
      </h2>

      <div
        style={{
          background:"linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          border: "1px solid #ccc",
          color:"#ccc",
          borderRadius: "8px",
          padding: "12px",
          fontSize: "15px",
          fontWeight: "500",
          backgroundColor: "#f9f9f9",
          textAlign: "center",
        }}
      >
        Gemini-1.5-flash
      </div>
    </div>
  )
}

export default Popup
