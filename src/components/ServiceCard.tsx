import React from 'react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  image: string;
  size?: 'small' | 'large';
  // index: number;
}

const ServiceCard = ({ title, description, icon: Icon, image, size = 'small' }: ServiceCardProps) => {
  const isLarge = size === 'large';
  
  return (
    <motion.div
      // initial={{ opacity: 0, }}
      // whileInView={{ opacity: 1}}
      // transition={{ duration: 1}}
      // viewport={{ once: true }}
      className={`
        group relative overflow-hidden font-outfit
        ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}
        rounded-3xl bg-white border border-gray-200
        hover:border-green-500 transition-all duration-500
        ${isLarge ? 'aspect-[1.5/1]' : 'aspect-square'}
      `}
    >
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
      </div>
      
      <div className="relative h-full p-6 flex flex-col justify-end text-white">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="mb-4 p-3 bg-white/20 backdrop-blur-sm rounded-2xl w-fit"
        >
          <Icon className="h-6 w-6 text-white" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="space-y-2"
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-md leading-relaxed text-gray-200 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {description}
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default ServiceCard;