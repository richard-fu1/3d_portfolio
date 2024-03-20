import { ballys, jamlabs, svs, cooperators } from '../assets/images'
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from '../assets/icons'

export const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
]

export const experiences = [
  {
    title: 'Full Stack Software Developer',
    company_name: "Bally's Interactive",
    icon: ballys,
    iconBg: '#accbe1',
    date: 'January 2022 - October 2023',
    points: [
      'Improved infrastructure across different microservices to expand the application to new regions, saving the company weeks in production time and resources.',
      'Identifed bugs by monitoring existing services using Splunk and Dynatrace, ensuring steady performance and reliability.',
      'Troubleshot and resolved issues by tracing through applications developed using React, Spring, Docker, and Kubernetes, ensuring stable and expected functionality in new regions.',
      'Aided in improving CI/CD processes using GoCD and Ansible, contributing to efficient software delivery.',
      'Collaborated with teams from different technical areas to provide seamless application integration.',
      'Designed and architected an automation application using Spring to improve efficiency and reduce errors.',
    ],
  },
  {
    title: 'Full Stack Software Engineer',
    company_name: 'Jamlabs Data Science',
    icon: jamlabs,
    iconBg: '#fbc3bc',
    date: 'May 2021 - August 2021',
    points: [
      'Refactored back-end Express codebase to standardize error handling and simplify debugging.',
      'Utilized functional components in React and Redux Hooks to create front-end features for users.',
      'Implemented automated front and back end testing suites using Jest to ensure code quality.',
      'Used a variety of AWS services, including DynamoDB, to manage application data.',
      'Collaborated in a team of three to complete assigned sprint tasks with little management oversight.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Sky View Suites',
    icon: svs,
    iconBg: '#b7e4c7',
    date: 'May 2020 - August 2020',
    points: [
      'Streamlined invoice creation to generate tens of thousands of invoices early, reducing human error by 85%',
      'Updated authorization system utilizing open source PHP solution to ensure product security.',
      'Implemented a testing suite using PHPUnit to facilitate automatic unit testing on build.',
      'Leveraged templating in Vue.js to create front-end dashboards for various teams.',
      'Collaborated with developers to design, architect, and develop new system features.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Co-operators',
    icon: cooperators,
    iconBg: '#a2d2ff',
    date: 'January 2020 - April 2020',
    points: [
      'Created a web manual to give insurance brokers up-to-date information on company specific terminology and best practices.',
      'Implemented front-end functionality with React and used Redux for state management.',
      'Designed and developed a web server and database using Express and MongoDB.',
      'Utilized Jest, Jasmine, Mocha and Chai to create an automated unit testing suite.',
      "Produced end of sprint demo videos to show the current sprint's progress to clients.",
    ],
  },
]

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/richard-fu1',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/rui-qi-fu/',
  },
]

export const projects = [
  {
    iconUrl: null,
    theme: 'btn-back-red',
    name: '3D Portfolio',
    description:
      'The source code for the current portfolio! Written using React and using Three.js and Tailwind CSS packages.',
    link: 'https://github.com/richard-fu1/3d_portfolio',
  },
  {
    iconUrl: null,
    theme: 'btn-back-green',
    name: 'Asteroids GA',
    description:
      'An HTML + Javascript version of the classic Asteroids game, with the ability to train a neural network using genetic algorithms.',
    link: 'https://github.com/richard-fu1/asteroidsGA',
  },
  {
    iconUrl: null,
    theme: 'btn-back-blue',
    name: 'Front-end Reddit clone',
    description: 'Created a front-end reddit clone using Next.js and Firebase,',
    link: 'https://github.com/richard-fu1/reddit-clone-nextjs-practice',
  },
]
