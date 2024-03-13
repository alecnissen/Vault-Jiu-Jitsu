import React from 'react'
import Header2 from './Header2'
import coachJulianPhoto from "../assets/julian-photo-for-vault-website.jpg"

export default function Instructors() {
  return (
    <>
    <Header2></Header2>
    <h1 className='our-instructors-header-text'>Our Instructors</h1>
    <div className='instructors-content-wrapper'>
    <h3>We want to give you the best jiu jitsu instruction and experience possible! We are commited to making you the best jiu jitsu practioner possible! We are here to help you throughout every step of your jiu jitsu jounrney. </h3>
    
    <div className='coach-julian-container'> 
    <img src={coachJulianPhoto}></img>

    <div className='bio-description-container'>
    <h1>Julien Banner</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero est suscipit facere commodi, ipsa sapiente asperiores autem aliquam enim officia illum qui, quod quibusdam vero aut eaque optio quidem veritatis!
    Magni consectetur distinctio fugit. Numquam architecto fuga, ullam quasi cumque quas accusantium dolores distinctio iure at doloremque laudantium ex eligendi nam nobis obcaecati officiis cum quae et blanditiis labore quos.</p>
    
    <div className='accolades-list-container'>
    <ul>
        <li>asfsdfsfsfsfdsffs</li>
        <li>loremasfsafsdfasfsafsfsasfsa      sdfasdf</li>
        <li>asdfasdfwe3r32refwbdsreberre fdssvf</li>
        <li>dsfnasdfmds ipjsdifoanofnef ansof aosndfinos iogdsoifnoasdfnos</li>
    </ul>
    </div>

    <p>Favorite submission: Rear naked choke</p>
    <p>My favorite thing about jiu jitsu is the physical and mental benefits!</p>

    </div>


    </div>


    </div>
    </>
  )
}
