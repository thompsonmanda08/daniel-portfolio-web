'use client';
import Link from "next/link";
import { Button } from "./ui/button";

{/** swiper react component  */}
import { Swiper, SwiperSlide } from 'swiper/react';

{/** swiper styles */}
import 'swiper/css'
import 'swiper/css/pagination'

{/** required modeules */}
import {Pagination} from 'swiper/modules'

{/** componets */}
import ProjectCard from '@/components/ProjectCard';
{/** add projects worked on  */}
const projectData = [
    {
        image: '/work',
        category: '',
        name: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        link: '/',
        github: '/',
    },
    {
        image: '/work',
        category: '',
        name: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        link: '/',
        github: '/',
    },
    {
        image: '/work',
        category: '',
        name: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        link: '/',
        github: '/',
    },
    {
        image: '/work',
        category: '',
        name: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        link: '/',
        github: '/',
    },
];

const Work = () => {
    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className='container mx-auto'>
                {/** text */}
                <div className=' max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                    <h2 className='section-title mb-4'>Latest Projects</h2>
                    <p className='subtitle mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Similique reprehenderit voluptatibus ex quisquam saepe officiis alias, </p>
                        <Link href='/projects'>
                        <Button>All Projects</Button>
                        </Link>
                </div>
                {/** sidebar */}
                <div className='xl:max-w-[750px] xl:absolute right-0 top-0'>
                    <Swiper className='h-[480px]' slidesPerView={1} breakpoints={{
                        640: {
                            slidesPerView: 2
                        }
                    }} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}}>
                        {/*** first 4 projects */}
                        {projectData.slice(0, 4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
};

export default Work;