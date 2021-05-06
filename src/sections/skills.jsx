import React from 'react'

export const Skills = () => {
  const skills = [
    {
      name: 'Eating',
      value: 5,
      className: 'fas fa-cookie-bite color-yellow'
    },
    {
      name: 'Pooping',
      value: 5,
      className: 'fas fa-poo color-brown'
    },
    {
      name: 'Sleeping',
      value: 8,
      className: 'fas fa-moon color-purple'
    },
    {
      name: 'Cuteness',
      value: 9,
      className: 'fas fa-heart color-pink'
    }
  ]
  return (
    <div className="section skills">
      <p className="title">Skills</p>
      <div className="list">
        {skills.map((skill) => (
          <div className="skill">
            <p className="name">{skill.name}</p>
            <div className="value">
              {[...Array(10)].map((_, index) => (
                <i class={skill.className + (index > skill.value ? ' disable' : '')}></i>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
