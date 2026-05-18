import { useEffect, useRef } from "react"

export default function Cursor() {
  const cursorRef = useRef(null)
  const trailRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`
      }
      if (trailRef.current) {
        setTimeout(() => {
          if (trailRef.current) {
            trailRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
          }
        }, 80)
      }
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <>
      <div ref={cursorRef} style={{width:"20px", height:"20px", position:"fixed", top:0, left:0, pointerEvents:"none", zIndex:9999}}>
        <svg viewBox="0 0 20 20" fill="#6B1E1E" xmlns="http://www.w3.org/2000/svg">
          <polygon points="10,0 12.5,7.5 20,7.5 14,12 16.5,20 10,15.5 3.5,20 6,12 0,7.5 7.5,7.5" />
        </svg>
      </div>
      <div ref={trailRef} style={{width:"8px", height:"8px", position:"fixed", top:0, left:0, pointerEvents:"none", zIndex:9998, opacity:0.5}}>
        <svg viewBox="0 0 8 8" fill="#6B1E1E" xmlns="http://www.w3.org/2000/svg">
          <polygon points="4,0 5,2.5 8,2.5 5.5,4.5 6.5,8 4,6 1.5,8 2.5,4.5 0,2.5 3,2.5" />
        </svg>
      </div>
    </>
  )
}