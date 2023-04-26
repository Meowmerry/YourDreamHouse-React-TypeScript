import HomePageGraphic from "@/assets/bgHome.mp4";
import { motion } from "framer-motion";
const Home = ()=>{

    return (
        <section id="home" className="md:h-full md:pb-0">
        <motion.div
        className="w-full items-center justify-center md:flex md:h-5/6">
       <video className="w-full" src={HomePageGraphic} autoPlay loop muted/>
       <div className={` 
       
       absolute lg:top-64 md:top-2/4 xs:top-1/3 xs:text-4xl sm:top-1/3 left-20 hard-shadow sm:text-5xl md:text-7xl lg:text-4xl`}>
        <div>Your Dream,</div> 
         <div>Home </div>
         </div>
        </motion.div>
        </section>
    )
}
export default Home