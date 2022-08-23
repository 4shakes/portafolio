//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.png';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/tailwind.png';
//import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'inicio',
    href: 'home',
  },
  {
    name: 'sobre mi',
    href: 'about',
  },
  {
    name: 'portafolio',
    href: 'portfolio',
  },
  {
    name: 'servicios',
    href: 'services',
  },
  /*  {
     name: 'testimonials',
     href: 'testimonials',
   }, */
  {
    name: 'contactame',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: 'https://res.cloudinary.com/dy5pejp73/image/upload/v1661206119/porfoil/derecho_familia-min_huw25v.png',
    name: 'web realizada con gatsby y tailwind',
    category: 'paginas webs',
  },
  {
    id: '2',
    image: 'https://res.cloudinary.com/dy5pejp73/image/upload/v1661206122/porfoil/la_esperanza-min_nu3e0b.png',
    name: 'web realizada con nextjs, typescript y tailwind',
    category: 'paginas webs',
  },
  {
    id: '3',
    image: 'https://res.cloudinary.com/dy5pejp73/image/upload/v1661206123/porfoil/ovum-min_g9wlnz.png',
    name: 'web realizada con nextjs, tailwind y graphql',
    category: 'paginas webs',
  },
  {
    id: '4',
    image: 'https://res.cloudinary.com/dy5pejp73/image/upload/v1661206122/porfoil/garden-min_dcrrwd.png',
    name: 'web realizada con nextjs, typescript y tailwind',
    category: 'paginas webs',
  },
  {
    id: '5',
    image: 'https://res.cloudinary.com/dy5pejp73/image/upload/v1661206110/porfoil/urby-min_mtp0hq.png',
    name: 'web realizada con nextjs, typescript y tailwind',
    category: 'paginas webs',
  },
  {
    id: '6',
    image: 'https://res.cloudinary.com/dy5pejp73/image/upload/v1661206108/porfoil/catapulta-min_h0fz1k.png',
    name: 'dashboard realizado con react y tailwind',
    category: 'dashboard',
  },
  {
    id: '7',
    image: 'https://res.cloudinary.com/dy5pejp73/image/upload/v1661206108/porfoil/mowa-min_bfmjb3.png',
    name: 'dashboard realizado con react y tailwind',
    category: 'dashboard',
  },
  {
    id: '8',
    image: 'https://res.cloudinary.com/dy5pejp73/image/upload/v1661206108/porfoil/plantilla_base-min_vazwu6.png',
    name: 'dashboard realizado con react, typescript, chakraui y graphql',
    category: 'dashboard',
  },
];

// projects
export const projectsNav = [
  {
    name: 'todos',
  },
  {
    name: 'paginas webs',
  },
  {
    name: 'dashboard',
  },
  {
    name: 'aplicaciones moviles',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at hello@youremail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bucharest, Romania',
    description: 'Serving clients worldwide',
  },
];
