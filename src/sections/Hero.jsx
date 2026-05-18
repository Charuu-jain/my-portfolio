import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const FILM_WORDS = ["developer", "builder", "problem solver", "DSA nerd", "creator"]

const STICKERS = [
  { src: "/stickers/star.png",        top: "10%", left: "5%",   size: 130, rot: -15 },
  { src: "/stickers/camera.png",      top: "8%",  right: "6%",  size: 140, rot: 12  },
  { src: "/stickers/laptop.png",      top: "55%", left: "2%",   size: 125, rot: -8  },
  { src: "/stickers/microphone.png",  top: "58%", right: "3%",  size: 120, rot: 10  },
  { src: "/stickers/exclamation.png", top: "22%", left: "14%",  size: 85,  rot: 5   },
  { src: "/stickers/plaid.png",       top: "70%", left: "20%",  size: 110, rot: -12 },
]

function MusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  function toggle() {
    if (!audioRef.current) return
    if (playing) { audioRef.current.pause(); setPlaying(false) }
    else         { audioRef.current.play();  setPlaying(true)  }
  }

  return (
    <motion.div
      className="music-player"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      onClick={toggle}
      style={{
        position: "absolute", bottom: "48px", right: "32px",
        display: "flex", alignItems: "center", gap: "10px",
        backgroundColor: "#2C1810", padding: "10px 18px",
        cursor: "pointer", userSelect: "none", zIndex: 10,
        boxShadow: "4px 4px 0px #6B1E1E",
      }}
    >
      <audio ref={audioRef} src="/espresso.mp3" loop />
      <span style={{ fontSize: "16px" }}>{playing ? "⏸" : "▶"}</span>
      <div>
        <p style={{ fontFamily: "monospace", fontSize: "11px", color: "#EDE8DC", letterSpacing: "0.1em", margin: 0 }}>espresso</p>
        <p style={{ fontFamily: "monospace", fontSize: "9px", color: "#6B1E1E", letterSpacing: "0.1em", margin: 0 }}>sabrina carpenter</p>
      </div>
      {playing && (
        <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: "16px" }}>
          {[6, 12, 8, 14].map((h, i) => (
            <div key={i} style={{
              width: "3px", height: `${h}px`,
              backgroundColor: "#6B1E1E", borderRadius: "1px",
              animation: `eq 0.${6 + i}s ease-in-out infinite alternate`
            }} />
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default function Hero() {
  const indexRef  = useRef(0)
  const typingRef = useRef(null)

  useEffect(() => {
    let timeout
    let charIndex = 0
    let deleting  = false
    function type() {
      const word = FILM_WORDS[indexRef.current]
      if (!deleting) {
        charIndex++
        if (typingRef.current) typingRef.current.textContent = word.slice(0, charIndex)
        if (charIndex === word.length) { deleting = true; timeout = setTimeout(type, 1500); return }
      } else {
        charIndex--
        if (typingRef.current) typingRef.current.textContent = word.slice(0, charIndex)
        if (charIndex === 0) { deleting = false; indexRef.current = (indexRef.current + 1) % FILM_WORDS.length }
      }
      timeout = setTimeout(type, deleting ? 60 : 100)
    }
    timeout = setTimeout(type, 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="home" className="grain" style={{
      minHeight: "100vh",
      backgroundColor: "#EDE8DC",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>

      <div className="scanline" />

      <div style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(44,24,16,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(44,24,16,0.045) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div style={{ position:"absolute", top:0, left:0, right:0, height:"44px", backgroundColor:"#2C1810", display:"flex", alignItems:"center", overflow:"hidden", zIndex:10 }}>
        <div className="animate-marquee" style={{ display:"flex", gap:"16px", whiteSpace:"nowrap" }}>
          {Array(20).fill("◼ CHARU JAIN ◼ PORTFOLIO ◼ 2025 ◼").map((t, i) => (
            <span key={i} style={{ color:"#EDE8DC", fontSize:"11px", fontFamily:"monospace", letterSpacing:"0.25em" }}>{t}</span>
          ))}
        </div>
      </div>

      {STICKERS.map((s, i) => (
        <motion.img
          key={i}
          className="sticker"
          src={s.src}
          alt=""
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{
            opacity: 1, scale: 1,
            rotate: [s.rot, s.rot + 4, s.rot],
          }}
          transition={{
            opacity:  { duration: 0.5, delay: i * 0.12 + 0.3 },
            scale:    { duration: 0.5, delay: i * 0.12 + 0.3 },
            rotate:   { duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
          }}
          style={{
            position: "absolute",
            top:   s.top,
            left:  s.left  || "auto",
            right: s.right || "auto",
            width: s.size,
            height: s.size,
            objectFit: "contain",
            pointerEvents: "none",
            userSelect: "none",
            filter: "drop-shadow(2px 4px 8px rgba(0,0,0,0.2))",
            zIndex: 2,
          }}
        />
      ))}

      <div style={{ textAlign:"center", position:"relative", zIndex:5, padding:"0 1rem" }}>

        <motion.p
          initial={{ opacity:0, y:16 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          style={{ color:"#6B1E1E", fontFamily:"monospace", fontSize:"12px", letterSpacing:"0.35em", textTransform:"uppercase", marginBottom:"1rem" }}
        >
          ▶ now playing — my story
        </motion.p>

        <motion.div
          initial={{ opacity:0, y:30 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.9, delay:0.2 }}
        >
          <h1
            className="glitch"
            data-text="CHARU"
            style={{ fontFamily:"monospace", fontWeight:"bold", fontSize:"clamp(4rem,16vw,11rem)", lineHeight:1, color:"#2C1810", margin:0 }}
          >
            CHARU
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity:0, y:30 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.9, delay:0.35 }}
        >
          <h2 style={{ fontFamily:"monospace", fontWeight:"bold", fontSize:"clamp(2.5rem,10vw,7rem)", lineHeight:1, color:"#6B1E1E", marginBottom:"1.5rem" }}>
            JAIN
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.8 }}
          style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px", fontFamily:"monospace", fontSize:"clamp(0.9rem,3vw,1.1rem)", color:"#2C1810" }}
        >
          <span style={{ color:"#6B1E1E" }}>{">"}</span>
          <span ref={typingRef}></span>
          <span className="animate-pulse" style={{ color:"#6B1E1E" }}>_</span>
        </motion.div>

        <motion.p
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:1.4 }}
          style={{ marginTop:"2.5rem", fontFamily:"monospace", fontSize:"11px", color:"#2C1810", opacity:0.45, letterSpacing:"0.25em" }}
        >
          scroll to explore ↓
        </motion.p>
      </div>

      <MusicPlayer />

      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"32px", backgroundColor:"#2C1810" }} />

    </section>
  )
}