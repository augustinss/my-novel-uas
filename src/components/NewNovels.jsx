import React, { useState, useEffect } from 'react'
import Title from './Title'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination} from 'swiper/modules';
import { products } from '../assets/data';
import Item from './Item';

const NewNovels = () => {

  const [newNovels, setNewNovels] = useState([])

  useEffect(()=>{
    const data = products.slice(0, 10)
    setNewNovels(data)
  }, [products])

  return (
    <section className='max-padd-container pt-16 pb-6 bg-primary'>
      <Title title1={'New'} title2={'Novels'} titleStyles={'pb-10'} paraStyles={'!block'}/>
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          400:{
            slidesPerView: 2,
            spaceBetween:30
          },
          700:{
            slidesPerView: 3,
            spaceBetween:30
          },
          1024:{
            slidesPerView: 4,
            spaceBetween:30
          },
          1200:{
            slidesPerView: 5,
            spaceBetween:30
          },
        }}
        modules={[Autoplay, Pagination]}
        className="h-[555px]"
      >
        {newNovels.map((product)=>(
          <SwiperSlide key={product._id}>
            <Item product={product}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default NewNovels