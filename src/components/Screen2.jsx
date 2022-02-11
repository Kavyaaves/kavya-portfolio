import React from 'react'

const Screen2 = () => {
    return (
        <div className="md:h-screen relative bg-light scroller-div border-custom">
            <div className="">
                <div className='max-w-5xl h-100 flex items-center h-auto lg:h-auto flex-wrap mx-auto lg:my-0 pb-4'>
                    <div className="flex pt-4 items-center text-center justify-center mx-auto gap-4">
                        <img src="/images/work.svg" width="50" height="50" />
                        <h1 className="text-dark  md:text-md text-3xl">Work Experience</h1>
                    </div>
                    <ol className="relative px-10 pb-0 pt-10 overflow-hidden">
                        <div
                            className='border-2-2  py-12 -ml-6 absolute border-opacity-100 border-blue-300 h-full border'
                        ></div>
                        <li className="pb-10 pl-4 align-center">
                            <span className="flex absolute left-3 justify-center mt-12 items-center w-2 h-2 bg-blue-100 ring-opacity-70 rounded-full ring-8 ring-blue-200 opacity-100">
                            </span>
                            <div className="items-center p-4 text-dark rounded-lg  border-2 border-blue-200 shadow-sm ">
                                <span className="text-lg text-dark ">Full Stack Developer</span>
                                <br />
                                <span className="text-md text-dark ">Techdome Solutions Pvt Limited</span>
                                <br />
                                <i className='text-sm'>12/2021 - Present</i>
                                <br />
                                <h6 className="text-md text-dark mt-4">Build and integrate websites and applications. Write well designed and efficient code to solve simple and complex problems.</h6>

                            </div>
                        </li>
                        <li className="mb-10 ml-4">
                            <span className="flex absolute mt-12 left-3 text-dark  font-extrabold text-xl justify-center items-center w-2 h-2 bg-blue-200 rounded-full ring-8 ring-dark ring-opacity-100 ">
                                {/* <img className="rounded-full shadow-lg" src="/kavy1.jpg" alt="" /> */}
                            </span>
                            <div className="items-center p-4 text-dark rounded-lg  border-2 border-sky-700 shadow-sm ">
                                <span className="text-lg text-dark ">Front End Developer Intern</span>
                                <br />
                                <span className="text-md text-dark ">Techdome Solutions Pvt Limited</span>
                                <br />
                                <i className='text-sm'>07/2021 - 12/2021</i>
                                <br />
                                <h6 className="text-md mt-4 text-dark ">Build and integrate websites and applications. Collaborate with the team and solve problems.</h6>

                            </div>
                        </li>
                        <li className="ml-4">
                            <span className="flex absolute mt-12 left-3 text-dark  font-extrabold text-xl justify-center items-center w-2 h-2 bg-blue-200 rounded-full ring-8 ring-dark ring-opacity-100">
                                {/* <img className="rounded-full shadow-lg" src="/kavy1.jpg" alt="Jese Leos image" /> */}
                            </span>
                            <div className="items-center p-4 text-dark rounded-lg  border-2 border-sky-700 shadow-sm ">
                                <span className="text-lg text-dark ">Web Developer Intern - Project Head</span>
                                <br />
                                <span className="text-md text-dark ">Technocolabs Solutions</span>
                                <br />
                                <i className='text-sm'>06/2021 - 07/2021</i>
                                <br />
                                <h6 className="text-md text-dark mt-4">Built a B2B Website from scratch using NodeJS, MongoDB Atlas and EJS template.</h6>

                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div >
    )
}

export default Screen2