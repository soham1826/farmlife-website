
import { 
  BuildingOffice2Icon,
  BanknotesIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ChartBarIcon
} from '@heroicons/react/20/solid';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: BuildingOffice2Icon,
    title: 'Project Setup & Planning',
    description: 'Comprehensive guidance for setting up farming ventures, from initial planning to execution. We handle everything to ensure your project starts strong.',
    image: '/planning2.jpg',
    size: 'small' as const,
  },
  {
    icon: BanknotesIcon,
    title: 'Loan Guidance',
    description: 'Navigate Indian state and central government schemes and financial aid opportunities with expert guidance.',
    image: '/loan.jpg',
  },
  {
    icon: UserGroupIcon,
    title: 'Training Programs',
    description: 'Hands-on training programs and certification for implementaion and maintainance of projects.',
    image: 'training.jpg',
  },
  {
    icon: DocumentTextIcon,
    title: 'Documentation',
    description: 'Streamlined handling of all paperwork and legal documentations by experts.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1280',
    size: 'small' as const,
  },
  {
    icon: ChartBarIcon,
    title: 'Go-to-Market Support',
    description: 'Support and guidance in eshtablishing market and sales for the project.',
    image: '/market.webp',
  },
];

const ServiceGrid = () => {
  return (
    <div
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-full mx-auto">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          {...service}
        />
      ))}
    </div>
  );
};

export default ServiceGrid;