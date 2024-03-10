import React from 'react'
import Header from './Header'
import vaultFamilyImg from "../assets/vault-bjj-family-portriat.jpg"

export default function AboutUsComponent() {
  return (
    <> 
    <Header></Header>
      <h1 className='about-us-component-header-text'>Our Story</h1>
    <div className='about-us-component-content-wrapper'>

    {/* <div className='about-us-component-header-container'>
    </div> */}

    
    <img src={vaultFamilyImg} className="vault-family-img-styles"></img>

    <div className='our-story-description-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit laboriosam velit repellendus quibusdam provident nostrum molestias, amet quod facilis aliquam, deserunt tempora culpa, aliquid iste quis recusandae distinctio asperiores ab?
    Dolorum sed suscipit cumque nihil quis facilis, magnam incidunt vero in quae laborum modi sequi ut quo soluta minima. Fugiat unde quae odit accusantium veniam beatae delectus magnam qui recusandae.
    Ducimus provident numquam asperiores a eligendi magni id iusto, quasi ad maiores autem aut accusantium, officiis cumque vitae! Aliquam obcaecati temporibus aut at nam culpa excepturi, architecto hic enim quis!
    Aliquam veritatis ipsa maiores possimus reprehenderit recusandae facilis a, voluptate ex dolorum! Doloremque, quia. Dolorum deserunt ratione expedita nam cupiditate odio, dignissimos voluptatem reiciendis eius, delectus aliquam cumque recusandae provident?
    Accusamus est aliquid provident porro? Error nulla vero nam, ratione sapiente, nobis fugiat illum, excepturi rerum debitis laboriosam placeat soluta natus nostrum. Soluta consectetur maxime omnis corrupti ullam tempore nam.</div>

    </div>
    </>
  )
}
