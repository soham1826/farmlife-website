import { motion } from "motion/react"

const Hero = () => {
  return (
    <div className="relative h-screen">
         <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        poster="/video-poster.png"
      >
        <source
          src="/hero.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-6xl px-4">
          <motion.h1 
          initial={{
            opacity:0,
            y:-50
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:2
          }}
          viewport={{
            once:true
          }}
          className="text-4xl md:text-6xl md:leading-[70px] font-bold text-white mb-6 font-outfit ">
          Turn Your Dream <span className=" underline-offset-5 underline underline-primary-green">Agricultural Projects</span> Into Reality With <span className="text-primary-green">Farmlife.</span> 
          </motion.h1>
          <motion.div initial={{
            opacity:0,
            y:30
          }} whileInView={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:2
          }}
          viewport={{
            once:true
          }}
          >
          <p className=" font-outfit text-xl md:text-2xl text-white/90">
            Partner with us for your smooth Agro-Journey
          </p>
          <button onClick={()=> window.location.href = '/#contact'} className="mt-8 px-8 py-3 bg-primary-green text-white rounded-full hover:bg-green-700 transition-colors">
            Get Started
          </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero