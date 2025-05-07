import React from 'react'
import ProjectCard from '../atoms/ProjectCard'

const projectData = [
  {
    title: 'Arvo',
    description: 'Build an App with ARVO: Scan QR Codes That Can’t Be Counterfeited, Ensuring True Authenticity and Protecting Your Brand from Fraud.',
    demoUrl: 'https://play.google.com/store/apps/details?id=com.OneARVO.arvoconsumer&hl=en',
    image: '/projects/arvoapp.png',
    // githubUrl : 'https://github.com/Keshav-0907/formix',
    date: 'April 2025',
  },
  {
    title: 'GME Authenticator',
    description: 'Build an App with ARVO: Scan QR Codes Even in Rough and Challenging Metal Conditions. I Built the App to Ensure Unmatched Authenticity and Security.',
    demoUrl: 'https://play.google.com/store/apps/details?id=com.OneARVO.GME_Authenticator&hl=en',
    image: '/projects/gme.png',
    date: 'March 2025',
  }
]

const Projects = () => {
  return (
    <div>
      <div className='text-2xl font-semibold'>
        ~ Projects
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
        {
          projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects