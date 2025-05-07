import React from 'react'
import StackIcon from 'tech-stack-icons'

const TechStacks = [
    {
        name: 'Flutter',
        icon: 'flutter'
    },
    {
        name: 'Dart',
        icon: 'dart'
    },
    {
        name: 'Python',
        icon: 'python'
    },
    {
        name: 'Django',
        icon: 'django'
    },
    {
        name: 'AWS',
        icon: 'aws'
    },
    {
        name: 'Oracle DBA 19c',
        icon: 'oracle'
    },
    {
        name: 'Firebase',
        icon: 'firebase'
    },
    {
        name: 'NextJs',
        icon: 'nextjs2'
    },
    {
        name: 'Typescript',
        icon: 'typescript'
    },
    {
        name: 'MongoDB',
        icon: 'mongodb'
    },
    {
        name: 'PostgreSQL',
        icon: 'postgresql'
    },
    {
        name: 'MySQL',
        icon: 'mysql'
    },
]

const TechStack = () => {
    return (
        <div className='md:px-1 px-3'>
            <div className='text-2xl font-semibold'>
                ~ My Techstack
            </div>
            <div className='flex flex-wrap py-5 gap-1 md:gap-2'>
                {TechStacks.map((tech, index) => (
                    <div
                        key={index}
                        className='flex items-center justify-center px-2 md:px-4 py-1 border border-gray-300 rounded-sm gap-1 md:gap-2 transition transform hover:scale-105 hover:rotate-6 cursor-pointer'
                    >
                        <StackIcon name={tech.icon} className='w-4 font-extrabold' />
                        <div className='text-sm'>{tech.name}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TechStack