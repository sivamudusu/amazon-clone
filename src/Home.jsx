import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
    <div className='home-container'>
        <img className='home-image'
            src='https://i.ytimg.com/vi/MFPg04jAfcY/maxresdefault.jpg'
            alt=''
        />
    </div>
    <div className='home-row'>
        <Product 
            title="The lean startup:how to start a new business
            and also top 5 etrepreneures in the world"
            price={29.99} 
            image="https://upload.wikimedia.org/wikipedia/en/1/11/Lean_Startup.png"
            rating={5}
            id="1"
        />
        <Product
            title="apple iphone 6s: A14 bionic chip| ultra retina camera
            100px front camera|5g enabled|ultra fast processor"
            price={300}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ7o830Pvmb9XfHlSdgh4uoNG6cJjeoniCjQ&usqp=CAU"
            rating={5}
            id="2"
        />
    </div>
    <div className='home-row'>
        <Product
            title="monkey cap|wintwer cap |longlasting warmness guaranteed"
            price={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKECBshBPXBZzZjNEluTX_y07-tClntQ_qug&usqp=CAU"
            rating={4}
            id="3"
        />
        <Product
            title="toy camera for childern|not an original cmaera its just a toy"
            price={6}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-cIAcRMI0Puy6nqcUOVxJLQ37_I0eMzgTw&usqp=CAU"
            rating={3}
            id="4"
        />
        <Product
            title="pop sugar|no-sticky|non-damagable"
            price={10}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwz9u2ONzlUpAwSJNZMRRKYLiC_MJSXUQVJA&usqp=CAU"
            rating={4}
            id="5"
        />
    </div>
    <div className='homr-row'>
        <Product
            title="power bank 20000 mah powwr bank"
            price={15}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaS-aqDFqMf6ntOXK1S1cx6w10y78EYdovFQ&usqp=CAU"
            rating={3}
            id="6"
        />
    </div>
    </div>
  )
}

export default Home