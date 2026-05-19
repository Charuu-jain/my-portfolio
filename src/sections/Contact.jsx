import { motion } from "framer-motion"
import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit() {
    if (!form.name || !form.email || !form.message) return
    const subject = encodeURIComponent("Hey Charu! from " + form.name)
    const body = encodeURIComponent("Name: " + form.name + "\nEmail: " + form.email + "\n\nMessage:\n" + form.message)
    window.open("mailto:charujain290605@gmail.com?subject=" + subject + "&body=" + body)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const inputStyle = {
    fontFamily: "monospace",
    fontSize: "13px",
    color: "#EDE8DC",
    backgroundColor: "rgba(237,232,220,0.05)",
    border: "1px solid rgba(107,30,30,0.4)",
    padding: "12px 16px",
    width: "100%",
    outline: "none",
    letterSpacing: "0.05em",
    boxSizing: "border-box",
  }

  const contactLinks = [
    { label: "email",    value: "charujain290605@gmail.com",           href: "mailto:charujain290605@gmail.com" },
    { label: "github",   value: "github.com/Charuu-jain",              href: "https://github.com/Charuu-jain" },
    { label: "linkedin", value: "linkedin.com/in/charu-jain",          href: "https://www.linkedin.com/in/charu-jain-10b36b277/" },
  ]

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
          {Array(20).fill("LETS TALK  GET IN TOUCH  HIRE ME").map((t, i) => (
            <span key={i} style={{ color:"#EDE8DC", fontSize:"11px", fontFamily:"monospace", letterSpacing:"0.2em" }}>{t}</span>
          ))}
        </div>
      </div>

      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(237,232,220,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(237,232,220,0.03) 1px,transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div style={{ position:"relative", zIndex:1, maxWidth:"900px", margin:"0 auto", width:"100%" }}>

        <motion.p
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          viewport={{ once:true }}
          style={{ color:"#6B1E1E", fontFamily:"monospace", fontSize:"12px", letterSpacing:"0.3em", textTransform:"uppercase", marginBottom:"1rem" }}
        >
          level 03
        </motion.p>

        <motion.h2
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
          style={{ fontFamily:"monospace", fontSize:"clamp(2.5rem,8vw,6rem)", fontWeight:"bold", color:"#EDE8DC", lineHeight:1, marginBottom:"0.5rem" }}
        >
          lets
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

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"start" }}>

          <div>
            <motion.p
              initial={{ opacity:0 }}
              whileInView={{ opacity:1 }}
              transition={{ delay:0.3 }}
              viewport={{ once:true }}
              style={{ fontFamily:"monospace", fontSize:"15px", color:"#D4C5A9", lineHeight:1.8, marginBottom:"2rem" }}
            >
              open to internships, collabs, or just a good conversation.
              drop a message and i will get back to you.
            </motion.p>

            <div style={{ display:"flex", flexDirection:"column", gap:"1px", marginBottom:"2rem" }}>
              {contactLinks.map((item, i) => (
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
                    padding: "16px 8px",
                    borderTop: "1px solid rgba(107,30,30,0.3)",
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = "rgba(107,30,30,0.15)" }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent" }}
                >
                  <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}>
                    <span style={{ fontFamily:"monospace", fontSize:"10px", color:"#6B1E1E", letterSpacing:"0.25em", textTransform:"uppercase", minWidth:"60px" }}>{item.label}</span>
                    <span style={{ fontFamily:"monospace", fontSize:"12px", color:"#EDE8DC" }}>{item.value}</span>
                  </div>
                  <span style={{ color:"#6B1E1E", fontSize:"14px" }}>{"↗"}</span>
                </motion.a>
              ))}
              <div style={{ borderTop:"1px solid rgba(107,30,30,0.3)" }} />
            </div>

            
              href="/resume.pdf"
              download="Charu_Jain_Resume.pdf"
              style={{
                display: "inline-block",
                fontFamily: "monospace",
                fontSize: "12px",
                color: "#EDE8DC",
                backgroundColor: "#6B1E1E",
                padding: "12px 28px",
                textDecoration: "none",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              download resume
            </a>
          </div>

          <motion.div
            initial={{ opacity:0, x:30 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:0.8, delay:0.2 }}
            viewport={{ once:true }}
            style={{ display:"flex", flexDirection:"column", gap:"16px" }}
          >
            <input
              name="name"
              placeholder="your name"
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              name="email"
              placeholder="your email"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />
            <textarea
              name="message"
              placeholder="your message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              style={{ ...inputStyle, resize:"vertical" }}
            />
            <button
              onClick={handleSubmit}
              style={{
                fontFamily: "monospace",
                fontSize: "12px",
                color: "#EDE8DC",
                backgroundColor: sent ? "#2C1810" : "#6B1E1E",
                border: "none",
                padding: "14px 28px",
                cursor: "pointer",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                transition: "all 0.3s",
                alignSelf: "flex-start",
              }}
            >
              {sent ? "message sent" : "send message"}
            </button>
          </motion.div>

        </div>

        <motion.p
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ delay:0.6 }}
          viewport={{ once:true }}
          style={{ fontFamily:"monospace", fontSize:"11px", color:"rgba(107,30,30,0.5)", letterSpacing:"0.2em", marginTop:"4rem" }}
        >
          2025 charu jain — built with react + vite + too much espresso
        </motion.p>

      </div>
    </section>
  )
}