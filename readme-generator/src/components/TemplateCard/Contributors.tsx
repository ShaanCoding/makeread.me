'use client'

import { useEffect, useState } from 'react'
import { FC } from 'react'
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

interface ContributorProps {
  contributors: {
    name: string
    url: string
    social: "github" | "twitter" | "linkedin" | "instagram"
  }[]
}

const Contributors: FC<ContributorProps> = ({
  contributors
}) => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if(!isMounted) return null
  
  const socials = {
    github: <AiFillGithub className='mr-2 w-4 h-4' />,
    twitter: <AiFillTwitterCircle className='mr-2 w-4 h-4' />,
    linkedin: <AiFillLinkedin className='mr-2 w-4 h-4' />,
    instagram: <AiFillInstagram className='mr-2 w-4 h-4' />
  }
  return  <div className=''>
      <h4 className='text-[0.8125rem] font-medium tracking-secondary mb-[5px]'>
        Contributors
      </h4>
      <ul className=' flex flex-wrap gap-x-[22px] gap-y-[5px]'>
        {contributors.map((contributor, index) => (
          <li key={index} className={"text-[0.6rem] tracking-primary"}>
            <a href={contributor.url} className='flex items-center justify-center'>
              {
                socials[contributor.social]
              }
              {contributor.name}
            </a>
          </li>
        ))}

      </ul>
    </div>
  
}

export default Contributors