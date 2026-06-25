import aleemamaImg from '../assets/aleemama_face.png';
import Footer from "../assets/component/Footer";
import ChatbotButton from "../assets/component/Chatbot_button";
import MenuBar from "../assets/component/MenuBar";

export default function ContactUs({ onNavigate }) {
  return (
    <div style={{
      position: "relative", inset: 0,
      minHeight: "100vh",
      background: "#ffffff",
      fontFamily: "'Nunito', 'Comic Sans MS', cursive",
      overflow: "hidden",
    }}>
      <MenuBar onNavigate={onNavigate} />

      {/* ── MAIN AREA (below topbar) ── */}
      <div style={{
        position: "absolute",
        top: 64, left: 0, right: 0, bottom: 0,
        display: "flex",
        flexDirection: "column",
      }}>

        {/* ── CONTENT ROW ── */}
        <div style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          position: "relative",
          overflow: "hidden",
        }}>

          {/* LEFT: Contact info */}
          <div style={{
            flex: 1,
            padding: "28px 28px 28px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}>

            {/* Title — LEFT aligned */}
            <h1 style={{
              // fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              fontSize:50,
              fontWeight: 900,
              color: "#5a2a1a",
              margin: "0 0 6px 0",
              textAlign: "left",
              fontFamily: "'Nunito', 'Comic Sans MS', cursive",
            }}>
              Contact Us
            </h1>

            {/* Dashed underline — directly under title */}
            <svg width="400" height="12" style={{ marginBottom: 24, marginTop: 24 }}>
              <line x1="0" y1="6" x2="2000" y2="6"
                stroke="#5a2a1a" strokeWidth="6.5"
                // padding-top = "200px"
                strokeDasharray="10,7" strokeLinecap="round" />
            </svg>

            {/* WhatsApp */}
            <div style={{
              display: "flex", alignItems: "center", gap: 4,
              // fontSize: "clamp(1.1rem, 3vw, 1.5rem)"
              fontSize:50,
              fontWeight: 800, color: "#5a2a1a",
              marginBottom: 18,
            }}>
              <svg width="78" height="78" viewBox="0 0 24 24" fill="none"
                stroke="#5a2a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              <span>: +91 9961561514</span>
            </div>

            {/* Phone */}
            <div style={{
              display: "flex", alignItems: "center", gap: 4,
              // fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
              fontWeight: 800, color: "#5a2a1a",fontSize:50
            }}>
              <svg width="78" height="78" viewBox="0 0 24 24" fill="none"
                stroke="#5a2a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.47 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>: +91 8714431636</span>
            </div>

          </div>

          {/* RIGHT: Grandma — pinned to bottom right */}
          <div style={{
            width: "50%",
            maxWidth: 3040,
            flexShrink: 0,
            position: "relative",
          }}>
            {/* Vertical divider */}
            <div style={{
              position: "absolute",
              left: 0, top: 0, bottom: 0,
              width: 9.5,
              background: "#f5d533",
            }} />
            {/* Grandma image bottom-aligned */}
            <img
              src={aleemamaImg}
              alt="aleeMAMA"
              style={{
                position: "absolute",
                bottom: 150,
                right: 0,
                width: "100%",
                height: "auto",
                objectFit: "contain",
                objectPosition: "bottom right",
              }}
            />
          </div>

        </div>

        {/* ── FOOTER ── */}
        {/* <Footer /> */}

      </div>

      {/* <ChatbotButton /> */}
    </div>
  );
}