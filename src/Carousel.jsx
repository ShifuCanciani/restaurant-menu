import React, { useEffect, useState } from 'react'
import { listcarousel } from './datacarousel'
import {HiChevronDoubleLeft,HiChevronDoubleRight} from 'react-icons/hi'

const Carousel = () => {
    const [news, setNews] = useState(listcarousel)
    const [currentNews, setCurrentNews] = useState(0)


    const prevSlide = () => {
        setCurrentNews((oldNews)=>{
            const result = (oldNews - 1 + news.length)  % news.length
            return result
        })
       
    }
    const nextSlide = () => {
        setCurrentNews((oldNews)=>{
            const result = (oldNews + 1) % news.length
            return result
        })
        
    }

    useEffect(() => {
        let sliderId = setInterval(() => {
            nextSlide()
        }, 4500)
        return () => {clearInterval(sliderId)}
    }, [currentNews])
  return (<section className='slider-container'>
    {news.map((oneNews, oneNewsIndex)=>{
        const {id, image, title, description} = oneNews
        return <article className='slide' style={{transform:`translateX(${100*(oneNewsIndex-currentNews)}%)`,
        opacity:oneNewsIndex === currentNews ? 1 : 0,
        visibility:oneNewsIndex === currentNews ? 'visible' : 0,
         }} key={id}>
            <img src={image} alt={title} className='carousel-img' />
            <h5 className='name'>{title}</h5>
            <p className='text'>{description}</p>
        </article>
    })}
    <button type='button' className='prev' onClick={prevSlide}>
        <HiChevronDoubleLeft className='icon'/>
    </button>
    <button type='button' className='next' onClick={nextSlide}>
        <HiChevronDoubleRight className='icon'/>
    </button>
  </section>
    
  )
}

export default Carousel
