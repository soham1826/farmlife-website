import MaxWidthWrapper from "./MaxWidthWrapper"
import { motion } from "motion/react"
import { slideIn } from "@/animations/variants"
import {useForm} from 'react-hook-form'
import { PhoneIcon,MapPinIcon,EnvelopeIcon } from "@heroicons/react/16/solid"
const Contact = () => {
    const { register, handleSubmit } = useForm();
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (formData:any) => {
    window.location.href = `mailto:farmlife413@gmail.com?subject=${formData.subject}&body= Hi my name is ${formData.name}, ${formData.message} here are my details (${formData.email} , ${formData.phone})`;
  };
  return (
    <div className="h-auto bg-my-white pb-10">
        <MaxWidthWrapper>
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-2">
                <h2 className="font-outfit font-bold md:text-6xl text-4xl">Contact</h2>
                <p className="text-gray-600 text-xl mt-2  mb-10"> Have a query ? reach us out here . 
                </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-10 ">
                    <motion.div 
                    variants={slideIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-full lg:w-[60%]">
                    <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-full font-outfit text-lg px-2 "
            autoComplete="off"
          >
              <input
                {...register("name")}
                className="contact-input-new"
                type="text"
                placeholder="Name"
              />
              <input
                {...register("email")}
                className="contact-input-new"
                type="text"
                placeholder="Email"
              />
              <input
                {...register("phone")}
                className="contact-input-new"
                type="text"
                placeholder="Phone"
              />
            <input
              {...register("subject")}
              className="contact-input-new
               w-[100%]"
              type="text"
              placeholder="Subject"
            />
            <textarea
              {...register("message")}
              className="contact-input-new
               w-[100%]"
              placeholder="Message"
            />
            <button className="bg-Scream p-3 rounded-md bg-primary-green text-my-white">
              Submit
            </button>
          </form>
            </motion.div>
            <motion.div 
            variants={slideIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 lg:w-[40%] w-full" 
          >
            <div className="flex items-start space-x-4 text-lg md:text-xl">
              <MapPinIcon className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">Farmlife Agrotech LLP <br/> Business center 809, City center mall road , Govind Nagar<br />Nashik 422009</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 textlg md:text-xl">
              <PhoneIcon className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+919823174264 ,+918208935650 </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 text-lg md:text-xl">
              <EnvelopeIcon className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">farmlife413@gmail.com</p>
              </div>
            </div>
          </motion.div>
            
           </div>

            </div>
            {/* <div className="flex w-full h-full flex-col items-center justify-center py-10">
            <h2 className="font-outfit font-bold md:text-6xl text-4xl">Contact</h2>
            <p className="text-gray-600 text-xl mt-2  mb-10"> Have a query ? reach us out here . 

            </p>

            <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-5 lg:gap-0">
            <motion.div
            variants={slideIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-[80%] w-full"
          >
            <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-full lg:w-[80%] font-outfit text-lg px-2 "
            autoComplete="off"
          >
              <input
                {...register("name")}
                className="contact-input-new"
                type="text"
                placeholder="Name"
              />
              <input
                {...register("email")}
                className="contact-input-new"
                type="text"
                placeholder="Email"
              />
            <input
              {...register("subject")}
              className="contact-input-new
               w-[100%]"
              type="text"
              placeholder="Subject"
            />
            <textarea
              {...register("message")}
              className="contact-input-new
               w-[100%]"
              placeholder="Message"
            />
            <button className="bg-Scream p-3 rounded-md bg-primary-green text-my-white">
              Submit
            </button>
          </form>
          </motion.div>
          <motion.div 
            variants={slideIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 lg:w-[20%] w-full bg-red-200" 
          >
            <div className="flex items-start space-x-4">
              <MapPinIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">123 Farming Street, Agricultural District<br />New Delhi, 110001</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <PhoneIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <EnvelopeIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">info@farmlifeagrotech.com</p>
              </div>
            </div>
          </motion.div> 

            </div>
            </div> */}
        </MaxWidthWrapper>
    </div>
  )
}

export default Contact