import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const SKILLS = [
  { name: "Java",     level: 85, tag: "OOP + DSA",        devicon: "devicon-java-plain colored" },
  { name: "Python",   level: 40, tag: "scripting + logic", devicon: "devicon-python-plain colored" },
  { name: "HTML/CSS", level: 90, tag: "structure + style", devicon: "devicon-html5-plain colored" },
  { name: "SQL",      level: 70, tag: "queries + joins",   devicon: "devicon-mysql-plain colored" },
  { name: "DSA",      level: 30, tag: "arrays → graphs",   devicon: "devicon-cplusplus-plain colored" },
]

const BOOT_LINES = [
  "> initializing charu.exe ...",
  "> loading skill modules ...",
  "> java.class          [OK]",
  "> python.py           [OK]",
  "> html_css.style      [OK]",
  "> sql.query           [OK]",
  "> dsa.algorithms      [OK]",
  "> all systems go. ✦",
]

export default function Skills() {
  const [visibleLines, setVisibleLines] = useState([])
  const [booted, setBooted]             = useState(false)
  const [bars, setBars]                 = useState(false)
  const sectionRef = useRef(null)
  const hasRun     = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true
          runBoot()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  function runBoot() {
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, line])
        if (i === BOOT_LINES.length - 1) {
          setTimeout(() => { setBooted(true); setTimeout(() => setBars(true), 200) }, 400)
        }
      }, i * 320)
    })
  }

  return (
    <section ref={sectionRef} id="skills" style={{
      minHeight: "100vh",
      backgroundColor: "#EDE8DC",
      padding: "6rem 5rem",
      position: "relative",
      overflow: "hidden",
    }}>

      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(44,24,16,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(44,24,16,0.04) 1px,transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div style={{ position:"absolute", top:0, left:0, right:0, height:"36px", backgroundColor:"#6B1E1E", display:"flex", alignItems:"center", overflow:"hidden" }}>
        <div className="animate-marquee" style={{ display:"flex", gap:"12px", whiteSpace:"nowrap" }}>
          {Array(20).fill("✦ SKILLS ✦ TECH STACK ✦ WHAT I KNOW ✦").map((t, i) => (
            <span key={i} style={{ color:"#EDE8DC", fontSize:"11px", fontFamily:"monospace", letterSpacing:"0.2em" }}>{t}</span>
          ))}
        </div>
      </div>

      <div className="skills-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"start", marginTop:"2rem", position:"relative", zIndex:1 }}>

        <div>
          <motion.p
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            viewport={{ once:true }}
            style={{ color:"#6B1E1E", fontFamily:"monospace", fontSize:"12px", letterSpacing:"0.3em", textTransform:"uppercase", marginBottom:"1rem" }}
          >
            ▶ level 02
          </motion.p>

          <motion.h2
            initial={{ opacity:0, x:-30 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:0.7 }}
            viewport={{ once:true }}
            style={{ fontFamily:"monospace", fontSize:"clamp(2rem,4vw,3.5rem)", fontWeight:"bold", color:"#2C1810", lineHeight:1.1, marginBottom:"2rem" }}
          >
            what i<br />
            <span style={{ color:"#6B1E1E" }}>know.</span>
          </motion.h2>

          <div style={{ backgroundColor:"#1a0a0a", border:"1px solid #6B1E1E", boxShadow:"6px 6px 0px #6B1E1E" }}>
            <div style={{ backgroundColor:"#2C1810", padding:"8px 16px", display:"flex", alignItems:"center", gap:"8px", borderBottom:"1px solid #6B1E1E" }}>
              <div style={{ width:"10px", height:"10px", borderRadius:"50%", backgroundColor:"#6B1E1E" }} />
              <div style={{ width:"10px", height:"10px", borderRadius:"50%", backgroundColor:"#8B3A3A" }} />
              <div style={{ width:"10px", height:"10px", borderRadius:"50%", backgroundColor:"#4a1a1a" }} />
              <span style={{ fontFamily:"monospace", fontSize:"11px", color:"#6B1E1E", marginLeft:"8px", letterSpacing:"0.1em" }}>charu@portfolio ~ skills</span>
            </div>

            <div style={{ padding:"20px", minHeight:"260px" }}>
              {visibleLines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity:0, x:-10 }}
                  animate={{ opacity:1, x:0 }}
                  transition={{ duration:0.2 }}
                  style={{
                    fontFamily: "monospace",
                    fontSize: "13px",
                    marginBottom: "6px",
                    color: line.includes("[OK]")   ? "#4ade80"
                         : line.includes("✦")      ? "#EDE8DC"
                         : line.startsWith(">")    ? "#6B1E1E"
                         : "#D4C5A9",
                  }}
                >
                  {line}
                  {i === visibleLines.length - 1 && !booted && (
                    <span className="animate-pulse" style={{ color:"#6B1E1E" }}>█</span>
                  )}
                </motion.p>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-bars" style={{ paddingTop:"5rem" }}>
          {SKILLS.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity:0, x:30 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              viewport={{ once:true }}
              style={{ marginBottom:"1.8rem" }}
            >
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"6px" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
                  <i className={skill.devicon} style={{ fontSize:"20px" }} />
                  <span style={{ fontFamily:"monospace", fontSize:"14px", fontWeight:"bold", color:"#2C1810" }}>{skill.name}</span>
                  <span className="skill-tag" style={{ fontFamily:"monospace", fontSize:"10px", color:"#6B1E1E", letterSpacing:"0.1em" }}>// {skill.tag}</span>
                </div>
                <span style={{ fontFamily:"monospace", fontSize:"12px", color:"#6B1E1E" }}>{skill.level}%</span>
              </div>

              <div style={{ height:"6px", backgroundColor:"#D4C5A9", position:"relative", overflow:"hidden" }}>
                <motion.div
                  initial={{ width:0 }}
                  animate={{ width: bars ? `${skill.level}%` : 0 }}
                  transition={{ duration:1, delay: i * 0.15, ease:"easeOut" }}
                  style={{ height:"100%", backgroundColor:"#6B1E1E", position:"absolute", top:0, left:0 }}
                />
              </div>

              <div style={{ display:"flex", justifyContent:"space-between", marginTop:"3px" }}>
                {[0,25,50,75,100].map(tick => (
                  <span key={tick} style={{ fontFamily:"monospace", fontSize:"8px", color:"#2C1810", opacity:0.35 }}>{tick}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}