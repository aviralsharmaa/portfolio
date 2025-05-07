import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col gap-2 text-gray-300'>
            <div className=''>
                Full Stack developer, ex-tressure at BitBrain club, and Tech Nerd. I <span className='font-semibold'>build fast</span>, <span className='font-semibold'>scalable apps</span> with a love for clean UI and solid backend.
            </div>

            <div>
                <span className='font-semibold'>Freelanced with 5+ clients</span>, and built aplications like <Link href={'https://play.google.com/store/apps/details?id=com.OneARVO.arvoconsumer&hl=en'} target='_blank' className='font-semibold underline underline-offset-2'>Arvo</Link> & <Link className='font-semibold underline underline-offset-2' href={'https://play.google.com/store/apps/details?id=com.OneARVO.GME_Authenticator&hl=en'} target='_blank'>GME Authenticator</Link> to solve real-world problems with clean, scalable solutions.
            </div>

            <div>Always building, always learning. ⚒️</div>
        </div>
    )
}

export default About