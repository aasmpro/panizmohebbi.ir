import React from 'react'
import { HelloWorld } from '../sections/helloWorld'
import { Me } from '../sections/me'
import { Family } from '../sections/family'
import { Skills } from '../sections/skills'

export const Main = () => {
  return (
    <div className="main">
      <HelloWorld />
      <Me />
      <Family />
      <Skills />
    </div>
  )
}
