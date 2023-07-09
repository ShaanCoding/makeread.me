import TemplateCard from '@/components/TemplateCard'
import { FC } from 'react'

interface pageProps { }

const Page: FC<pageProps> = ({ }) => {
    const mock = [{
        created_at: new Date("2021-08-31T00:00:00.000Z"),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget blandit diam, ac pellentesque diam. Aliquam pellentesque augue vitae lacinia molestie. Morbi ac arcu eu neque tempor gravida nec at nunc.',
        title: 'Name of template',
        author_url: "lorem ipsum dolor",
        tags: ['Undustry', 'ReadME', "Code of Conduct"],

        contributors: [{
            name: "Emre",
            url: "lorem ipsum dolor",
            social: "github"
        },
        {
            name: "Emre",
            url: "lorem ipsum dolor",
            social: "github"
        },
        {
            name: "Emre",
            url: "lorem ipsum dolor",
            social: "github"
        },],

        author: "Furkan Emre Kozan",
        href: "/",

    },
    {
        created_at: new Date("2021-08-31T00:00:00.000Z"),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget blandit diam, ac pellentesque diam. Aliquam pellentesque augue vitae lacinia molestie. Morbi ac arcu eu neque tempor gravida nec at nunc.',
        title: 'Name of template',
        author_url: "lorem ipsum dolor",
        tags: ['Undustry', 'ReadME', "Code of Conduct"],

        contributors: [{
            name: "Emre",
            url: "lorem ipsum dolor",
            social: "github"
        },
        {
            name: "Emre",
            url: "lorem ipsum dolor",
            social: "github"
        },
        {
            name: "Emre",
            url: "lorem ipsum dolor",
            social: "github"
        },],

        author: "Furkan Emre Kozan",
        href: "/",

    },
    {
        created_at: new Date("2021-08-31T00:00:00.000Z"),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget blandit diam, ac pellentesque diam. Aliquam pellentesque augue vitae lacinia molestie. Morbi ac arcu eu neque tempor gravida nec at nunc.',
        title: 'Name of template',
        author_url: "lorem ipsum dolor",
        tags: ['Undustry', 'ReadME', "Code of Conduct"],

        contributors: [{
            name: "Emre",
            url: "lorem ipsum dolor",
            social: "github"
        },
        {
            name: "Emre",
            url: "lorem ipsum dolor",
            social: "github"
        },
        {
            name: "Emre",
            url: "lorem ipsum dolor",
            social: "github"
        },],

        author: "Furkan Emre Kozan",
        href: "/",

    },
    {
        created_at: new Date("2021-08-31T00:00:00.000Z"),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget blandit diam, ac pellentesque diam. Aliquam pellentesque augue vitae lacinia molestie. Morbi ac arcu eu neque tempor gravida nec at nunc.',
        title: 'Name of template',
        author_url: "lorem ipsum dolor",
        tags: ['Undustry', 'ReadME', "Code of Conduct"],

        contributors: [{
            name: "Emre",
            url: "lorem ipsum dolor",
            social: "github"
        },
        {
            name: "Emre",
            url: "lorem ipsum dolor",
            social: "github"
        },
        {
            name: "Emre",
            url: "lorem ipsum dolor",
            social: "github"
        }],
        author: "Furkan Emre Kozan",
        href: "/",

    },

    ]
    return <main>
        <div className='gap-[21px] flex flex-wrap justify-center pr-[37px] pt-[25px]'>
            {
                mock.map((item, index) => (
                        <TemplateCard
                        href={item.href}
                        created_at={item.created_at} description={item.description} key={index}
                        tags={item.tags} title={item.title} author={item.author} author_url={item.author_url} 
                        contributors={item.contributors}/>))
            }
        </div>
    </main>
}

export default Page