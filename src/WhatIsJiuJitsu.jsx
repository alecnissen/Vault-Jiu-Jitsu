import React from 'react'
import vaultBjjClassPhoto from "../assets/vault-bjj-class-img.jpg"

export default function WhatIsJiuJitsu() {
  return (
    <div className='what-is-bjj-content-wrapper'>
    <h1>What Is Jiu-Jitsu?</h1>
    <img src={vaultBjjClassPhoto}></img>
    
    <p>Jiu Jitsu is a martial art which focuses on grappling, with ground fighting being a major component of the style. We use body weight, gravity and momentum to defend ourselves even when physically outmatched. Proper technique is key and learning from experienced teachers is essential to progress. With training, students not only learn to defend themselves in the real world, but also gain physical fitness, confidence and mental concentration skills as well.</p>
    
    <h1 className='benefits-of-bjj-header-text'>Benefits of Jiu Jitsu</h1>

    <ul>
      <li>Increase Physical and Mental strength</li>
      <li>Increase muscular endurance and aerobic capacity</li>
      <li>Improved self-confidence and discipline</li>
      <li>Improved problem solving ability</li>
      <li>Reduced stress levels</li>
      <li>Community and bonds</li>
      <li>Skill development and Personal Growth</li>
    </ul>
    
    </div>
  )
}

