import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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
    setMenuOpen(false)
  }

  return (
    <>
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
          padding: "0 1.5rem",
          height: "52px",
          backgroundColor: scrolled ? "rgba(237,232,220,0.15)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(107,30,30,0.12)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        {/* Logo — only shows when scrolled */}
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

        {/* Desktop links */}
        <div style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
          className="desktop-nav"
        >
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
            <a href="/resume.pdf" download="Charu_Jain_Resume.pdf" style={{
              fontFamily: "monospace",
              fontSize: "11px",
              color: "#EDE8DC",
              backgroundColor: "#6B1E1E",
              padding: "5px 14px",
              textDecoration: "none",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}>
              resume
            </a>
          )}
        </div>

        {/* Hamburger — mobile only */}
        {scrolled && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
              flexDirection: "column",
              gap: "5px",
              padding: "4px",
            }}
          >
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                width: "22px",
                height: "2px",
                backgroundColor: "#2C1810",
                transition: "all 0.3s",
                transform: menuOpen
                  ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                  : i === 1 ? "opacity: 0"
                  : "rotate(-45deg) translate(5px, -5px)"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        )}
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: "fixed",
              top: "52px", left: 0, right: 0,
              zIndex: 99,
              backgroundColor: "rgba(237,232,220,0.95)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderBottom: "1px solid rgba(107,30,30,0.15)",
              display: "flex",
              flexDirection: "column",
              padding: "1rem 1.5rem",
              gap: "0px",
            }}
          >
            {links.map((link, i) => (
              <span
                key={i}
                onClick={() => handleScroll(link)}
                style={{
                  fontFamily: "monospace",
                  fontSize: "13px",
                  color: "#2C1810",
                  cursor: "pointer",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(107,30,30,0.1)",
                }}
              >
                {link}
              </span>
            ))}
            <a href="/resume.pdf" download="Charu_Jain_Resume.pdf" style={{
              fontFamily: "monospace",
              fontSize: "13px",
              color: "#EDE8DC",
              backgroundColor: "#6B1E1E",
              padding: "14px 0",
              textDecoration: "none",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textAlign: "center",
              marginTop: "8px",
            }}>
              resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 600px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}