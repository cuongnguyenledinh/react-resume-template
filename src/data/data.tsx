import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import FacebookIcon from "../components/Icon/FacebookIcon";
import GithubIcon from "../components/Icon/GithubIcon";
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from "../components/Icon/LinkedInIcon";
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from "../images/header-background.webp";
// import heroImage from "../images/bg_dalat.jpg";
import portfolioImage3 from "../images/portfolio/cuongnguyen_dev.png";
import portfolioImage4 from "../images/portfolio/longheng_1.jpg";
import portfolioImage5 from "../images/portfolio/polymate_1.jpg";
import portfolioImage1 from "../images/portfolio/vietcetera_1.jpg";
import portfolioImage2 from "../images/portfolio/vietcetera_2.jpg";
// import portfolioImage1 from "../images/portfolio/portfolio-1.jpg";
// import portfolioImage2 from "../images/portfolio/portfolio-2.jpg";
// import portfolioImage3 from "../images/portfolio/portfolio-3.jpg";
// import portfolioImage4 from "../images/portfolio/portfolio-4.jpg";
// import portfolioImage5 from "../images/portfolio/portfolio-5.jpg";
// import portfolioImage6 from "../images/portfolio/portfolio-6.jpg";
// import portfolioImage7 from "../images/portfolio/portfolio-7.jpg";
// import portfolioImage8 from "../images/portfolio/portfolio-8.jpg";
// import portfolioImage9 from "../images/portfolio/portfolio-9.jpg";
// import portfolioImage10 from "../images/portfolio/portfolio-10.jpg";
// import portfolioImage11 from "../images/portfolio/portfolio-11.jpg";
import profilePic from "../images/profile_pic.jpg";
import testimonialImage from "../images/testimonial.webp";
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  type TimelineItemType,
} from "./dataDef";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "React Resume Template",
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Contact: "contact",
  Portfolio: "portfolio",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
  Testimonials: "testimonials",
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Cuong Nguyen.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Vietnamese-based <strong className="text-stone-100">Front-end Developer</strong>, currently working at{" "}
        <strong className="text-stone-100">Quintet Systems</strong> as part of the R&D team, helping develop{" "}
        <strong>Cloud at the Light Speed(CALS)</strong> - a modern Low Code Development Platform.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I love playing <strong className="text-stone-100">badminton</strong>, hitting the road on my{" "}
        <strong className="text-stone-100">motorbike</strong>, and exploring the beauty of{" "}
        <strong className="text-stone-100">Vietnam</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: "/assets/resume.pdf",
      text: "Resume",
      primary: true,
      Icon: ArrowDownTrayIcon,
      target: "_blank",
    },
    {
      href: `#${SectionId.Contact}`,
      text: "Contact",
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilePic,
  description: `Experienced Front-end Developer with 6+ years of expertise in mobile app development, specializing in React Native. Skilled at building high-performance, scalable apps with a strong focus on testing, collaboration, and delivering seamless user experiences.`,
  aboutItems: [
    { label: "Location", text: "Ho Chi Minh City, Vietnam", Icon: MapIcon },
    { label: "Age", text: "29", Icon: CalendarIcon },
    { label: "Nationality", text: "Vietnamese", Icon: FlagIcon },
    { label: "Interests", text: "Motorcycles, Badminton, Travel, Camping", Icon: SparklesIcon },
    { label: "Study", text: "Ho Chi Minh City University of Technology (HCMUT)", Icon: AcademicCapIcon },
    { label: "Employment", text: "Quintet Systems", Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: "Spoken languages",
    skills: [
      {
        name: "Vietnamese",
        level: 10,
      },
      {
        name: "English",
        level: 6,
      },
    ],
  },
  {
    name: "Frontend development",
    skills: [
      {
        name: "React",
        level: 8,
      },
      {
        name: "Typescript",
        level: 6,
      },
      {
        name: "GraphQL",
        level: 5,
      },
    ],
  },
  {
    name: "Backend development",
    skills: [
      {
        name: "Node.js",
        level: 4,
      },
    ],
  },
  {
    name: "Mobile development",
    skills: [
      {
        name: "React Native",
        level: 9,
      },
      {
        name: "Flutter",
        level: 5,
      },
      {
        name: "Swift",
        level: 4,
      },
      {
        name: "Kotlin",
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Vietcetera App Store",
    description:
      "A content hub connecting Vietnam with the world, offering free access to articles with save and share features.",
    url: "https://apps.apple.com/us/app/vietcetera/id1564202068",
    image: portfolioImage1,
  },
  {
    title: "Vietcetera Play Store",
    description:
      "You can read all the content of Vietcetera for free, save and share articles, and listen to podcasts.",
    url: "https://play.google.com/store/apps/details?id=com.vietcetera&hl=vi",
    image: portfolioImage2,
  },
  {
    title: "Portfolio Website cuongnguyen.dev",
    description: "My personal portfolio website, built with Next.js",
    url: "https://cuongnguyen.dev/",
    image: portfolioImage3,
  },
  {
    title: "Long Heng App",
    description:
      "Long Heng Air-Con Design Pte Ltd specialises in air conditioning installation, maintenance and cleaning service in Singapore.",
    url: "https://cuongnguyen.dev/",
    image: portfolioImage4,
  },
  {
    title: "Polymate App",
    description:
      "Polymate - a geolocated social network with verified profiles that ensures real-time, authentic content while rewarding its users.",
    url: "https://cuongnguyen.dev/",
    image: portfolioImage5,
  },
  // {
  //   title: "Project title 6",
  //   description: "Give a short description of your project here.",
  //   url: "https://cuongnguyen.dev/",
  //   image: portfolioImage6,
  // },
  // {
  //   title: "Project title 7",
  //   description: "Give a short description of your project here.",
  //   url: "https://cuongnguyen.dev/",
  //   image: portfolioImage7,
  // },
  // {
  //   title: "Project title 8",
  //   description: "Give a short description of your project here.",
  //   url: "https://cuongnguyen.dev/",
  //   image: portfolioImage8,
  // },
  // {
  //   title: "Project title 9",
  //   description: "Give a short description of your project here.",
  //   url: "https://cuongnguyen.dev/",
  //   image: portfolioImage9,
  // },
  // {
  //   title: "Project title 10",
  //   description: "Give a short description of your project here.",
  //   url: "https://cuongnguyen.dev/",
  //   image: portfolioImage10,
  // },
  // {
  //   title: "Project title 11",
  //   description: "Give a short description of your project here.",
  //   url: "https://cuongnguyen.dev/",
  //   image: portfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItemType[] = [
  {
    date: "2014 - 2017",
    location: "Ho Chi Minh City",
    title: "Ho Chi Minh City University of Technology (HCMUT)",
    content: <p>Major: Computer Science</p>,
  },
];

export const experience: TimelineItemType[] = [
  {
    date: "Oct 2024 - Present",
    location: "Quintet Systems, R&D Department",
    title: "Project CALS SDK - Senior Mobile Developer",
    content: (
      <div>
        <ul>
          <li>Research and build the CALS React Native SDK based on existing native SDK.</li>
          <li>Provided UI/UX feedback to improve developer experience.</li>
          <li>Authored documentation to support adoption and integration across teams.</li>
          <li>Supported other projects with bug fixing and SDK integration guidance.</li>
        </ul>
        <p>
          <strong>Features: </strong>Cloud at the Light Speed(CALS) - Low Code Development Platform
        </p>
        <p>
          <strong>Technology: </strong>Zustand, Nitro/Native module, AWS-Amplify, Private Gitlab package, CI/CD
        </p>
      </div>
    ),
  },
  {
    date: "Oct 2022 - Aug 2024",
    location: "Bamboo Careers",
    title: "Project Bamboo Careers - Mobile Developer",
    content: (
      <div>
        <ul>
          <li>Joined as an early team member, helping build and launch the Bamboo Careers app from scratch.</li>
          <li>Built and published the app on both App Store & Google Play.</li>
          <li>Integrated backend using Firestore Database and Firebase services.</li>
          <li>
            Implemented core features: Career Paths, Salary Advisor, in-app purchases, and chatbot powered by ChatGPT.
          </li>
          <li>Collaborated on UI/UX improvements to boost user engagement.</li>
          <li>
            Reached 2,000+ users with 50+ daily active users (DAU) and initial revenue from 10+ Premium subscribers.
          </li>
        </ul>

        <p>
          <strong>Features:</strong> Business app, Career Paths, Salary Advisor, Chatbot
        </p>

        <p>
          <strong>Technology:</strong> React Native, Redux, Firebase services, Firestore Database, IAP, ChatGPT
        </p>
      </div>
    ),
  },
  {
    date: "Oct 2022  -  Apr 2023",
    location: "Asure Pro",
    title: "Project Long Heng & Long Heng Biz - Mobile Developer",
    content: (
      <div>
        <ul>
          <li>Part-time - Outsource project</li>
          <li>Developed and published apps on App Store & Google Play.</li>
          <li>Collaborated on UI/UX improvements to enhance usability.</li>
        </ul>
        <p>
          <strong>Features: </strong>Lifestyle app, Air-con service provider
        </p>
        <p>
          <strong>Technology: </strong>Redux
        </p>
      </div>
    ),
  },
  {
    date: "Aug 2021 - Oct 2022",
    location: "Vietcetera",
    title: "Project Vietcetera - Software Developer",
    content: (
      <div>
        <p>
          <strong>App Vietcetera</strong>
        </p>
        <ul>
          <li>Rebuilt & published the app from scratch to improve performance and scalability.</li>
          <li>Analyzed requirements and provided technical solutions.</li>
          <li>Authored documentation and mentored team members through code reviews.</li>
          <li>Suggested new ideas, researched technologies, and provided UI/UX feedback.</li>
          <li>Reached 30,000+ installs across App Store and Google Play, serving thousands of daily active users.</li>
        </ul>
        <p>
          <strong>Features: </strong>Read Articles, Listen Podcast, Watch Video
        </p>
        <p>
          <strong>Technology: </strong>React Native/ReactJS/NodeJS, Redux, RESTful API, GA4, SmartOcto
        </p>
        <br />
        <p>
          <strong>Web CMS Vietcetera</strong>
        </p>
        <ul>
          <li>Build web CMS</li>
        </ul>
        <p>
          <strong>Features: </strong>Podcast Management, Notification Management, Article Management,...
        </p>
        <p>
          <strong>Technology: </strong>ReactJS
        </p>
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: "Ha Anh (Maddie) Tong",
      text: "Working with Cuong on a React Native project, I was impressed by his strong technical knowledge and consistent adherence to standard patterns and best practices in mobile development. He consistently delivered high-quality work and was willing to support and transfer knowledge to more junior developers like myself. Regarding client-facing skills, Cuong effectively communicated with the customer to understand their needs and develop user-friendly app features with reliable integrations, bringing valuable digital solutions to the customer's business.\nAs a subject matter expert in React Native and mobile development, he not only stays up-to-date with new mobile technologies and practices but also has working knowledge in other areas of software development. Cuong will be a great asset to any team.",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQFOzkhLyLqpCQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708872455901?e=1761782400&v=beta&t=b5A63S0YSoe38Tx6chqe52rxBs6h0CsmqZxoeSIDzII",
    },
    {
      name: "My colleague 2",
      text: "To be updated!",
      image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg",
    },
    {
      name: "Someone else",
      text: "To be updated!",
      image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg",
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "Get in touch.",
  description: "Feel free to reach out — I'd love to hear from you!",
  items: [
    {
      type: ContactType.Email,
      text: "cuongnguyenledinh@gmail.com",
      href: "mailto:cuongnguyenledinh@gmail.com",
    },
    {
      type: ContactType.Location,
      text: "Ho Chi Minh City, Vietnam",
      href: "https://maps.app.goo.gl/HypJLNccc3k2421i7",
    },
    {
      type: ContactType.Facebook,
      text: "@nldcuong",
      href: "https://www.facebook.com/@nldcuong",
    },
    {
      type: ContactType.Github,
      text: "cuongnguyenledinh",
      href: "https://github.com/cuongnguyenledinh",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: "Github", Icon: GithubIcon, href: "https://github.com/cuongnguyenledinh" },
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  { label: "LinkedIn", Icon: LinkedInIcon, href: "https://www.linkedin.com/in/nldcuong/" },
  { label: "Facebook", Icon: FacebookIcon, href: "https://www.facebook.com/nldcuong/" },
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
