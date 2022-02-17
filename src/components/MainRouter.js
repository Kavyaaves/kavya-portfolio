import React from 'react'
import { AnimatePresence } from "framer-motion";
import { Router, Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion"
import AllScreens from "./AllScreens";
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import Screen3 from "./Screen3"
import Screen4 from "./Screen4"
const MainRouter = () => {
    const location = useLocation()
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Screen1 />} />
                <Route exact path="/work" element={<Screen2 />} />
                <Route exact path="/projects" element={<Screen3 />} />
                <Route exact path="/contact" element={<Screen4 />} />
            </Routes>
        </AnimatePresence>
    )
}

export default MainRouter