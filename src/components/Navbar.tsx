import MaxWidthWrapper from "./MaxWidthWrapper"
import { Bars3Icon } from "@heroicons/react/16/solid"
import { XCircleIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
// import { motion } from "motion/react"
const Navbar = () => {

  const[toggleMobile, setToggleMobile] = useState<boolean>(false)
  // const handleMobileOpen= ()=>{
  //   setToggleMobile(true)
  // }
  // const handleMobileclose= ()=>{
  //   setTimeout(()=>{
  //     setToggleMobile(true)
  //   },400)
  // }

  const handleClose =()=>{
    setToggleMobile(false)
  }
  return (
    <div className="bg-gray-200 shadow-md  w-full h-auto py-2 backdrop-blur-sm fixed z-50">
        <MaxWidthWrapper>
            <div className="flex justify-between items-center">
                <img className="w-[100px] lg:w-[120px] h-[50px] lg:h-[70px] rounded-lg" src="/logo.png"/>
                <span className="w-auto h-full p-4 hidden lg:block">
                <ul className=" w-full h-full  flex flex-row justify-evenly gap-16 text-xl font-outfit font-normal text-gray-700">
                <a href="/#home" className="hover:text-primary-green cursor-pointer">Home</a>
                    <a href="/#about" className="hover:text-primary-green cursor-pointer">About</a>
                    <a href="/#services" className="hover:text-primary-green cursor-pointer">Services</a>
                    <a href="/#projects" className="hover:text-primary-green cursor-pointer">Projects</a>
                    <a href="/#contact" className="hover:text-primary-green cursor-pointer">Contact</a>
                    
                </ul>
                </span>
                <span className="lg:hidden">
                <Bars3Icon onClick={()=>setToggleMobile(true)} className="w-10 h-10 text-black"/>
                </span>

                {toggleMobile ? 
                <div
                className="absolute right-0 top-0 w-[60%] h-screen z-50 bg-gray-200 lg:hidden flex flex-col items-center justify-center p-10 ">
                  <XCircleIcon className="w-10 h-10" onClick={()=>{setToggleMobile(false)}}/>
                  <ul className=" w-full h-full  flex flex-col justify-center gap-10 items-center text-2xl font-outfit font-normal text-black">
                    

                    <a href="/#home" className="hover:text-primary-green cursor-pointer" onClick={handleClose}>Home</a>
                    <a href="/#about" className="hover:text-primary-green cursor-pointer" onClick={handleClose}>About</a>
                    <a href="/#services" className="hover:text-primary-green cursor-pointer" onClick={handleClose}>Services</a>
                    <a href="/#projects" className="hover:text-primary-green cursor-pointer"onClick={handleClose}>Projects</a>
                    <a href="/#contact" className="hover:text-primary-green cursor-pointer" onClick={handleClose}>Contact</a>


                    
                </ul>
                </div>
                  : <></>}
               
            </div>
        </MaxWidthWrapper>
    </div>
  )
}

export default Navbar