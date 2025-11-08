/* eslint-disable quotes */
export const name = 'Saifur Rahman Emon';
export const jobTitle = 'Software Developer';
export const company = 'Earnest Data Analytics';
export const aboutMe = `
Hello! I'm Saifur Rahman Emon, a dedicated software developer with a fervent passion for crafting exceptional digital products.My journey in the world of software development has been nothing short of exhilarating. I thrive on the challenge of transforming innovative ideas into functional and user-friendly solutions that make a real difference. Whether it's crafting elegant algorithms or designing intuitive user interfaces, I relish every moment of the creative process.

My coding adventures have not only honed my technical skills but also instilled in me a deep appreciation for collaboration and teamwork. I firmly believe that the best results are achieved when diverse talents come together to tackle complex problems. My ability to communicate and work harmoniously within a team is something I take immense pride in.

When I'm not immersed in lines of code, you'll often find me lost in the world of literature, flipping through the pages of captivating books, or embracing the exhilarating freedom of the open road as I ride my bike.
`;
export const domain = 'www.saifur.me';

export const workExperience = [
  {
    company: 'Equiply',
    position: 'Co-Founder / Product Lead',
    period: 'Jun 2025 – Present',
    logo: 'Equiply',
    contributions: [
      'Equiply is a cloud-based equipment management platform that helps small businesses, schools, and NGOs track, assign, and manage their equipment in one unified system. Built in collaboration with the Deftyled Team, I lead product design and development, defining the product vision, roadmap, and user experience while balancing functionality with simplicity. I oversee end-to-end product development, branding, marketing, and user feedback integration to refine product-market fit and drive growth.'
    ]
  },
  {
    company: 'Earnest Data Analytics',
    position: 'Software Engineer',
    period: '2022 – 2025',
    logo: 'EDA',
    contributions: [
      'At Earnest Data Analytics, I led frontend development for platforms like Benefitwise, Vistar, and Meribachat, crafting performant and accessible interfaces using React, TypeScript, and Next.js. Beyond frontend work, I contributed to backend development by building microservices in Node.js with PostgreSQL and designing RESTful APIs. A key contribution was developing the Reconciliation Settlement Framework (RSF) and the Issue and Grievance Management (IGM) systems for Vistar, a participant in the ONDC ecosystem. These microservices were essential for managing financial settlements and resolving transactional issues efficiently. RSF enabled automated reconciliation and settlement workflows to ensure data consistency and timely payments, while IGM provided a robust system for tracking and resolving issues and grievances across the network.'
    ]
  },
  {
    company: 'SolutexIT',
    position: 'Full Stack Developer',
    period: '2022 – 2022',
    logo: 'TV',
    contributions: [
      'At SolutexIT, I developed a Web3-enabled platform using React alongside Ether.js and Web3.js, enabling users to fractionalize NFT ownership and trade rentable digital assets seamlessly. A major contribution was integrating the platform with OpenSea, which significantly increased fractionalized NFT sales and drove substantial growth within the first quarter of launch. This project combined blockchain technology with user-centric frontend design to deliver an innovative marketplace experience.'
    ]
  }
];

export const projects = [
  {
    name: 'Utils Kit',
    description:
      'Developed an open-source TypeScript utility library with 10+ customizable, dependency-free functions aimed at improving code clarity and developer productivity. Also built utils-kit-cli, a companion CLI tool for easy integration into TypeScript projects.',
    logo: 'DV',
    link: 'https://github.com/Saifurrahmanemon/utils-kit',
    technologies: ['TypeScript', 'Monorepo', 'CLI']
  },
  {
    name: 'Toggl Categorizer',
    description:
      'Built Toggl Categorizer, a full-stack tool designed to solve the pain of manually tagging time entries in Toggl. By integrating Toggl APIs with Google’s Gemini AI, the application automatically classifies and labels time entries based on context and historical patterns. ',
    logo: 'TF',
    link: 'https://toggl-categorizer.vercel.app',
    technologies: ['Next.JS', 'TypeScript', 'Toggl API', 'Gemini AI']
  }
];
