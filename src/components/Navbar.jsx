import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = ["home", "about", "skills", "contact"]

  function handleScroll(id) {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 52
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const resumeStyle = {
    fontFamily: "monospace",
    fontSize: "11px",
    padding: "5px 14px",
    textDecoration: "none",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    transition: "all 0.4s",
  }

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 2rem",
        height: "52px",
        backgroundColor: scrolled ? "rgba(237,232,220,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(6px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(107,30,30,0.15)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <span style={{
        fontFamily: "monospace",
        fontSize: "12px",
        color: scrolled ? "#6B1E1E" : "transparent",
        letterSpacing: "0.2em",
        fontWeight: "bold",
        transition: "color 0.4s",
      }}>
        cj.
      </span>

      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        {links.map((link, i) => (
          <span
            key={i}
            onClick={() => handleScroll(link)}
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              color: scrolled ? "#2C1810" : "transparent",
              cursor: "pointer",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              transition: "color 0.4s",
              pointerEvents: scrolled ? "auto" : "none",
            }}
            onMouseEnter={e => { if (scrolled) e.target.style.color = "#6B1E1E" }}
            onMouseLeave={e => { if (scrolled) e.target.style.color = "#2C1810" }}
          >
            {link}
          </span>
        ))}
        {scrolled && (
          
            href="/resume.pdf"
            download="Charu_Jain_Resume.pdf"
            style={{
              ...resumeStyle,
              color: "#EDE8DC",
              backgroundColor: "#6B1E1E",
            }}
          >
            resume
          </a>
        )}
      </div>
    </motion.nav>
  )
}