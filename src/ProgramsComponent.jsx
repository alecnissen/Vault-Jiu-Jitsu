import React from 'react'
import Header2 from './Header2'
import adultNogiImg from "../assets/adult-nogi-img.jpg"
import adultGiImg from "../assets/vault-gi-class-img.jpg"

export default function ProgramsComponent() {
  return (
    <>
    <Header2></Header2>
      <h1 className='header-text-programs-component'>Our Programs</h1>
    
    <div className='programs-component-content-wrapper'>


        <div className='program-content-container'>
        <h1>Adult NOGI</h1>
        <img src={adultNogiImg}></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nostrum, voluptas voluptate ut vel veniam, quasi quis porro suscipit voluptatum sit quibusdam consectetur sequi velit dolores deserunt natus accusantium harum!
        Minus error maxime rem sunt dignissimos corrupti blanditiis dolorum? Minima aspernatur reiciendis fugit, cum voluptas a assumenda rem maiores qui eos est veniam nostrum blanditiis illo exercitationem architecto in ex!
        Illum blanditiis reiciendis eius vero quaerat ad inventore quos consequatur! Hic, ea quaerat autem nostrum eos culpa at exercitationem aut iure quasi veritatis repudiandae, nemo impedit harum fugiat voluptatibus quos!
        me minima magnam alias suscipit neque ab vel ut, placeat sint aperiam labore est! Dolore!</p>
        <ul>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        </ul>
        
        </div>




        <div className='program-content-container'>
        <h1>Adult GI</h1>
        <img src={adultGiImg}></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nostrum, voluptas voluptate ut vel veniam, quasi quis porro suscipit voluptatum sit quibusdam consectetur sequi velit dolores deserunt natus accusantium harum!
        Minus error maxime rem sunt dignissimos corrupti blanditiis dolorum? Minima aspernatur reiciendis fugit, cum voluptas a assumenda rem maiores qui eos est veniam nostrum blanditiis illo exercitationem architecto in ex!
        Illum blanditiis reiciendis eius vero quaerat ad inventore quos consequatur! Hic, ea quaerat autem nostrum eos culpa at exercitationem aut iure quasi veritatis repudiandae, nemo impedit harum fugiat voluptatibus quos!
        me minima magnam alias suscipit neque ab vel ut, placeat sint aperiam labore est! Dolore!</p>
        <ul>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        </ul>
        
        </div>


        <div className='program-content-container'>
        <h1>Kids Classes</h1>
        <img src={adultGiImg}></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nostrum, voluptas voluptate ut vel veniam, quasi quis porro suscipit voluptatum sit quibusdam consectetur sequi velit dolores deserunt natus accusantium harum!
        Minus error maxime rem sunt dignissimos corrupti blanditiis dolorum? Minima aspernatur reiciendis fugit, cum voluptas a assumenda rem maiores qui eos est veniam nostrum blanditiis illo exercitationem architecto in ex!
        Illum blanditiis reiciendis eius vero quaerat ad inventore quos consequatur! Hic, ea quaerat autem nostrum eos culpa at exercitationem aut iure quasi veritatis repudiandae, nemo impedit harum fugiat voluptatibus quos!
        me minima magnam alias suscipit neque ab vel ut, placeat sint aperiam labore est! Dolore!</p>
        <ul>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        </ul>
        
        </div>
    
    
    </div>
    </>
  )
}
