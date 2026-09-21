import React, { useRef } from 'react'
import Hero from './Hero'
import WorkExperience from './WorkExperience'
import Projects from './Projects'
import HomeSvg from "../svg/home"
import WorkSvg from "../svg/work"
import ProjectSvg from "../svg/project"
import ContactSvg from "../svg/contactme"
import { motion } from "framer-motion"
import Contact from './Contact'
const AllScreens = () => {
    const [hover, setHover] = React.useState("")
    const sec1 = useRef(null);
    const sec2 = useRef(null);
    const sec3 = useRef(null);
    const sec4 = useRef(null);

    const scrollTo = (ref) => {
        window.scroll({
            top: ref.current.offsetTop,
            behavior: "smooth",
        });
    };
    return (
        <div className="">
            <div ref={sec1}>
                <Hero />
            </div>
            <div ref={sec2}>
                <WorkExperience />
            </div>
            <div ref={sec3}>
                <Projects />
            </div>
            <div ref={sec4}>
                <Contact />
            </div>
            <motion.div animate className="sticky bg-dark backdrop-opacity-10 cursor-pointer max-w-md flex gap-5 items-center justify-center bottom-5 md:p-3 p-1 m-auto border-2 rounded-full bg-opacity-60 backdrop-filter backdrop-blur-sm">
                <motion.div onClick={() => scrollTo(sec1)} whileHover="hover" className={hover == "home" ? "flex text-center items-center rounded-full p-2 px-3 bg-light" : "flex p-2 text-center items-center"} onHoverStart={e => setHover("home")} onHoverEnd={e => setHover("")}>
                        <motion.div className="items-center justify-center"
                            layout
                            transition={{ duration: 0.3 }}
                        >
                            <HomeSvg fill={hover == "home" ? "#000000" : "#f5f5f4"} />
                        </motion.div>
                        <motion.h1
                            layout
                            transition={{ duration: 0.3 }}
                            className={hover == "home" ? "text-dark mx-2" : "mx-2"} > {hover == "home" && "Home"}
                        </motion.h1>
                    </motion.div>
                    <motion.div onClick={() => scrollTo(sec2)} whileHover="hover" className={hover == "work" ? "flex text-center items-center rounded-full p-2 px-3 bg-light" : "flex p-2 text-center items-center"} onHoverStart={e => setHover("work")} onHoverEnd={e => setHover("")}>
                        <motion.div className="items-center justify-center"
                            layout
                            transition={{ duration: 0.3 }}
                        >

                            <WorkSvg fill={hover == "work" ? "#000000" : "#f5f5f4"} />
                        </motion.div>
                        <motion.h1
                            layout
                            transition={{ duration: 0.3 }}
                            className={hover == "work" ? "text-dark mx-2" : "mx-2"}>{hover == "work" && "Work"}</motion.h1>
                    </motion.div>
                    <motion.div whileHover="hover" onClick={() => scrollTo(sec3)} className={hover == "project" ? "flex text-center items-center rounded-full p-2 px-3 bg-light" : "flex p-2 text-center items-center"} onHoverStart={e => setHover("project")} onHoverEnd={e => setHover("")}>
                        <motion.div className="items-center justify-center"
                            layout
                            transition={{ duration: 0.3 }}
                        >
                            <ProjectSvg fill={hover == "project" ? "#000000" : "#f5f5f4"} />
                        </motion.div>
                        <motion.h1
                            layout
                            transition={{ duration: 0.3 }}
                            className={hover == "project" ? "text-dark mx-2" : "mx-2"}>{hover == "project" && "Projects"}</motion.h1>
                    </motion.div>
                    <motion.div whileHover="hover" onClick={() => scrollTo(sec4)} className={hover == "contact" ? "flex text-center items-center rounded-full p-2 px-3 bg-light" : "flex p-2 text-center items-center"} onHoverStart={e => setHover("contact")} onHoverEnd={e => setHover("")}>
                        <motion.div className="items-center justify-center"
                            layout
                            transition={{ duration: 0.3 }}
                        >

                            <ContactSvg fill={hover == "contact" ? "#000000" : "#f5f5f4"} />
                        </motion.div>
                        <motion.h1
                            layout
                            transition={{ duration: 0.3 }}
                            className={hover == "contact" ? "text-dark mx-2" : "mx-2"}>{hover == "contact" && "Contact Me"}</motion.h1>
                    </motion.div>
            </motion.div >
            <div className="-my-20"></div>
        </div >
    )
}

export default AllScreens