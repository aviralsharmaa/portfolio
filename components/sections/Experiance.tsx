import React from 'react'
import ExperianceCard from '../atoms/ExperianceCard'

const experianceData = [
  {
    title: 'Data Scientist & Developer',
    company: 'OneArvo Ventures',
    duration: 'Jan 2024 - Present',
    logo: ('/arvo.png'),
    location: 'Onsite - India',
    website: 'https://onearvoventures.com/',
  },
  {
    title: 'Android Developer (Intern)',
    company: 'Onev',
    duration: 'Jul 2024 - Dec 2024',
    logo: ('/onev.png'),
    location: 'Remote - India',
    website: 'https://onev.in/',


  },
  // {
  //   title: 'Frontend Developer (Intern)',
  //   company: 'Hyperly AI',
  //   duration: 'May 2024 - Jul 2024',
  //   logo: 'https://res.cloudinary.com/dzqgyl0wf/image/upload/v1744978612/bvxobef1bl4nvczacpjx.jpg',
  //   location: 'Remote - India',
  //   website: 'https://www.amplyfy.com/',
  // }
]

const Experiance = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='text-2xl font-semibold'>
        ~ Work Experiance
      </div>
      <div className='flex gap-5 flex-col'>
        {
          experianceData.map((data, index) => (
            <ExperianceCard key={index} data={data}/>
          ))
        }
      </div>
    </div>
  )
}

export default Experiance