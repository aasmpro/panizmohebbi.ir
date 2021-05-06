import React from 'react'
import dad from '../assets/file/dad.jpg'
import mom from '../assets/file/mom.jpg'
import uncle from '../assets/file/uncle.jpg'

export const Family = () => {
  return (
    <div className="section family">
      <p className="title">My Family</p>
      <p className="sub-title">[dev version]</p>
      <div className="images">
        <a href="https://www.linkedin.com/in/omid-mohebbi-11a00a62/">
          <img src={dad} />
          <p>dad</p>
        </a>
        <a href="https://www.linkedin.com/in/taraneh-khalili-23115391/">
          <img src={mom} />
          <p>mom</p>
        </a>
        <a href="https://www.linkedin.com/in/alirezarpi/">
          <img src={uncle} />
          <p>uncle</p>
        </a>
      </div>
    </div>
  )
}
