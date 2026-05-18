import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" style={{
      minHeight: "100vh",
      backgroundColor: "#1a0a0a",
      padding: "6rem 5rem",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}>

      <div style={{ position:"absolute", top:0, left:0, right:0, height:"36px", backgroundColor:"#6B1E1E", display:"flex", alignItems:"center", overflow:"hidden" }}>
        <div className="animate-marquee" style={{ display:"flex", gap:"12px", whiteSpace:"nowrap" }}>
          {Array(20).fill("✦ LET'S TALK ✦ GET IN TOUCH ✦ HIRE ME ✦").map((t, i) => (
            <span key={i} style={{ color:"#EDE8DC", fontSize:"11px", fontFamily:"monospace", letterSpacing:"0.2em" }}>{t}</span>
          ))}
        </div>
      </div>

      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(237,232,220,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(237,232,220,0.03) 1px,transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div style={{ position:"relative", zIndex:1, maxWidth:"800px", margin:"0 auto", width:"100%" }}>

        <motion.p
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          viewport={{ once:true }}
          style={{ color:"#6B1E1E", fontFamily:"monospace", fontSize:"12px", letterSpacing:"0.3em", textTransform:"uppercase", marginBottom:"1rem" }}
        >
          ▶ level 03
        </motion.p>

        <motion.h2
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
          style={{ fontFamily:"monospace", fontSize:"clamp(2.5rem,8vw,6rem)", fontWeight:"bold", color:"#EDE8DC", lineHeight:1, marginBottom:"1rem" }}
        >
          let's
        </motion.h2>

        <motion.h2
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.8, delay:0.15 }}
          viewport={{ once:true }}
          style={{ fontFamily:"monospace", fontSize:"clamp(2.5rem,8vw,6rem)", fontWeight:"bold", color:"#6B1E1E", lineHeight:1, marginBottom:"3rem" }}
        >
          talk.
        </motion.h2>

        <motion.p
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ delay:0.3 }}
          viewport={{ once:true }}
          style={{ fontFamily:"monospace", fontSize:"15px", color:"#D4C5A9", lineHeight:1.8, marginBottom:"3rem", maxWidth:"480px" }}
        >
          open to internships, collabs, or just a good conversation.
          drop a message and i'll get back to you. 🍜
        </motion.p>

        <div style={{ display:"flex", flexDirection:"column", gap:"1px" }}>
          {[
            { label: "email", value: "your@gmail.com", href: "mailto:your@gmail.com?subject=Hey Charu!&body=Hi Charu, I wanted to reach out..." },
            { label: "github", value: "github.com/Charuu-jain", href: "https://github.com/Charuu-jain" },
            { label: "linkedin", value: "linkedin.com/in/charu-jain", href: "https://www.linkedin.com/in/charu-jain-10b36b277/" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity:0, x:-20 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              viewport={{ once:true }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 8px",
                borderTop: "1px solid rgba(107,30,30,0.3)",
                textDecoration: "none",
                transition: "background 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(107,30,30,0.15)"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
            >
              <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}>
                <span style={{ fontFamily:"monospace", fontSize:"10px", color:"#6B1E1E", letterSpacing:"0.25em", textTransform:"uppercase", minWidth:"60px" }}>{item.label}</span>
                <span style={{ fontFamily:"monospace", fontSize:"13px", color:"#EDE8DC", letterSpacing:"0.05em", wordBreak:"break-all" }}>{item.value}</span>
              </div>
              <span style={{ fontFamily:"monospace", fontSize:"16px", color:"#6B1E1E", marginLeft:"8px", flexShrink:0 }}>↗</span>
            </motion.a>
          ))}
          <div style={{ borderTop:"1px solid rgba(107,30,30,0.3)" }} />
        </div>

        <motion.p
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ delay:0.6 }}
          viewport={{ once:true }}
          style={{ fontFamily:"monospace", fontSize:"11px", color:"#6B1E1E", letterSpacing:"0.2em", marginTop:"4rem", opacity:0.5 }}
        >
          © 2025 charu jain — built with react + vite + too much espresso ✦
        </motion.p>

      </div>
    </section>
  )
}