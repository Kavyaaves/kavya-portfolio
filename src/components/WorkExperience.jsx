import { motion } from 'framer-motion'
import React from 'react'

const WorkExperience = () => {
    return (
        <motion.div className="min-h-screen relative border-custom" >
            <motion.div className="">
                <motion.div className='max-w-5xl h-100 flex items-center h-auto lg:h-auto flex-wrap mx-auto lg:my-0 pb-4'>
                    <div className="flex pt-4 items-center text-center justify-center mx-auto gap-4">
                        <img src="/images/work.svg" width="50" height="50" alt="Kavya"/>
                        <h1 className="text-light  md:text-md text-3xl">Work Experience</h1>
                    </div>
                    <motion.ol className="relative  px-10 pb-0 pt-10 overflow-hidden">
                        <motion.li className="pb-4 pl-4 align-center " whileInView={{ scale: 1 }}
                            initial={{ scale: 0.3 }}
                            transition={{
                                duration: 0.5,
                            }}>
                            {/* <span className="flex absolute left-3 justify-center mt-12 items-center w-2 h-2 bg-blue-100 ring-opacity-70 rounded-full ring-8 ring-blue-200 opacity-100">
                            </span> */}
                            <div className="items-center p-4 text-dark rounded-lg  bg-light ">
                                <span className="text-lg text-dark ">Member Technical Staff</span>
                                <br />
                                <span className="text-md text-dark ">Zoho Corporation Private Limited</span>
                                <br />
                                <i className='text-sm'>06/2023 - Present</i>
                                <br />
                                <h6 className="text-md text-dark mt-4">Directly Responsible Individual (DRI) for the group-wide UWP to WinUI migration, scoping the work into 30 tasks across the team. Owned the Notes and Contacts modules while contributing to Mail, building C#/.NET integrations across REST, SMTP/IMAP/POP, and SQLite persistence for 10,000+ customers. Built and optimized full-text search over locally cached mail and contact data, cutting average search latency from 1.6s to under 200ms.</h6>

                            </div>
                        </motion.li>
                        <motion.li className="pb-4 pl-4 align-center " whileInView={{ scale: 1 }}
                            initial={{ scale: 0.3 }}
                            transition={{
                                duration: 0.5,
                            }}>
                            <div className="items-center p-4 text-dark rounded-lg  bg-light ">
                                <span className="text-lg text-dark ">Full Stack Developer</span>
                                <br />
                                <span className="text-md text-dark ">Techdome Solutions Pvt Limited</span>
                                <br />
                                <i className='text-sm'>12/2021 - Present</i>
                                <br />
                                <h6 className="text-md text-dark mt-4">Build and integrate websites and applications. Write well designed and efficient code to solve simple and complex problems.</h6>

                            </div>
                        </motion.li>
                        <motion.li whileInView={{ scale: 1 }}
                            initial={{ scale: 0.3 }}
                            transition={{
                                duration: 0.5,
                            }} className="mb-4 ml-4">

                            <div className="items-center p-4 text-dark rounded-lg bg-light ">
                                <span className="text-lg text-dark ">Front End Developer Intern</span>
                                <br />
                                <span className="text-md text-dark ">Techdome Solutions Pvt Limited</span>
                                <br />
                                <i className='text-sm'>07/2021 - 12/2021</i>
                                <br />
                                <h6 className="text-md mt-4 text-dark ">Build and integrate websites and applications. Collaborate with the team and solve problems.</h6>

                            </div>
                        </motion.li>
                        <motion.li className="ml-4" whileInView={{ scale: 1 }}
                            initial={{ scale: 0.3 }}
                            transition={{
                                duration: 0.5,
                            }}>

                            <div className="items-center p-4 text-dark rounded-lg bg-light  ">
                                <span className="text-lg text-dark ">Web Developer Intern - Project Head</span>
                                <br />
                                <span className="text-md text-dark ">Technocolabs Solutions</span>
                                <br />
                                <i className='text-sm'>06/2021 - 07/2021</i>
                                <br />
                                <h6 className="text-md text-dark mt-4">Built a B2B Website from scratch using NodeJS, MongoDB Atlas and EJS template.</h6>

                            </div>
                        </motion.li>
                    </motion.ol>
                </motion.div>
            </motion.div>
        </motion.div >
    )
}

export default WorkExperience
