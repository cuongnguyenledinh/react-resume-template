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
// import heroImage from "../images/header-background.webp";
import heroImage from "../images/bg_dalat.jpg";
import porfolioImage3 from "../images/portfolio/cuongnguyen_dev.png";
import porfolioImage4 from "../images/portfolio/longheng_1.jpg";
import porfolioImage5 from "../images/portfolio/polymate_1.jpg";
// import porfolioImage1 from "../images/portfolio/portfolio-1.jpg";
// import porfolioImage2 from "../images/portfolio/portfolio-2.jpg";
// import porfolioImage3 from "../images/portfolio/portfolio-3.jpg";
// import porfolioImage4 from "../images/portfolio/portfolio-4.jpg";
// import porfolioImage5 from "../images/portfolio/portfolio-5.jpg";
// import porfolioImage6 from "../images/portfolio/portfolio-6.jpg";
// import porfolioImage7 from "../images/portfolio/portfolio-7.jpg";
// import porfolioImage8 from "../images/portfolio/portfolio-8.jpg";
// import porfolioImage9 from "../images/portfolio/portfolio-9.jpg";
// import porfolioImage10 from "../images/portfolio/portfolio-10.jpg";
// import porfolioImage11 from "../images/portfolio/portfolio-11.jpg";
import porfolioImage1 from "../images/portfolio/vietcetera_1.jpg";
import porfolioImage2 from "../images/portfolio/vietcetera_2.jpg";
import profilepic from "../images/profilepic.jpg";
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
        I'm a Vietnamese-based <strong className="text-stone-100">Mobile Developer</strong>, currently working at{" "}
        <strong className="text-stone-100">Quintet Systems</strong> as part of the R&D team, helping develop{" "}
        <strong>Cloud at the Light Speed (CALS)</strong> - a modern Low Code Development Platform.
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
  profileImageSrc: profilepic,
  description: `Experienced React Native Developer with 6+ years in mobile app development. Proven ability in testing, collaboration, and delivering high-performance apps.`,
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
        level: 7,
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
        level: 4,
      },
      {
        name: "Swift",
        level: 3,
      },
      {
        name: "Kotlin",
        level: 3,
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
    image: porfolioImage1,
  },
  {
    title: "Vietcetera Play Store",
    description:
      "You can read all the content of Vietcetera for free, save and share articles, and listen to podcasts.",
    url: "https://play.google.com/store/apps/details?id=com.vietcetera&hl=vi",
    image: porfolioImage2,
  },
  {
    title: "Portfolio Website cuongnguyen.dev",
    description: "My personal portfolio website, built with Next.js",
    url: "https://cuongnguyen.dev/",
    image: porfolioImage3,
  },
  {
    title: "Long Heng App",
    description:
      "Long Heng Air-Con Design Pte Ltd specialises in air conditioning installation, maintenance and cleaning service in Singapore.",
    url: "https://cuongnguyen.dev/",
    image: porfolioImage4,
  },
  {
    title: "Polymate App",
    description:
      "Polymate - a geolocated social network with verified profiles that ensures real-time, authentic content while rewarding its users.",
    url: "https://cuongnguyen.dev/",
    image: porfolioImage5,
  },
  // {
  //   title: "Project title 6",
  //   description: "Give a short description of your project here.",
  //   url: "https://cuongnguyen.dev/",
  //   image: porfolioImage6,
  // },
  // {
  //   title: "Project title 7",
  //   description: "Give a short description of your project here.",
  //   url: "https://cuongnguyen.dev/",
  //   image: porfolioImage7,
  // },
  // {
  //   title: "Project title 8",
  //   description: "Give a short description of your project here.",
  //   url: "https://cuongnguyen.dev/",
  //   image: porfolioImage8,
  // },
  // {
  //   title: "Project title 9",
  //   description: "Give a short description of your project here.",
  //   url: "https://cuongnguyen.dev/",
  //   image: porfolioImage9,
  // },
  // {
  //   title: "Project title 10",
  //   description: "Give a short description of your project here.",
  //   url: "https://cuongnguyen.dev/",
  //   image: porfolioImage10,
  // },
  // {
  //   title: "Project title 11",
  //   description: "Give a short description of your project here.",
  //   url: "https://cuongnguyen.dev/",
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItemType[] = [
  {
    date: "2014 - 2018",
    location: "Ho Chi Minh City University of Technology (HCMUT)",
    title: "Computer Science",
    content: <p>Major: Computer Science. 3 years at HCMUT.</p>,
  },
];

