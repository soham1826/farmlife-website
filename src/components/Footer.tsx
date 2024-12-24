import MaxWidthWrapper from "./MaxWidthWrapper"

const Footer = () => {
    
const getCurrentYear =()=> {
        return new Date().getFullYear();
    }
    

  return (
    <div className="h-auto bg-gray-300 w-full">
        <MaxWidthWrapper>
            <div className="flex flex-col lg:flex-row w-full items-center lg:justify-between justify-center p-4 gap-2 ">
                <img src="/logo.png" alt="famlife agrotech" className="w-[200px] h-[100px] "/>
                <p className="text-lg text-gray-500">

                Copyright  © {getCurrentYear()} Farmlife Agrotech LLP 

                </p>
            </div>
        </MaxWidthWrapper>
        
    </div>
  )
}

export default Footer