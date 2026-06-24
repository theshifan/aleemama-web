// src/component/Footer.jsx
export default function Footer() {
  return (
    <div style={{ 
      position: "fixed", 
      bottom: 0, 
      left: 0, 
      right: 0, 
      zIndex: 10, // Keeps it above standard page elements
      pointerEvents: "none" // Ensures elements underneath remain clickable if needed
    }}>
      {/* Container wrapper for the footer structure */}
      <div style={{ position: "relative", pointerEvents: "auto" }}>
        


        {/* Yellow bottom block */}
                  <div style={{
            background: "#f5d533",
            height: "20vh",
            display: "flex", alignItems: "flex-start",
            paddingTop: 12,
          }}>
            <svg width="100%" height="16">
              <line x1="0" y1="8" x2="100%" y2="8"
                stroke="white" strokeWidth="4"
                strokeDasharray="28,14" strokeLinecap="round" />
            </svg>
          </div>
      </div>
    </div>
  );
}