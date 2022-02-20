import React from 'react'
import Slider from 'react-slick'
import { motion } from "framer-motion"
const Screen3 = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        appendDots: (dots) => (
            <div style={{}}>
                <ul style={{ margin: '0px', color: 'white' }}> {dots} </ul>
            </div>
        ),
        responsive: [{
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }]
    };
    return (
        <div className="md:h-screen relative -mb-20">
            <div className='max-w-6xl h-100  items-center h-auto lg:h-auto flex-wrap mx-auto lg:my-0'>
                <div className="flex py-5 items-center text-center justify-center mx-auto gap-4">
                    {/* <img src='/kavy1idth="100" height="100" /> */}
                    <h1 className="text-light text-4xl py-5">Projects</h1>
                </div>
                <br />
                <Slider {...settings} className='max-w-5xl flex gap-5 m-auto'>

                    <div className="max-w-lg bg-blue-200 float-center rounded-lg  shadow-md">
                        <motion.img
                            src='images/babu-1.png'
                            width="100%"
                            height="100%"
                            className="rounded-t-lg bg-dark"
                        />
                        <div className="p-5 ">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-blue-900 ">Portfolio with Algal Database</h5>
                            <h5 className="text-gray-700 text-sm">Freelance Project for Dr. Bakthavachalam Babu, Assistant Professor, Madras Christian College. Includes Algal Database for reference.</h5>
                            <br />

                            <div className="flex bg-medium flex-wrap gap-x-4 items-center justify-center">
                                <img src="/tools/nextjs.svg" className="w-16 h-10" alt="NextJS" />
                                <img src="/tools/tailwindcss.svg" className="w-32 h-10" alt="Tailwind CSS" />
                                <img src="/tools/vercel.svg" className="w-16 h-10" alt="Vercel" />
                                <img src="/tools/prisma.svg" className="w-7 h-10" alt="Prisma" />
                                <img src="/tools/sqlite.svg" className="w-20 h-10" alt="SQLite" />
                                <img src="/tools/autoprefixer.svg" className="w-10 h-10" alt="AutoPrefixer" />
                                <img src="/tools/postcss.svg" className="w-14 h-10" alt="PostCSS" />
                                <img src="/tools/yarn.svg" className="w-10 h-8" alt="Yarn" />
                            </div>

                        </div>
                    </div>
                    <div class="max-w-lg h-full bg-blue-200 float-center rounded-lg">
                        <img
                            src='images/covid-traker-1.png'
                            className="rounded-t-lg "
                            width="100%"
                            height="100%"
                        />
                        <div className="p-5 ">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-blue-900 ">COVID-19 Tracker</h5>
                            <h5 className="text-gray-700 text-sm">Track COVID-19 status globally and nationally. Choose your country and find out the status of infected, recovered and death information. Compare the data using graph for better understanding.</h5>
                            <br />
                            <div className="flex bg-medium flex-wrap gap-x-4 items-center justify-center">
                                <img src="/tools/react.svg" className="w-8 h-10" alt="ReactJS" />
                                <img src="/tools/material-ui.svg" className="w-15 h-6" alt="Material UI" />
                                <img src="https://www.chartjs.org/docs/latest/favicon.ico" className="w-10 h-10" alt="Chart JS" />
                                <img src="/tools/axios.svg" className="w-20 h-10" alt="Axios" />
                                <img src="/tools/npm.svg" className="w-10 h-10" alt="NPM" />
                            </div>
                        </div>
                    </div>
                    <div class="max-w-sm bg-blue-200 rounded-lg">
                        <img
                            src='images/gallerygram-1.png'
                            className="rounded-t-lg "
                            width="100%"
                            height="100%"
                        />
                        <div className="p-5 ">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-blue-900 ">GalleryGram</h5>
                            <h5 className="text-gray-700 text-sm">A Gallery to revisit memories</h5>
                            <br />

                            <div className="flex bg-medium flex-wrap gap-x-4 items-center justify-center">
                                <img src="/tools/react.svg" className="w-8 h-10" alt="ReactJS" />
                                <img src="/tools/framer.svg" className="w-32 h-10" alt="Framer" />
                                <img src="/tools/npm.svg" className="w-10 h-8" alt="npm" />
                            </div>
                        </div>
                    </div>
                    <div class="max-w-sm h-full bg-blue-200 float-center rounded-lg">
                        <img
                            src='images/todo-1.png'
                            className="rounded-t-lg "
                            width="100%"
                            height="100%"
                        />
                        <div className="p-5 ">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-blue-900 ">TO-DO with Redux</h5>
                            <h5 className="text-gray-700 text-sm">A To-Do Site to organize your to-do with status - Pending, Active and Completed using Redux store.</h5>
                            <br />

                            <div className="flex bg-medium flex-wrap gap-x-4 items-center justify-center">
                                <img src="/tools/react.svg" className="w-8 h-10" alt="ReactJS" />
                                <img src="/tools/redux.svg" className="w-20 h-8" alt="Redux" />
                                <img src="/tools/yarn.svg" className="w-10 h-8" alt="Yarn" />
                            </div>
                        </div>
                    </div>
                    <div class="max-w-sm h-full bg-blue-200 float-center rounded-lg">
                        <img
                            src='/images/todo-2.png'
                            width="100%"
                            height="100%"
                            className="rounded-t-lg "

                        />
                        <div className="p-5 ">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-blue-900 ">TO-DO List</h5>
                            <h5 className="text-gray-700 text-sm">A simple to-do website to get started with React.</h5>
                            <br />

                            <div className="flex bg-medium flex-wrap gap-x-4 items-center justify-center">

                                <img src="/tools/react.svg" className="w-10 h-10" alt="ReactJS" />
                                <img src="/tools/font-awesome.svg" className="w-20 h-8" alt="Font Awesome" />
                                <img src="/tools/yarn.svg" className="w-10 h-8" alt="Yarn" />
                            </div>
                        </div>
                    </div>
                </Slider>


            </div>
        </div >
    )
}

export default Screen3