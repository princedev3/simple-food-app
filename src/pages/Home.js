import React from 'react'
import Popular from '../component/Popular'
import Veggie from '../component/Veggie'
import {motion} from "framer-motion"

const Home = () => {
  return (
    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.3}}
    >
        <Popular/>
        <Veggie/>
    </motion.div>
  )
}

export default Home