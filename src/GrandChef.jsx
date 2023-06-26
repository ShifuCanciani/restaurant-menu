import React, { useState } from 'react'
import {FaQuoteLeft, FaUtensilSpoon, FaChevronRight, FaChevronLeft, } from 'react-icons/fa'
import { GiChefToque, GiSpoon } from 'react-icons/gi'
import cheffes from './cheffes'

const GrandChef = () =>{ 
    const [index, setIndex] = useState(0)
    const {id, title, img, name, bio } = cheffes[index]

    const checkNumber = (number) => {
        if(number > cheffes.length -1) {
            return 0
        }
        if(number < 0) {
            return cheffes.length -1
        }

        return number
    } 

   const nextCheffe = () => {
        setIndex((currentIndex)=>{
            const newIndex = currentIndex +1
            
            return checkNumber(newIndex)
        })
    }
    const prevCheffe = () => {
        setIndex((currentIndex) => {
            const newIndex = currentIndex -1
            
            return checkNumber(newIndex)
        })
    }
    return (
     <section>
         <span className='center-cucina-icon'>
            <GiChefToque /><GiChefToque /><GiChefToque />
        </span>
        <article className="review">
            <button className="prev-btn" onClick={prevCheffe}><FaChevronLeft /></button>
            <button className="next-btn" onClick={nextCheffe}><FaChevronRight/></button>
         
            <div className="img-container">
            <img src={img} alt={name} className="person-img" />
                    <span className="quote-icon">
                        <FaUtensilSpoon />
                    </span>    
            </div>
            <div>
                {title}
            </div>
            
             <h4 className="rank">{name}</h4>
            <p>{bio}</p>
        </article>
    </section>
)
}

export default GrandChef
