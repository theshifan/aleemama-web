import Home from "./Home";
import aleemamaImg from "../assets/aleemama_face.png"
import { useState,useEffect } from "react";


export default function Aleemama() {
  const [phase, setPhase] = useState("idle"); // idle → ready → split

  useEffect(() => {
    // Inject global resets cleanly
    const style = document.createElement("style");
    style.innerHTML = `
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html, body, #root { width: 100%; height: 100%; overflow: hidden; background: #fff; }
    `;
    document.head.appendChild(style);

    const t1 = setTimeout(() => setPhase("ready"), 300);
    const t2 = setTimeout(() => setPhase("split"), 800);
    
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.head.removeChild(style);
    };
  }, []);

  const animating = phase === "ready" || phase === "split";
  const isSplit = phase === "split";

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      overflow: "hidden",
      fontFamily: "'Nunito', 'Comic Sans MS', cursive",
    }}>

      {/* ── BACKGROUND CONTENT LAYER ── */}
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: isSplit ? 1 : 0,
        transition: "opacity 0.6s ease 0.5s",
        zIndex: 1,
      }}>
        {/* Your actual dashboard components render underneath the split curtains */}
        <Home/>
      </div>

      {/* ── SPLITTING TOP CURTAIN ── */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, width: "100%", height: "50%",
        background: "#ffffff",
        zIndex: 5,
        transform: isSplit ? "translateY(-100%)" : "translateY(0)",
        transition: animating ? "transform 0.85s cubic-bezier(0.77,0,0.18,1)" : "none",
      }}>
        {/* Intro Curtain Logo */}
        <div style={{
          position: "absolute", bottom: 80, left: "50%",
          transform: "translateX(-50%)", width: 150, zIndex: 6,
        }}>
          <img src={aleemamaImg} alt="Grandma" style={{ width: "100%", display: "block" }} />
        </div>

        {/* Intro Subtitle */}
        <div style={{
          position: "absolute", bottom: 44, width: "100%",
          textAlign: "center", fontSize: "clamp(1.4rem, 4vw, 2.4rem)",
          fontWeight: 800, color: "#4d351c",
          letterSpacing: "0.04em", zIndex: 6,
        }}>
          official website
        </div>

        {/* Edge Dashed Trim */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, width: "100%", height: 20,
          background: "#f5d533", zIndex: 6,
        }}>
          <svg width="100%" height="20">
            <line x1="0" y1="10" x2="100%" y2="10"
              stroke="white" strokeWidth="5"
              strokeDasharray="28,14" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* ── SPLITTING BOTTOM CURTAIN ── */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, width: "100%", height: "50%",
        background: "#f5d533",
        zIndex: 5,
        transform: isSplit ? "translateY(100%)" : "translateY(0)",
        transition: animating ? "transform 0.85s cubic-bezier(0.77,0,0.18,1)" : "none",
        display: "flex", flexDirection: "column",
      }}>
        {/* Wavy Interface Divider */}
        {/* <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", display: "block", flexShrink: 0 }}
          preserveAspectRatio="none">
          <path
            d="M0,25 C80,0 160,50 240,25 C320,0 400,50 480,25 C560,0 640,50 720,25 C800,0 880,50 960,25 C1040,0 1120,50 1200,25 C1280,0 1360,50 1440,25 L1440,50 L0,50 Z"
            fill="#f5d533"
          />
        </svg> */}

        {/* Dashed line */}
        <div style={{ width: "100%", padding: "2px 0 6px" }}>
          <svg width="100%" height="16">
            <line x1="0" y1="8" x2="100%" y2="8"
              stroke="white" strokeWidth="5"
              strokeDasharray="28,14" strokeLinecap="round" />
          </svg>
        </div>

        {/* Giant Intro Branding Title */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{
            fontSize: "clamp(3.5rem, 14vw, 9rem)", fontWeight: 900,
            color: "#ffffff", letterSpacing: "0.03em",
            // fontFamily: "'Nunito', 'Arial Rounded MT Bold', sans-serif",
            lineHeight: 1, userSelect: "none",
            fontFamily: "'Nunito', 'Comic Sans MS', cursive",
          }}>
            aleeMAMA
          </span>
        </div>
      </div>

    </div>
  );
}



