export const experience: TimelineItemType[] = [
  {
    date: "OCT 2024  -  PRESENT",
    location: "Quintet Systems, R&D Department",
    title: "Senior Mobile Developer",
    content: (
      <div>
        <p>
          <strong>Project CALS SDK - Mobile React Native SDK</strong>
        </p>
        <p>
          <strong>Responsibilities:</strong>
        </p>
        <ul>
          <li>• Research and build CALS React Native SDK based on the current native versions.</li>
          <li>• Feedback on UI/UX.</li>
          <li>• Write documentation.</li>
          <li>• Support other projects on bug fixing.</li>
        </ul>
        <p>
          <strong>Features: </strong>Low Code Development Platform
        </p>
        <p>
          <strong>Technology: </strong>Zustand, Nitro/Native module, AWS-Amplify, Private Gitlab package, CI/CD
        </p>
      </div>
    ),
  },
  {
    date: "OCT 2022  -  AUG 2024",
    location: "Bamboo Careers",
    title: "Mobile Developer",
    content: (
      <div>
        <p>
          <strong>Project Bamboo Careers - Mobile App</strong>
        </p>
        <p>Joined Bamboo Careers at its inception as an early team member.</p>
        <p>
          <strong>Responsibilities:</strong>
        </p>
        <ul>
          <li>• Build & upload app to App Store & Play Store.</li>
          <li>• Handle back-end side using Firestore Database.</li>
          <li>• Feedback on UI/UX.</li>
        </ul>
        <p>
          <strong>Features: </strong>Business app, Career Paths, Salary Advisor, Chatbot
        </p>
        <p>
          <strong>Technology: </strong>Redux, Firestore Database, Firebase services, IAP, ChatGPT
        </p>
      </div>
    ),
  },
  {
    date: "OCT 2022  -  APR 2023",
    location: "Asure Pro",
    title: "Mobile Developer",
    content: (
      <div>
        <p>
          <strong>Project Long Heng & Long Heng Biz - Mobile App</strong>
        </p>
        <p>
          <strong>Part-time - Oursource project</strong>
        </p>
        <p>
          <strong>Responsibilities:</strong>
        </p>
        <ul>
          <li>• Build & upload app to App Store & Play Store.</li>
          <li>• Feedback on UI/UX.</li>
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
    date: "Aug 2021  -  Oct 2022",
    location: "Vietcetera",
    title: "Software Developer- React Native/ReactJS/NodeJS",
    content: (
      <div>
        <p>
          <strong>App Vietcetera</strong>
        </p>
        <p>
          <strong>Responsibilities:</strong>
        </p>
        <ul>
          <li>• Rebuild project from scratch.</li>
          <li>• Analyze requirements & make decisions on technical solutions.</li>
          <li>• Write documentation.</li>
          <li>• Suggest ideas, research new technologies.</li>
          <li>• Mentor & review code for junior team member.</li>
          <li>• Feedback on UI/UX.</li>
        </ul>
        <p>
          <strong>Features: </strong>Read Articles, Listen Podcast, Watch Video
        </p>
        <p>
          <strong>Technology: </strong>Redux, RESTful API, GA4, SmartOcto
        </p>
        <br />
        <p>
          <strong>Web CMS Vietcetera</strong>
        </p>
        <p>
          <strong>Responsibilities:</strong>
        </p>
        <ul>
          <li>• Build web CMS</li>
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
      name: "John Doe",
      text: "Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.",
      image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg",
    },
    {
      name: "Jane Doe",
      text: "Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).",
      image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg",
    },
    {
      name: "Someone else",
      text: "Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.",
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
