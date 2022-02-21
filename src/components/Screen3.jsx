import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion"
import ReactTooltip from 'react-tooltip';

const ImageSlider = ({ slidesToShow = 3 }) => {
    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        className: "items-center justify-center m-auto",
        centerMode: true,
        dots: false,
        speed: 300,
        centerMode: true,
        slidesToShow: slidesToShow,
        swipeToSlide: true,
        focusOnSelect: true,
        arrows: false,
        beforeChange: (current, next) => setImageIndex(next),
        responsive: [
            {
                breakpoint: 1490,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const images = [
        {
            id: 1,
            src: "/images/babu-1.png",
            alt: "Placeholder image",
            render: () => (
                <div className="max-w-lg m-auto bg-blue-200 float-center rounded-lg  shadow-md">
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
                            <img src="/tools/nextjs.svg" data-tip data-for="react" className="cursor-pointer w-16 h-10" alt="NextJS" />
                            <img src="/tools/tailwindcss.svg" data-tip data-for="tailwind" className="cursor-pointer w-32 h-10" alt="Tailwind CSS" />
                            <img src="/tools/vercel.svg" data-tip data-for="react" className="cursor-pointer w-16 h-10" alt="Vercel" />
                            <img src="/tools/prisma.svg" data-tip data-for="react" className="cursor-pointer w-7 h-10" alt="Prisma" />
                            <img src="/tools/sqlite.svg" data-tip data-for="react" className="cursor-pointer w-20 h-10" alt="SQLite" />
                            <img src="/tools/autoprefixer.svg" data-tip data-for="react" className="cursor-pointer w-10 h-10" alt="AutoPrefixer" />
                            <img src="/tools/postcss.svg" data-tip data-for="react" className="cursor-pointer w-14 h-10" alt="PostCSS" />
                            <img src="/tools/yarn.svg" data-tip data-for="react" className="cursor-pointer w-10 h-8" alt="Yarn" />
                        </div>

                    </div>
                </div>
            )
        },
        {
            id: 2,
            src: "/images/kavy1.png",
            alt: "Placeholder image",
            render: () => (
                <div className="max-w-lg m-auto bg-blue-200 float-center rounded-lg  shadow-md">
                    <motion.img
                        src='images/babu-1.png'
                        width="100%"
                        height="100%"
                        className="rounded-t-lg bg-dark m-auto"
                    />
                    <div className="p-5 m-auto">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-blue-900 ">Portfolio with Algal Database</h5>
                        <h5 className="text-gray-700 text-sm">Freelance Project for Dr. Bakthavachalam Babu, Assistant Professor, Madras Christian College. Includes Algal Database for reference.</h5>
                        <br />
                        <div className="flex bg-medium flex-wrap gap-x-4 items-center justify-center">
                            <img src="/tools/nextjs.svg" data-tip data-for="next" className="cursor-pointer w-16 h-10" alt="NextJS" />
                            <img src="/tools/tailwindcss.svg" data-tip data-for="tailwind" className="cursor-pointer w-32 h-10" alt="Tailwind CSS" />
                            <img src="/tools/vercel.svg" data-tip data-for="vercel" className="cursor-pointer w-16 h-10" alt="Vercel" />
                            <img src="/tools/prisma.svg" data-tip data-for="prisma" className="cursor-pointer w-7 h-10" alt="Prisma" />
                            <img src="/tools/sqlite.svg" data-tip data-for="sqlite" className="cursor-pointer w-20 h-10" alt="SQLite" />
                            <img src="/tools/autoprefixer.svg" data-tip data-for="autoprefixer" className="cursor-pointer w-10 h-10" alt="AutoPrefixer" />
                            <img src="/tools/postcss.svg" data-tip data-for="postcss" className="cursor-pointer w-14 h-10" alt="PostCSS" />
                            <img src="/tools/yarn.svg" data-tip data-for="yarn" className="cursor-pointer w-10 h-8" alt="Yarn" />
                        </div>

                    </div>
                </div>
            )
        },
        {
            id: 3,
            src: "/images/todo-1.png",
            alt: "Placeholder image",
        },
        {
            id: 4,
            src: "/images/todo-2.png",
            alt: "Placeholder image",
        },

    ];
    const templateImages = images.map((image, idx) => {
        if (image !== null) {
            return (
                <div
                    className={idx === imageIndex ? "transition h-full transform duration-300 scale-100 opacity-100  m-auto items-center justify-center" : "transition transform duration-300 scale-75 opacity-70"}
                    key={image.id}
                >
                    {image.src}
                </div>
            );
        }
    });

    return <motion.div className="h-screen m-auto relative overflow-hidden" >
        <div className="flex py-5 items-center text-center justify-center mx-auto gap-4">
            {/* <img src='/kavy1idth="100" height="100" /> */}
            <h1 className="text-light text-4xl py-5">Projects</h1>
        </div>
        <br />
        <Slider {...settings} className="m-auto items-center justify-center flex">
            <div
                className={0 === imageIndex ? "transition h-full transform duration-300 scale-100 opacity-100 m-auto items-center justify-center" : "transition m-auto transform duration-300 scale-75 opacity-70"}
            >
                <div className="max-w-lg m-auto bg-blue-200 float-center rounded-lg shadow-md">
                    <motion.img
                        src='images/babu-1.png'
                        width="100%"
                        height="100%"
                        className="rounded-t-lg bg-dark m-auto"
                    />
                    <div className="p-5 m-auto">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-blue-900 ">Portfolio with Algal Database</h5>
                        <h5 className="text-gray-700 text-sm">Freelance Project for Dr. Bakthavachalam Babu, Assistant Professor, Madras Christian College. Includes Algal Database for reference.</h5>
                        <br />
                        <div className="flex bg-medium flex-wrap gap-x-4 items-center justify-center">
                            <img src="/tools/nextjs.svg" data-tip data-for="next" className="cursor-pointer w-16 h-10" alt="NextJS" />
                            <img src="/tools/tailwindcss.svg" data-tip data-for="tailwind" className="cursor-pointer w-32 h-10" alt="Tailwind CSS" />
                            <img src="/tools/vercel.svg" data-tip data-for="vercel" className="cursor-pointer w-16 h-10" alt="Vercel" />
                            <img src="/tools/prisma.svg" data-tip data-for="prisma" className="cursor-pointer w-7 h-10" alt="Prisma" />
                            <img src="/tools/sqlite.svg" data-tip data-for="sqlite" className="cursor-pointer w-20 h-10" alt="SQLite" />
                            <img src="/tools/autoprefixer.svg" data-tip data-for="autoprefixer" className="cursor-pointer w-10 h-10" alt="AutoPrefixer" />
                            <img src="/tools/postcss.svg" data-tip data-for="postcss" className="cursor-pointer w-14 h-10" alt="PostCSS" />
                            <img src="/tools/yarn.svg" data-tip data-for="yarn" className="cursor-pointer w-10 h-8" alt="Yarn" />
                        </div>

                    </div>
                </div>
            </div>

            <div
                className={1 === imageIndex ? "transition h-full transform duration-300 scale-100 opacity-100  m-auto items-center justify-center float-center" : "transition transform duration-300 scale-75 opacity-70 m-auto"}
            >
                <div class="max-w-lg h-full bg-blue-200 m-auto float-center rounded-lg">
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
                            <img src="/tools/react.svg" data-tip data-for="react" className="cursor-pointer w-8 h-10" alt="ReactJS" />
                            <img src="/tools/material-ui.svg" data-tip data-for="materialUI" className="cursor-pointer w-15 h-6" alt="Material UI" />
                            <img src="https://www.chartjs.org/docs/latest/favicon.ico" data-tip data-for="chartJS" className="cursor-pointer w-10 h-10" alt="Chart JS" />
                            <img src="/tools/axios.svg" data-tip data-for="axios" className="cursor-pointer w-20 h-10" alt="Axios" />
                            <img src="/tools/npm.svg" data-tip data-for="npm" className="cursor-pointer w-10 h-10" alt="NPM" />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={2 === imageIndex ? "transition h-full transform duration-300 scale-100 opacity-100  m-auto items-center justify-center" : "transition transform duration-300 scale-75 opacity-70"}
            >
                <div class="max-w-lg bg-blue-200 rounded-lg">
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
                            <img src="/tools/react.svg" data-tip data-for="react" className="cursor-pointer w-8 h-10" alt="ReactJS" />
                            <img src="/tools/framer.svg" data-tip data-for="framer" className="cursor-pointer w-32 h-10" alt="Framer" />
                            <img src="/tools/npm.svg" data-tip data-for="npm" className="cursor-pointer w-10 h-8" alt="npm" />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={3 === imageIndex ? "transition h-full transform duration-300 scale-100 opacity-100  m-auto items-center justify-center" : "transition transform duration-300 scale-75 opacity-70"}
            >
                <div class="max-w-lg h-full bg-blue-200 float-center rounded-lg">
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
                            <img src="/tools/react.svg" data-tip data-for="react" className="cursor-pointer w-8 h-10" alt="ReactJS" />
                            <img src="/tools/redux.svg" data-tip data-for="redux" className="cursor-pointer w-20 h-8" alt="Redux" />
                            <img src="/tools/yarn.svg" data-tip data-for="yarn" className="cursor-pointer w-10 h-8" alt="Yarn" />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={4 === imageIndex ? "transition h-full transform duration-300 scale-100 opacity-100  m-auto items-center justify-center" : "transition transform duration-300 scale-75 opacity-70"}
            >
                <div class="max-w-lg h-full bg-blue-200 float-center rounded-lg">
                    <img
                        src='images/todo-2.png'
                        className="rounded-t-lg "
                        width="100%"
                        height="100%"
                    />
                    <div className="p-5 ">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-blue-900 ">TO-DO List</h5>
                        <h5 className="text-gray-700 text-sm">A simple to-do website to get started with React.</h5>
                        <br />

                        <div className="flex bg-medium flex-wrap gap-x-4 items-center justify-center">
                            <img src="/tools/react.svg" data-tip data-for="react" className="cursor-pointer w-10 h-10" alt="ReactJS" />
                            <img src="/tools/font-awesome.svg" data-tip data-for="fontAwesome" className="cursor-pointer w-20 h-8" alt="Font Awesome" />
                            <img src="/tools/yarn.svg" data-tip data-for="yarn" className="cursor-pointer w-10 h-8" alt="Yarn" />
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
        <ReactTooltip id="react" place="bottom" backgroundColor="#1f2937" effect="solid">React JS</ReactTooltip>
        <ReactTooltip id="npm" place="bottom" backgroundColor="#1f2937" effect="solid">Node Package Manager</ReactTooltip>
        <ReactTooltip id="yarn" place="bottom" backgroundColor="#1f2937" effect="solid">Yarn</ReactTooltip>
        <ReactTooltip id="next" place="bottom" backgroundColor="#1f2937" effect="solid">Next JS</ReactTooltip>
        <ReactTooltip id="prisma" place="bottom" backgroundColor="#1f2937" effect="solid">Prisma</ReactTooltip>
        <ReactTooltip id="sqlite" place="bottom" backgroundColor="#1f2937" effect="solid">SQLite</ReactTooltip>
        <ReactTooltip id="autoprefixer" place="bottom" backgroundColor="#1f2937" effect="solid">Autoprefixer</ReactTooltip>
        <ReactTooltip id="postcss" place="bottom" backgroundColor="#1f2937" effect="solid">PostCSS</ReactTooltip>
        <ReactTooltip id="tailwind" place="bottom" backgroundColor="#1f2937" effect="solid">Tailwind CSS</ReactTooltip>
        <ReactTooltip id="materialUI" place="bottom" backgroundColor="#1f2937" effect="solid">Material UI</ReactTooltip>
        <ReactTooltip id="framer" place="bottom" backgroundColor="#1f2937" effect="solid">Framer Motion</ReactTooltip>
        <ReactTooltip id="chartJS" place="bottom" backgroundColor="#1f2937" effect="solid">Chart JS</ReactTooltip>
        <ReactTooltip id="axios" place="bottom" backgroundColor="#1f2937" effect="solid">Axios</ReactTooltip>
        <ReactTooltip id="vercel" place="bottom" backgroundColor="#1f2937" effect="solid">Vercel</ReactTooltip>
        <ReactTooltip id="fontAwesome" place="bottom" backgroundColor="#1f2937" effect="solid">Font Awesome</ReactTooltip>
        <ReactTooltip id="redux" place="bottom" backgroundColor="#1f2937" effect="solid">Redux</ReactTooltip>
    </motion.div >
};

export default ImageSlider;
