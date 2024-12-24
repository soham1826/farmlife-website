import MaxWidthWrapper from "./MaxWidthWrapper"
import { motion } from "motion/react"
const About = () => {
  return (
    <div className="min-h-screen">
    <MaxWidthWrapper>
      <div className="flex flex-col items-center justify-center py-10 gap-16">
        <h1 className="font-outfit font-bold md:text-6xl text-4xl">About Us</h1>
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center lg:items-start ">
          <motion.div
          initial={{
            opacity:0,
            x:-100
          }}
          whileInView={{
            opacity:1,
            x:0
          }}
          transition={{
            duration:1
          }}
          viewport={{
            once:true
          }}
          className="w-[90%] h-full">
          <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800" alt="Sustainable Farming"  className="w-full rounded-md h-full object-cover"/>
          </motion.div>
         <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 px-2 flex flex-col justify-center text-justify"
            >
              <p className="text-lg md:text-xl  text-gray-600 leading-relaxed">
                <span className="text-xl md:text-2xl font-semibold text-green-600 ">At FarmLife Agrotech</span> , we believe in the power of blending tradition with innovation to revolutionize agriculture. Our journey began with a clear and compelling vision: to empower farmers and agricultural enthusiasts by bridging the gap between time-honored farming practices and cutting-edge modern techniques..
              </p>
              
              <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
              We are more than consultants – we are dedicated partners in your success. From the bustling farms of dairy and aquaculture to the serene fields of pearl and organic farming, we specialize in providing end-to-end project consultancy tailored to your unique needs.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
              Our mission is to enable farmers and entrepreneurs to realize their agricultural dreams by offering comprehensive support. Whether it’s setting up modern farming projects or securing financial assistance through Indian government schemes, we walk with you every step of the way, ensuring sustainable growth and success.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
              Join us as we transform the future of agriculture, one project at a time. With FarmLife Agrotech, your vision of modern farming is just the beginning of a thriving journey..
              </p>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-green-300"
              >
                <p className="text-green-800 font-medium text-lg md:text-xl">
                  "We believe in sustainable growth that benefits not just individual farmers, but entire communities. Our approach combines financial expertise with agricultural knowledge to create lasting impact."
                </p>
              </motion.div>
            </motion.div>

        </div>
      </div>
    </MaxWidthWrapper>

    </div>
  )
}

export default About