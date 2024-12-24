// import MaxWidthWrapper from "./MaxWidthWrapper"
import Marquee from "./ui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Modern Dairy Farming",
    body: "Expert guidance from choosing cattle breeds to opening state-of-the-art modern dairy facilities.",
    img: "/modern-dairy.jpg"
  },
  {
    name: "Normal Dairy Farming",
    body: "Step-by-step support for traditional dairy farming with a focus on efficiency and sustainability.",
    img: "/normal.jpg"
  },
  {
    name: "Goat Farming",
    body: "Comprehensive consultation for goat farming projects, including breed selection and housing setup.",
    img: "/goat-farming.jpg"
  },
  {
    name: "Fish Farming",
    body: "Guidance for fish farming projects both RAS farming and BIOFLOC, covering from pond setup to  market integration.",
    img: "/fish-farming.jpg"
  },
  {
    name: "Cold Storage",
    body: "Strategic support for building cold storage facilities to preserve produce and reduce post-harvest waste.",
    img: "/cold-storage.jpeg"
  },
  {
    name: "Pearl Farming",
    body: "Specialized solutions for pearl farming projects, including site selection and farming techniques.",
    img: "/pearl-farming.jpeg"
  },
  {
    name: "Mushroom Farming",
    body: "Support for mushroom cultivation projects with advanced techniques and insights for better yield.",
    img: "/mushroom-farming.png"
  },
  {
    name: "Honey Bee Farming",
    body: "Expert advice on setting up bee farms, covering hive management, honey production, and marketing.",
    img: "/honey.jpg"
  },
  {
    name: "Veterinary and Cattle Feed Supplements",
    body: "Providing veterinary solutions and premium feed supplements to boost livestock health and output.",
    img: "/cattle-feed.jpg"
  }
  
];
 
const firstRow = reviews

 
const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative lg:w-96 lg:h-96 w-80 h-80  cursor-pointer overflow-hidden rounded-xl border ",
        // light styles
        "border-green-200 bg-gray-950/[.01] hover:bg-green-950/[.05]",
      )}
    >
      <div className="flex flex-col items-baseline justify-end h-full">
      


        <div className="absolute inset-0 -z-10">
        <img 
          src={img} 
          alt="something"
          className="w-full h-full object-cover"
        />
      </div>
        <div className="bg-white p-2 rounded-lg font-outfit w- h-[105px] ">

        <h2 className=" text-primary-green ">{name}</h2>
        <p >{body}</p>
        </div>
      </div>

      

    </figure>
  );
};



const Projects = () => {
  return (
    <div className="min-h-screen">
            <div className="flex flex-col justify-center items-center py-12">
            <h2 className="font-outfit font-bold md:text-6xl text-4xl">Projects</h2>
            <p className="text-gray-600 text-xl my-2 text-center"> We provide consulting for wide range of projects</p>
            </div>

            <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>

      <div className="flex flex-col items-center justify-center p-4 mt-4">
        <h2 className="font-outfit font-semibold md:text-2xl text-xl">Have another project in mind ? </h2>
        <p className="text-gray-600 text-xl my-2"> We're happy to assist you </p>
        
      </div>

    
    </div>
    </div>
  )
}

export default Projects