import React, { useState, useEffect } from 'react'

export const Me = () => {
  const fullStacks = ['FullStack', '<FullStack />', '#FullStack', 'F#!!$t@Ck', '.full-stack']
  const colors = ['color-black', 'color-yellow', 'color-pink', 'color-purple', 'color-brown', 'color-blue', 'color-orange', 'color-green']
  const [index, setIndex] = useState(0)
  const [index2, setIndex2] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index < 4 ? index + 1 : 0))
      setIndex2((index2) => (index2 < 7 ? index2 + 1 : 0))
    }, 700)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="section me">
      <p className="title">I'm Paniz,</p>
      <p className="pure-blod">a pure-blood</p>
      <p className={'fullstack ' + colors[index2]}>{fullStacks[index]}</p>
      <p className="version">v21.02.28:still-baby</p>
    </div>
  )
}
