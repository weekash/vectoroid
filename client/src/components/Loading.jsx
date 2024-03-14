import React, { useEffect, useState } from 'react'

export default function Loading() {
  const [index, setIndex] = useState(0)
  const texts = [
    "Got it ✅",
    "Initiating 🔄",
    "Thinking 💭",
    "Processing ⏳",
    "Extracting 📤",
    "Executing ⚙️",
    "Its talking time ⏰",
    "Be patience I'm on it ⏳"
  ];

  useEffect(() => {
    let interval = setInterval(() => {
      setIndex((index)=>index===texts.length-1 ?  0: index+1)
    }, 1500)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <p className='loader'>{texts[index]}</p></>
  )
}
