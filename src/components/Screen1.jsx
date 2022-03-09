import React from 'react'
import { motion, useMotionValue, useTransform } from "framer-motion"
// import EmailSvg from "../svg/email.svg"

const Screen1 = () => {
    const [angle, setAngle] = React.useState(8)
    const [perspective, setPerspective] = React.useState(500)

    // we replace the useState with two motion values. One for each axis.
    // Since we want the card to start out flat we set the initial
    // values to x=0.5 y=0.5 which equals to no transformation
    const y = useMotionValue(0.5)
    const x = useMotionValue(0.5)

    const rotateY = useTransform(x, [0, 1], [-angle, angle], {
        clamp: true,
    })
    const rotateX = useTransform(y, [0, 1], [angle, -angle], {
        clamp: true,
    })

    const onMove = e => {
        // get position information for the card
        const bounds = e.currentTarget.getBoundingClientRect()

        // set x,y local coordinates
        const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth
        const yValue = (e.clientY - bounds.y) / e.currentTarget.clientHeight

        // update MotionValues
        x.set(xValue, true)
        y.set(yValue, true)
    }
    const onLeave = e => {
        x.set(0.5, true)
        y.set(0.5, true)
    }

    const buttonVariants = {
        hover: {
            scale: 1.3
        }
    }

    //     exit = {{ height: 0 }
    // }
    // animate = {{ height: '100vh' }}
    // transition = {{ type: 'spring', duration: 2, delay: 0.5 }}
    return (<div className="min-h-screen relative overflow-hidden" >

        <motion.div>
            <motion.h1
                className="px-6 text-4xl md:text-5xl py-3 md:py-6 font-elite ">{'<'} Kavya Murali {'/>'}</motion.h1>
            <br />
            <motion.div className='max-w-5xl md:flex font-recursive items-center h-auto lg:h-auto flex-wrap mx-auto lg:my-0'
                initial={{ y: 150 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.5, type: "spring", stiffness: 50
                }}
            >
                <div className='block lg:hidden rounded-full shadow-xl mx-auto  h-48 w-48'>
                    <motion.img
                        src='images/kavya-2.jpg'
                        alt="Kavya Murali"
                        className='rounded-t-full rounded-b-lg shadow-2xl  block overflow-hidden'
                    />
                </div>
                <motion.div className='lg:w-3/5 md:mt-0 mt-16 p-5 m-auto text-center md:text-left'>
                    <motion.h3 className='text-2xl md:text-3xl'>Hey there ! <motion.span>👋</motion.span> I am a</motion.h3>
                    <motion.h1 className="text-3xl md:text-5xl font-dancing" transition={{ type: "spring", damping: 25, stiffness: 500, duration: 1 }}>Full Stack Developer</motion.h1>
                    <h1 className="text-3xl md:text-5xl pb-6 md:pb-12">Freelancer</h1>
                    <div className="py-6">
                        <motion.a href="/images/Kavya's Resume.pdf" target="_blank" >
                            <span className="border-solid border-2 w-full hover:bg-blue-100 hover:text-gray-700 shadow-lg rounded-lg text-lg md:text-xl p-2 md:p-3 cursor-pointer" whileHover="hover"
                                variants={buttonVariants}>
                                Get my Resume
                            </span>
                        </motion.a>
                    </div>
                    <motion.div className="py-6 text-center flex gap-6 md:justify-start justify-center items-center">
                        <div className="flex items-center w-10 h-10">
                            <motion.a href="mailto:kavyamuralioff@gmail.com" target="blank" whileHover="hover"
                                variants={buttonVariants}>

                                <svg className="w-10 h-10 text-sky-100 fill-current"
                                    viewBox="0 0 412 253" xmlns="http://www.w3.org/2000/svg">
                                    <path id="XMLID_350_" d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602
		L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"
                                    /><polygon id="XMLID_351_" points="165.001,146.4 310.087,40.001 19.911,40 	" /><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                            </motion.a>
                        </div>
                        <div className="flex items-center w-10 h-10">
                            <motion.a href="https://www.linkedin.com/in/kavya2019" target="blank" whileHover="hover"
                                variants={buttonVariants}>
                                <svg
                                    className="w-10 h-10 text-sky-100 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                    ></path>
                                </svg>
                            </motion.a>
                        </div>
                        <div className="flex w-10 h-10">
                            <motion.a href="https://www.github.com/kavyaaves" target="blank" whileHover="hover"
                                variants={buttonVariants}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-sky-100 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div className='lg:w-2/5 flex items-center justify-center h-400'
                    style={{
                        perspective: 500,
                        height: "400px"
                    }}
                >
                    <motion.div onMouseMove={onMove}
                        onMouseLeave={onLeave}
                        style={{
                            rotateY,
                            rotateX,
                        }}>

                        <motion.img

                            src='images/kavy1.jpg'
                            alt="Kavya Murali"
                            // layout='fixed'

                            width={350}
                            height={300}

                            className='rounded-none lg:rounded-lg shadow-2xl hidden lg:block overflow-hidden'
                        />
                    </motion.div>
                </motion.div>
            </motion.div >
        </motion.div >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="hidden lg:grid">
            <path fill="#bae6fd" fillOpacity="1" d="M0,64L80,96C160,128,320,192,480,197.3C640,203,800,149,960,128C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div >
    )
}

export default Screen1