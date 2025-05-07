import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div id='contact' className='p-3 font-inika'>
      <div className="text-2xl font-semibold"> ~ {"Let's"} Connect </div>
      <div className='flex justify-between py-5'>
        <div className='flex flex-col gap-5'>
          <div className='text-lg font-semibold'>
            About Me
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-col'>
              <span className='font-medium'>✉️ Email</span>
              <Link href={'mailto://aviralsharma5531@gmail.com'} className='text-[#7d7474] hover:text-[#a19595] cursor-pointer hover:underline underline-offset-2 md:text-base text-xs'> aviralsharma5531@gmail.com </Link>
            </div>
            <div className='flex flex-col'>
              <span className='font-bold'>📄 Resume </span>
              <Link href={'https://drive.google.com/file/d/1DiVQEWG90OCFJOMtVcpAVj2Bv2yVLWWm/view?usp=drive_link'} target='_blank' className='text-[#7d7474] hover:text-[#a19595] cursor-pointer hover:underline underline-offset-2 md:text-base text-xs'> Download Resume </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='text-lg font-semibold'>
            Code
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-col'>
              <span className='font-medium'> 💻 Github</span>
              <Link href={'https://github.com/aviralsharmaa'} target='_blank' className='text-[#7d7474] hover:text-[#a19595] cursor-pointer hover:underline underline-offset-2 md:text-base text-xs'> @aviralsharmaa </Link>
            </div>

          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='text-lg font-semibold'>
            Social Media
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-col'>
              <span className=' font-medium'>📱 LinkedIn</span>
              <Link href={'https://www.linkedin.com/in/aviralsharma2111/'} target='_blank' className='text-[#7d7474] md:text-base text-xs hover:text-[#a19595] cursor-pointer hover:underline underline-offset-2'> @Aviral_sharma </Link>
            </div>
            <div className='flex flex-col'>
              <span className=' font-bold'>🐦 Twitter </span>
              <Link href={'https://x.com/aviralsharma_?t=0CtLXlUceQ0dK7HTzpPz0Q&s=09'} target='_blank' className='text-[#7d7474] md:text-base text-xs hover:text-[#a19595] cursor-pointer hover:underline underline-offset-2'> @Aviral_sharma </Link>
            </div>
            <div className='flex flex-col'>
              <span className=' font-medium'> 📸 Instagram </span>
              <Link href={'https://www.instagram.com/_.aviralsharma?igsh=MTJxOWI2OG85dTRmZw=='} target='_blank' className='text-[#7d7474] md:text-base text-xs hover:text-[#a19595] cursor-pointer hover:underline underline-offset-2'> @Aviral_sharma </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer