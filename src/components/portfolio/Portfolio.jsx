import React from 'react'
import './Portfolio.css'

import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio6.jpg'

const arr =[
    {
        "title":"TeamMeet",
        "link":"",
        "image":Img1
    },
    {
        "title":"InvoiceReady",
        "link":"https://github.com/Jenish-Dhanani/InvoiceReady",
        "image":Img2
    },
    {
        "title":"AuctionPoint",
        "link":"",
        "image":Img3
    },
]

const Portfolio = ()=>{

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio-container">
                {/* <div className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={Img1} alt="" />
                    </div>
                    <h3>Title</h3>
                    <a href="#" className='btn btn-primary'>Live Demo</a>
                </div> */}
                {
                    arr.map((item, index)=>{
                        return (
                            <div className="portfolio-item" key={index}>
                                <div className="portfolio-item-image">
                                    <img src={item.image} alt="" />
                                </div>
                                <h3>{item.title}</h3>
                                <a href={item.link} className='btn btn-primary' target="_blank" rel="noreferrer">CheckOut</a>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export {Portfolio}