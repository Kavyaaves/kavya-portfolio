import React from 'react'
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
const NavBar = () => {
    const [hover, setHover] = React.useState("")
    return (
        <motion.div animate className="sticky cursor-pointer flex gap-5 items-center justify-center bottom-5 w-1/3 m-auto bg-[#bae6fd] border-2 border-blue-500 p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-sm">
            <AnimateSharedLayout>
                <motion.div whileHover="hover" className="flex text-center items-center" onHoverStart={e => setHover("home")} onHoverEnd={e => setHover("")}>
                    <motion.img
                        layout
                        src="/home.svg" alt="Home" className="w-7 h-7" />
                    <motion.h1
                        layout
                        transition={{ duration: 0.3 }}
                        className="text-light mx-2">{hover == "home" && "Home"}</motion.h1>
                </motion.div>
                <motion.div whileHover="hover" className="flex text-center items-center" onHoverStart={e => setHover("work")} onHoverEnd={e => setHover("")}>
                    <motion.img
                        layout
                        src="/work1.svg" alt="Work" className="w-7 h-7" />
                    <motion.h1
                        layout
                        transition={{ duration: 0.3 }}
                        className="text-light mx-2">{hover == "work" && "Work"}</motion.h1>
                </motion.div>
                <motion.div whileHover="hover" className="flex text-center items-center" onHoverStart={e => setHover("project")} onHoverEnd={e => setHover("")}>
                    <motion.img
                        layout
                        src="/project.svg" alt="Project" className="w-7 h-7" />
                    <motion.h1
                        layout
                        transition={{ duration: 0.3 }}
                        className="text-light mx-2">{hover == "project" && "Projects"}</motion.h1>
                </motion.div>
                <motion.div whileHover="hover" className="flex text-center items-center" onHoverStart={e => setHover("contact")} onHoverEnd={e => setHover("")}>
                    <motion.img
                        layout
                        src="/contactme.svg" alt="Contact Me" className="w-7 h-7" />
                    <motion.h1
                        layout
                        transition={{ duration: 0.3 }}
                        className="text-light mx-2">{hover == "contact" && "Contact Me"}</motion.h1>
                </motion.div>
            </AnimateSharedLayout>
        </motion.div >
    )
}

export default NavBar