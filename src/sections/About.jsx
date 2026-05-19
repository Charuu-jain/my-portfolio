import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" style={{
      minHeight: "100vh",
      backgroundColor: "#1a0a0a",
      padding: "6rem 5rem",
      position: "relative",
      overflow: "hidden"
    }}>

      <div style={{position:"absolute",top:0,left:0,right:0,height:"36px",backgroundColor:"#6B1E1E",display:"flex",alignItems:"center",overflow:"hidden"}}>
        <div className="animate-marquee" style={{display:"flex",gap:"12px",whiteSpace:"nowrap"}}>
          {Array(20).fill("✦ ABOUT ME ✦ MEET THE DEVELOPER ✦").map((t,i)=>(
            <span key={i} style={{color:"#EDE8DC",fontSize:"11px",fontFamily:"monospace",letterSpacing:"0.2em"}}>{t}</span>
          ))}
        </div>
      </div>

      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(237,232,220,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(237,232,220,0.03) 1px,transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div className="about-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",alignItems:"center",marginTop:"2rem",position:"relative",zIndex:1}}>

        <motion.div
          initial={{opacity:0,rotate:-5,y:40}}
          whileInView={{opacity:1,rotate:-3,y:0}}
          transition={{duration:0.8}}
          viewport={{once:true}}
          style={{backgroundColor:"#fff",padding:"16px 16px 48px 16px",boxShadow:"8px 8px 0px #6B1E1E",maxWidth:"420px",margin:"0 auto"}}
        >
          <div style={{width:"100%",aspectRatio:"1",backgroundColor:"#EDE8DC",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
            <img src="/charu.jpeg" alt="Charu Jain" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 20%",filter:"sepia(0.8) contrast(1.1) brightness(0.95)"}} />
          </div>
          <p style={{fontFamily:"monospace",fontSize:"13px",color:"#2C1810",textAlign:"center",marginTop:"12px",letterSpacing:"0.1em"}}>charu jain, 2025 ✦</p>
        </motion.div>

        <motion.div
          initial={{opacity:0,x:40}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.8,delay:0.2}}
          viewport={{once:true}}
        >
          <p style={{color:"#6B1E1E",fontFamily:"monospace",fontSize:"12px",letterSpacing:"0.3em",textTransform:"uppercase",marginBottom:"1rem"}}>
            ▶ level 01
          </p>

          <h2 style={{fontFamily:"monospace",fontSize:"clamp(2rem, 5vw, 4rem)",fontWeight:"bold",color:"#EDE8DC",lineHeight:1.1,marginBottom:"1.5rem"}}>
            meet the<br />
            <span style={{color:"#6B1E1E"}}>developer.</span>
          </h2>

          <p style={{fontFamily:"monospace",fontSize:"15px",color:"#D4C5A9",lineHeight:1.8,marginBottom:"2rem",maxWidth:"480px"}}>
            cs student at lnct bhopal, obsessed with building things that look as good as they work. currently being raised by karan aujla, taylor swift and sabrina carpenter. fuelled entirely by noodles.
          </p>

          <div style={{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"2rem"}}>
            {[
              "noodles > everything, no debate",
              "karan aujla + taylor + sabrina on repeat",
              "barbie is not just a movie, it is a lifestyle",
              "dsa grinder by day, fiction reader by night"
            ].map((fact,i)=>(
              <motion.div key={i} initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{delay:i*0.1+0.4}} viewport={{once:true}} style={{fontFamily:"monospace",fontSize:"13px",color:"#EDE8DC",padding:"8px 16px",borderLeft:"2px solid #6B1E1E",backgroundColor:"#2C1810",display:"flex",alignItems:"center",gap:"10px"}}>
                <span className="pulse-dot" />
                {fact}
              </motion.div>
            ))}
          </div>

          <div style={{display:"flex",gap:"2rem",marginBottom:"2rem",flexWrap:"wrap"}}>
            {[
              {label:"university",value:"LNCT"},
              {label:"year",value:"3rd"},
              {label:"branch",value:"CSE"},
              {label:"batch",value:"2027"},
            ].map((stat,i)=>(
              <div key={i} style={{textAlign:"center"}}>
                <p style={{fontFamily:"monospace",fontSize:"18px",fontWeight:"bold",color:"#EDE8DC"}}>{stat.value}</p>
                <p style={{fontFamily:"monospace",fontSize:"10px",color:"#6B1E1E",letterSpacing:"0.2em",textTransform:"uppercase"}}>{stat.label}</p>
              </div>
            ))}
          </div>

          <div style={{display:"flex",gap:"1rem",flexWrap:"wrap"}}>
            <a href="https://github.com/Charuu-jain" target="_blank" rel="noreferrer" style={{fontFamily:"monospace",fontSize:"12px",color:"#EDE8DC",padding:"8px 20px",border:"1px solid #6B1E1E",textDecoration:"none",letterSpacing:"0.15em"}}>
              github
            </a>
            <a href="https://www.linkedin.com/in/charu-jain-10b36b277/" target="_blank" rel="noreferrer" style={{fontFamily:"monospace",fontSize:"12px",color:"#EDE8DC",padding:"8px 20px",border:"1px solid #6B1E1E",textDecoration:"none",letterSpacing:"0.15em"}}>
              linkedin
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  )
}