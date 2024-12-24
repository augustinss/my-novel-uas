import React from 'react'
import heroImg from '../assets/hero.png'
import { IoBookOutline } from 'react-icons/io5'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[667px] w-full mb-10 relative'>
        <div className='bg-white p-3 rounded-2xl max-w-[233px] relative top-8 xl:top-12'>
            <div className='relative'>
                <img src={heroImg} alt="" height={211} width={211} className='rounded-3xl mb-3'/>
                <span className='absolute top-1/2 left-1/2 flexCenter -translate-y-1/2 -translate-x-1/2 h-8 w-8 bg-secondary rounded-full cursor-pointer'>
                    <span className='absolute h-full w-full rounded-full bg-white opacity-50 animate-ping'></span>
                    <FaPlay className='text-sm relative left-[1px] text-white'/>
                </span>
            </div>
            <p className='text-[13px]'><b className='uppercase'>Limited Edition</b> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, aspernatur!</p>
        </div>
        <div className='mt-12 sm:mt-20 xl:mt-40 max-w-[777px]'>
            <h5 className='flex items-baseline gap-x-2 uppercase text-secondary medium-18'>KUMPULAN NOVEL TERBAIK <IoBookOutline /></h5>
            <h1 className='h2 font-[500] capitalize max-w-[722px]'>Pilih dan Baca Novel Kesukaanmu Dengan Beragam Genre yang Menarik</h1>
            <div className='flex'>
                <Link className='bg-white text-xs font-medium pl-5 rounded-full flexCenter gap-x-2 group'>
                   Cek Koleksi Novel
                   <FaArrowRight className='bg-secondary text-white rounded-full h-11 w-11 p-3 m-[3px] border border-white group-hover:-rotate-[20deg] transition-all duration-500'/>
                </Link>
            </div>
        </div>

    </section>
  )
}

export default Hero