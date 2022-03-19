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
                breakpoint: 1020,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return <motion.div className="min-h-screen m-auto relative overflow-hidden" >
        <svg id="wave" className="md:hidden grid absolute -my-2 background-clip" style={{ transform: "rotate(180deg)", transition: "0.3s" }} viewBox="0 0 440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stopColor="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path fill="#bae6fd" d="M0,42L10,46.7C20,51,40,61,60,65.3C80,70,100,70,120,67.7C140,65,160,61,180,51.3C200,42,220,28,240,30.3C260,33,280,51,300,65.3C320,79,340,89,360,77C380,65,400,33,420,16.3C440,0,460,0,480,16.3C500,33,520,65,540,70C560,75,580,51,600,35C620,19,640,9,660,4.7C680,0,700,0,720,14C740,28,760,56,780,67.7C800,79,820,75,840,70C860,65,880,61,900,63C920,65,940,75,960,74.7C980,75,1000,65,1020,53.7C1040,42,1060,28,1080,18.7C1100,9,1120,5,1140,18.7C1160,33,1180,65,1200,77C1220,89,1240,79,1260,79.3C1280,79,1300,89,1320,77C1340,65,1360,33,1380,16.3C1400,0,1420,0,1430,0L1440,0L1440,140L1430,140C1420,140,1400,140,1380,140C1360,140,1340,140,1320,140C1300,140,1280,140,1260,140C1240,140,1220,140,1200,140C1180,140,1160,140,1140,140C1120,140,1100,140,1080,140C1060,140,1040,140,1020,140C1000,140,980,140,960,140C940,140,920,140,900,140C880,140,860,140,840,140C820,140,800,140,780,140C760,140,740,140,720,140C700,140,680,140,660,140C640,140,620,140,600,140C580,140,560,140,540,140C520,140,500,140,480,140C460,140,440,140,420,140C400,140,380,140,360,140C340,140,320,140,300,140C280,140,260,140,240,140C220,140,200,140,180,140C160,140,140,140,120,140C100,140,80,140,60,140C40,140,20,140,10,140L0,140Z"></path></svg>
        {/* <svg id="wave" className="md:hidden grid absolute -my-2 background-clip" style={{ transform: "rotate(180deg)", transition: "0.3s" }} viewBox="0 0 750 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stopColor="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path fill="#bae6fd" d="M0,42L18.5,46.7C36.9,51,74,61,111,65.3C147.7,70,185,70,222,67.7C258.5,65,295,61,332,51.3C369.2,42,406,28,443,30.3C480,33,517,51,554,65.3C590.8,79,628,89,665,77C701.5,65,738,33,775,16.3C812.3,0,849,0,886,16.3C923.1,33,960,65,997,70C1033.8,75,1071,51,1108,35C1144.6,19,1182,9,1218,4.7C1255.4,0,1292,0,1329,14C1366.2,28,1403,56,1440,67.7C1476.9,79,1514,75,1551,70C1587.7,65,1625,61,1662,63C1698.5,65,1735,75,1772,74.7C1809.2,75,1846,65,1883,53.7C1920,42,1957,28,1994,18.7C2030.8,9,2068,5,2105,18.7C2141.5,33,2178,65,2215,77C2252.3,89,2289,79,2326,79.3C2363.1,79,2400,89,2437,77C2473.8,65,2511,33,2548,16.3C2584.6,0,2622,0,2640,0L2658.5,0L2658.5,140L2640,140C2621.5,140,2585,140,2548,140C2510.8,140,2474,140,2437,140C2400,140,2363,140,2326,140C2289.2,140,2252,140,2215,140C2178.5,140,2142,140,2105,140C2067.7,140,2031,140,1994,140C1956.9,140,1920,140,1883,140C1846.2,140,1809,140,1772,140C1735.4,140,1698,140,1662,140C1624.6,140,1588,140,1551,140C1513.8,140,1477,140,1440,140C1403.1,140,1366,140,1329,140C1292.3,140,1255,140,1218,140C1181.5,140,1145,140,1108,140C1070.8,140,1034,140,997,140C960,140,923,140,886,140C849.2,140,812,140,775,140C738.5,140,702,140,665,140C627.7,140,591,140,554,140C516.9,140,480,140,443,140C406.2,140,369,140,332,140C295.4,140,258,140,222,140C184.6,140,148,140,111,140C73.8,140,37,140,18,140L0,140Z"></path></svg> */}
        <svg id="wave" className="md:grid hidden absolute -my-2 background-clip" style={{ transform: "rotate(180deg)", transition: "0.3s" }} viewBox="0 0 1440 140" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stopColor="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path fill="#bae6fd" d="M0,42L18.5,46.7C36.9,51,74,61,111,65.3C147.7,70,185,70,222,67.7C258.5,65,295,61,332,51.3C369.2,42,406,28,443,30.3C480,33,517,51,554,65.3C590.8,79,628,89,665,77C701.5,65,738,33,775,16.3C812.3,0,849,0,886,16.3C923.1,33,960,65,997,70C1033.8,75,1071,51,1108,35C1144.6,19,1182,9,1218,4.7C1255.4,0,1292,0,1329,14C1366.2,28,1403,56,1440,67.7C1476.9,79,1514,75,1551,70C1587.7,65,1625,61,1662,63C1698.5,65,1735,75,1772,74.7C1809.2,75,1846,65,1883,53.7C1920,42,1957,28,1994,18.7C2030.8,9,2068,5,2105,18.7C2141.5,33,2178,65,2215,77C2252.3,89,2289,79,2326,79.3C2363.1,79,2400,89,2437,77C2473.8,65,2511,33,2548,16.3C2584.6,0,2622,0,2640,0L2658.5,0L2658.5,140L2640,140C2621.5,140,2585,140,2548,140C2510.8,140,2474,140,2437,140C2400,140,2363,140,2326,140C2289.2,140,2252,140,2215,140C2178.5,140,2142,140,2105,140C2067.7,140,2031,140,1994,140C1956.9,140,1920,140,1883,140C1846.2,140,1809,140,1772,140C1735.4,140,1698,140,1662,140C1624.6,140,1588,140,1551,140C1513.8,140,1477,140,1440,140C1403.1,140,1366,140,1329,140C1292.3,140,1255,140,1218,140C1181.5,140,1145,140,1108,140C1070.8,140,1034,140,997,140C960,140,923,140,886,140C849.2,140,812,140,775,140C738.5,140,702,140,665,140C627.7,140,591,140,554,140C516.9,140,480,140,443,140C406.2,140,369,140,332,140C295.4,140,258,140,222,140C184.6,140,148,140,111,140C73.8,140,37,140,18,140L0,140Z"></path></svg>
        <div className="flex py-5  items-center text-center justify-center mx-auto gap-4 my-5 skew-y-12 ">
            {/* <img src='/kavy1idth="100" height="100" /> */}
            <h1 className="text-dark text-4xl py-5 relative neon" >Projects</h1>
        </div>
        <br />
        <Slider {...settings} className="m-auto py-5 items-center justify-center flex">
            <div
                className={0 === imageIndex ? "transition h-full transform duration-300 scale-100 opacity-100 m-auto items-center justify-center" : "transition m-auto transform duration-300 scale-75 opacity-70"}
            >
                <motion.div className=" cursor-pointer max-w-lg m-auto bg-blue-200 float-center rounded-lg shadow-md">

                    <div class="flip-container rounded-t-lg w-100 h-100">
                        <motion.img
                            src='images/babu-1.png'
                            width="100%"
                            height="100%"
                            className={0 === imageIndex ? "rounded-t-lg bg-dark m-auto image" : " opacity-100"}
                        />
                        <div className={0 === imageIndex ? "flex gap-5 hover-content items-center justify-center m-auto" : "hidden"} >
                            {/* <div className="text-center items-center justify-center"> */}
                            <a href="https://bakthavachalam-babu.com" target="_blank" rel="noreferrer" className="text-center items-center justify-center">
                                <span className="border-solid border-2 w-full px-4 hover:bg-blue-100 hover:text-gray-700 shadow-lg rounded-lg text-md md:text-md p-1 md:py-2 cursor-pointer">
                                    Demo
                                </span>
                            </a>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="p-5 m-auto cursor-pointer">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-dark ">Portfolio with Algal Database</h5>
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
                </motion.div>

            </div >

            <div
                className={1 === imageIndex ? "transition h-full transform duration-300 scale-100 opacity-100  m-auto items-center justify-center float-center" : "transition transform duration-300 scale-75 opacity-70 m-auto"}
            >
                <div class="max-w-lg h-full bg-blue-200 m-auto float-center rounded-lg">
                    <div class="flip-container w-100 h-100">
                        <motion.img
                            src='images/covid-traker-1.png'
                            width="100%"
                            height="100%"
                            className={1 === imageIndex ? "rounded-t-lg bg-dark m-auto image" : " opacity-100"}
                        />
                        <div className={1 === imageIndex ? "flex gap-5 hover-content items-center justify-center m-auto" : "hidden"} >
                            {/* <div className="text-center items-center justify-center"> */}
                            <a href="https://track-covid19-charts.netlify.app/" target="_blank" rel="noreferrer" className="text-center items-center justify-center">
                                <span className="border-solid border-2 w-full px-4 hover:bg-blue-100 hover:text-gray-700 shadow-lg rounded-lg text-md md:text-md p-1 md:py-2 cursor-pointer">
                                    Demo
                                </span>
                            </a>
                            <a href="https://github.com/Kavyaaves/Covid-19__Tracker" target="_blank" rel="noreferrer" className="text-center items-center justify-center">
                                <span className="border-solid border-2 w-full px-4 hover:bg-blue-100 hover:text-gray-700 shadow-lg rounded-lg text-md md:text-md p-1 md:py-2 cursor-pointer">
                                    Source Code
                                </span>
                            </a>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="p-5 ">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-dark ">COVID-19 Tracker</h5>
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
                className={2 === imageIndex ? "transition h-full transform duration-300 scale-100 opacity-100  m-auto items-center justify-center" : "transition transform duration-300 scale-75 opacity-70 m-auto"}
            >
                <div class="max-w-lg bg-blue-200 rounded-lg">

                    <div class="flip-container rounded-t-lg w-100 h-100 m-auto">
                        <motion.img
                            src='images/gallerygram-1.png'
                            width="100%"
                            height="100%"
                            className={2 === imageIndex ? "rounded-t-lg bg-dark m-auto image" : " opacity-100"}
                        />
                        <div className={2 === imageIndex ? "flex gap-5 hover-content items-center justify-center m-auto" : "hidden"} >
                            {/* <div className="text-center items-center justify-center"> */}
                            <a href="https://kavyaaves.github.io/gallery-gram/" target="_blank" rel="noreferrer" className="text-center items-center justify-center">
                                <span className="border-solid border-2 w-full px-4 hover:bg-blue-100 hover:text-gray-700 shadow-lg rounded-lg text-md md:text-md p-1 md:py-2 cursor-pointer">
                                    Demo
                                </span>
                            </a>
                            <a href="https://github.com/Kavyaaves/gallery-gram" target="_blank" rel="noreferrer" className="text-center items-center justify-center">
                                <span className="border-solid border-2 w-full px-4 hover:bg-blue-100 hover:text-gray-700 shadow-lg rounded-lg text-md md:text-md p-1 md:py-2 cursor-pointer">
                                    Source  Code
                                </span>
                            </a>
                            {/* </div> */}
                        </div>
                    </div>

                    <div className="p-5 ">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-dark ">GalleryGram</h5>
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
                className={3 === imageIndex ? "transition h-full transform duration-300 scale-100 opacity-100  m-auto items-center justify-center" : "transition transform duration-300 scale-75 opacity-70 m-auto"}
            >
                <div class="max-w-lg h-full bg-blue-200 float-center rounded-lg m-auto">
                    <div class="flip-container rounded-t-lg w-100 h-100">
                        <motion.img
                            src='images/todo-1.png'
                            width="100%"
                            height="100%"
                            className={3 === imageIndex ? "rounded-t-lg bg-dark m-auto image" : " opacity-100"}
                        />
                        <div className={3 === imageIndex ? "flex gap-5 hover-content items-center justify-center m-auto" : "hidden"} >
                            {/* <div className="text-center items-center justify-center"> */}
                            <a href="https://kavyaaves.github.io/to-do_redux/" target="_blank" rel="noreferrer" className="text-center items-center justify-center">
                                <span className="border-solid border-2 w-full px-4 hover:bg-blue-100 hover:text-gray-700 shadow-lg rounded-lg text-md md:text-md p-1 md:py-2 cursor-pointer">
                                    Demo
                                </span>
                            </a>
                            <a href="https://github.com/Kavyaaves/to-do_redux" target="_blank" rel="noreferrer" className="text-center items-center justify-center">
                                <span className="border-solid border-2 w-full px-4 hover:bg-blue-100 hover:text-gray-700 shadow-lg rounded-lg text-md md:text-md p-1 md:py-2 cursor-pointer">
                                    Source  Code
                                </span>
                            </a>
                            {/* </div> */}
                        </div>
                    </div>

                    <div className="p-5 ">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-dark ">TO-DO with Redux</h5>
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
                className={4 === imageIndex ? "transition h-full transform duration-300 scale-100 opacity-100  m-auto items-center justify-center" : "transition transform duration-300 scale-75 opacity-70 m-auto"}
            >
                <div class="max-w-lg h-full bg-blue-200 float-center rounded-lg">
                    <div class="flip-container rounded-t-lg w-100 h-100">
                        <motion.img
                            src='images/todo-2.png'
                            width="100%"
                            height="100%"
                            className={4 === imageIndex ? "rounded-t-lg bg-dark m-auto image" : " opacity-100"}
                        />
                        <div className={4 === imageIndex ? "flex gap-5 hover-content items-center justify-center m-auto" : "hidden"} >
                            {/* <div className="text-center items-center justify-center"> */}
                            <a href="https://kavyaaves.github.io/To-Do-List/" target="_blank" rel="noreferrer" className="text-center items-center justify-center">
                                <span className="border-solid border-2 w-full px-4 hover:bg-blue-100 hover:text-gray-700 shadow-lg rounded-lg text-md md:text-md p-1 md:py-2 cursor-pointer">
                                    Demo
                                </span>
                            </a>
                            <a href="https://github.com/Kavyaaves/To-Do-List" target="_blank" rel="noreferrer" className="text-center items-center justify-center">
                                <span className="border-solid border-2 w-full px-4 hover:bg-blue-100 hover:text-gray-700 shadow-lg rounded-lg text-md md:text-md p-1 md:py-2 cursor-pointer">
                                    Source  Code
                                </span>
                            </a>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="p-5 ">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-dark ">TO-DO List</h5>
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
        </Slider >
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
