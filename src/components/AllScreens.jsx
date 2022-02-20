import React, { useRef } from 'react'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'
import HomeSvg from "../svg/home"
import WorkSvg from "../svg/work"
import ProjectSvg from "../svg/project"
import ContactSvg from "../svg/contactme"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import Screen4 from './Screen4'
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
        <div>
            <div ref={sec1}>
                <Screen1 />
            </div>
            <div ref={sec2}>
                <Screen2 />
            </div>
            <div ref={sec3}>
                <Screen3 />
            </div>
            <div ref={sec4}>
                <Screen4 />
            </div>
            <motion.div animate className="sticky bg-dark backdrop-opacity-10 cursor-pointer max-w-md flex gap-5 items-center justify-center bottom-5 md:p-3 p-1 m-auto  border-2 rounded-full bg-opacity-60 backdrop-filter backdrop-blur-sm">
                <AnimateSharedLayout>
                    <motion.div onClick={() => scrollTo(sec1)} whileHover="hover" className={hover == "home" ? "flex text-center items-center rounded-full p-2 px-3 bg-blue-200" : "flex p-2 text-center items-center"} onHoverStart={e => setHover("home")} onHoverEnd={e => setHover("")}>
                        <motion.div className="items-center justify-center"
                            layout
                            transition={{ duration: 0.3 }}
                        >

                            <HomeSvg fill={hover == "home" ? "#1f2937" : "#bae6fd"} />
                        </motion.div>
                        <motion.h1
                            layout
                            transition={{ duration: 0.3 }}
                            className={hover == "home" ? "text-dark mx-2" : "mx-2"} > {hover == "home" && "Home"}
                        </motion.h1>
                    </motion.div>
                    <motion.div onClick={() => scrollTo(sec2)} whileHover="hover" className={hover == "work" ? "flex text-center items-center rounded-full p-2 px-3 bg-blue-200" : "flex p-2 text-center items-center"} onHoverStart={e => setHover("work")} onHoverEnd={e => setHover("")}>
                        {/* <motion.img
                            className="fill-svg"
                            layout
                            src="/work1.svg" alt="Work" className="w-7 h-7" /> */}
                        <motion.div className="items-center justify-center"
                            layout
                            transition={{ duration: 0.3 }}
                        >

                            <WorkSvg fill={hover == "work" ? "#1f2937" : "#bae6fd"} />
                        </motion.div>
                        <motion.h1
                            layout
                            transition={{ duration: 0.3 }}
                            className={hover == "work" ? "text-dark mx-2" : "mx-2"}>{hover == "work" && "Work"}</motion.h1>
                    </motion.div>
                    <motion.div whileHover="hover" onClick={() => scrollTo(sec3)} className={hover == "project" ? "flex text-center items-center rounded-full p-2 px-3 bg-blue-200" : "flex p-2 text-center items-center"} onHoverStart={e => setHover("project")} onHoverEnd={e => setHover("")}>
                        <motion.div className="items-center justify-center"
                            layout
                            transition={{ duration: 0.3 }}
                        >
                            <ProjectSvg fill={hover == "project" ? "#1f2937" : "#bae6fd"} />
                        </motion.div>
                        <motion.h1
                            layout
                            transition={{ duration: 0.3 }}
                            className={hover == "project" ? "text-dark mx-2" : "mx-2"}>{hover == "project" && "Projects"}</motion.h1>
                    </motion.div>
                    <motion.div whileHover="hover" onClick={() => scrollTo(sec4)} className={hover == "contact" ? "flex text-center items-center rounded-full p-2 px-3 bg-blue-200" : "flex p-2 text-center items-center"} onHoverStart={e => setHover("contact")} onHoverEnd={e => setHover("")}>
                        <motion.div className="items-center justify-center"
                            layout
                            transition={{ duration: 0.3 }}
                        >

                            <ContactSvg fill={hover == "contact" ? "#1f2937" : "#bae6fd"} />
                        </motion.div>
                        <motion.h1
                            layout
                            transition={{ duration: 0.3 }}
                            className={hover == "contact" ? "text-dark mx-2" : "mx-2"}>{hover == "contact" && "Contact Me"}</motion.h1>
                    </motion.div>
                </AnimateSharedLayout>
            </motion.div >
        </div >
    )
}

export default AllScreens