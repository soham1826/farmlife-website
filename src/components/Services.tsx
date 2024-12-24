import MaxWidthWrapper from "./MaxWidthWrapper"

import ServiceGrid from "./ServiceGrid"




const Services = () => {

    

  return (
    <div className="min-h-screen bg-my-white">
        <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center font-outfit py-10">
        <h1 className="font-outfit font-bold md:text-6xl text-4xl">Services</h1>
        <p className="text-gray-600 text-xl my-2"> We are with you from start to end of journey</p>
        <ServiceGrid/>
        </div>
        </MaxWidthWrapper>
    </div>
  )
}

export default Services