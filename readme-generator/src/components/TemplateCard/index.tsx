import { FC } from 'react'
import Avatar from '@/components/ui/Avatar'
import { format } from "date-fns"
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/Button'
import Contributors from './Contributors'
interface Contributor {

    name: string
    url: string
    social:string


}
interface TemplateCardProps {
    created_at: Date
    description: string
    title: string
    author_url: string
    tags: string[]
    contributors: Contributor[]
    author: string
    href: string
}

const TemplateCard: FC<TemplateCardProps> = ({
    created_at: created,
    description,
    title,
    author_url,
    tags,
    contributors,
    author,
    href
}) => {
  

    return <Link href={href} className='min-w-[314px] min-h-[376px] max-w-[340px] max-h-[400px] shrink-0 rounded-[30px] bg-primary pt-[25px] pb-[25px] pl-[25px] pr-[30px] text-secondary'>
        <div className='flex  gap-[25px] mb-[25px]'>
            <div>
                <Avatar src='' alt='' width='107' height='107' />

            </div>

            <div className=''>

                <p className='text-[0.6rem] tracking-primary mb-[5px]'>
                    {format(created, 'dd.mm.yyyy')}
                </p>
                <h3 className='text-[0.8125rem] font-medium tracking-secondary mb-[10px]'>
                    {title}
                </h3>
                <p className='tracking-primary mb-[20px] text-[0.6rem]'>
                    {author}
                </p>
                <p className='font-medium tracking-primary text-[0.6rem]'>
                    {author_url}
                </p>

            </div>

        </div>
        <div className='gap-[15px] flex flex-col'>

            {/* Description */}
            <div className=''>
                <h4 className='text-[0.8125rem] font-medium tracking-secondary mb-[5px]'>
                    Description
                </h4>
                <p className='text-[0.6rem] tracking-primary'>
                    {description}
                </p>
            </div>

            {/* Tags */}
            <div className=''>
                <h4 className='text-[0.8125rem] font-medium tracking-secondary mb-[5px]'>
                    Tags
                </h4>
                <div className='text-[0.6rem] tracking-primary flex flex-wrap gap-1'>
                    {tags.map((tag, index) => (
                        <span className={cn(buttonVariants({ variant: "default", size: "sm" }))} key={index}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Contributors */}
            {<Contributors  contributors={contributors}/>}
        </div>

    </Link>
}

export default TemplateCard