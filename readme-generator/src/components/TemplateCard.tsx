import { FC } from 'react'
import Avatar from '@/components/ui/Avatar'
import {format} from "date-fns"
import Link from 'next/link'
interface TemplateCardProps {
    created_at: Date
    description: string
    title: string
    author_url: string
    tags: string[]
    contributors: string[]
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
                <p className='text-[0.6rem] tracking-primary'>
                    {tags.join(',\u00A0\u00A0' )}
                </p>
            </div>

            {/* Contributors */}
            <div className=''>
                <h4 className='text-[0.8125rem] font-medium tracking-secondary mb-[5px]'>
                    Contributors
                </h4>
                <ul className='list-disc pl-3 flex flex-wrap gap-x-[22px] gap-y-[5px]'>
                    {contributors.map((contributor, index) => {
                        return <li key={index} className='text-[0.6rem] tracking-primary'>
                            {contributor}
                        </li>
                    }
                    )}

                </ul>
            </div>
        </div>

    </Link>
}

export default TemplateCard