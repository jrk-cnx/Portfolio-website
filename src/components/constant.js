// Skills Section Logo's
import htmlLogo from "../assets/tech_logo/html.png";
import cssLogo from "../assets/tech_logo/css.png";
import javascriptLogo from "../assets/tech_logo/javascript.png";
import reactjsLogo from "../assets/tech_logo/reactjs.png";
import angularLogo from "../assets/tech_logo/angular.png";
import reduxLogo from "../assets/tech_logo/redux.png";
import tailwindcssLogo from "../assets/tech_logo/tailwindcss.png";
import materialuiLogo from "../assets/tech_logo/materialui.png";
import bootstrapLogo from "../assets/tech_logo/bootstrap.png";
import nodejsLogo from "../assets/tech_logo/nodejs.png";
import expressjsLogo from "../assets/tech_logo/express.png";
import mysqlLogo from "../assets/tech_logo/mysql.png";
import mongodbLogo from "../assets/tech_logo/mongodb.png";
import typescriptLogo from "../assets/tech_logo/typescript.png";
import gitLogo from "../assets/tech_logo/git.png";
import githubLogo from "../assets/tech_logo/github.png";
import vscodeLogo from "../assets/tech_logo/vscode.png";
import netlifyLogo from "../assets/tech_logo/netlify.png";
import vercelLogo from "../assets/tech_logo/vercel.png";

// Experience Section Logo's

// Education Section Logo's
import School from "../assets/educations_logo/school.jpg";
import Logo from "../assets/educations_logo/logo.png";
import Images from "../assets/educations_logo/images.jpeg";

// Project Section Logo's
import shopping from "../assets/work_logo/shooping.png";
import world from "../assets/work_logo/world.png";
import port from "../assets/work_logo/port.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },

      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },

      { name: "Tailwind CSS", logo: tailwindcssLogo },

      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      // { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

// export const experiences = [
//   {
//     id: 0,
//     img: webverseLogo,
//     role: "Fullstack Developer",
//     company: "Webverse Digital",
//     date: "April 2024 - Present",
//     desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "React JS",
//       "TypeScript",
//       "Node JS",
//       "Tailwind CSS",
//       "MongoDb",
//       "Redux",
//       " Next Js",
//     ],
//   },
//   {
//     id: 1,
//     img: agcLogo,
//     role: "Fullstack Engineer",
//     company: "Agumentik Group of Companies",
//     date: "July 2023 - March 2024",
//     desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
//     skills: [
//       "ReactJS",
//       "Redux",
//       "JavaScript",
//       "Tailwind CSS",
//       "HTML",
//       "CSS",
//       "SQL",
//     ],
//   },
//   {
//     id: 2,
//     img: newtonschoolLogo,
//     role: "Frontend Intern",
//     company: "Newton School",
//     date: "September 2021 - August 2022",
//     desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
//     skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
//   },
// ];

export const education = [
  {
    id: 0,
    img: Logo,
    school: "Uttrakhand Technical University, Dehradun",
    date: "Sept 2022 - Oct 2024",
    grade: "64.38%",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from Uttrakhand Technical University, Dehradun. During my time at UTU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as  Web Development, and Software Engineering. which enhanced my skills and knowledge. My experience at Uttrakhand Technical University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: Images,
    school: "Motherhood University",
    date: "Sept 2017 - Aug 2020",
    grade: "69.75%",
    desc: "I completed my Bachelor's degree in Bachelor of Commerce Hons (B.Com.Hons) from Motherhood University, Roorkee.",
    degree:
      "Bachelor of Commerce Hons - B.com (Business Mathematics and Accounting)",
  },
  {
    id: 2,
    img: School,
    school: "Bal Bharti Sr. Sec. Sechool",
    date: "Apr 2016 - March 2017",
    grade: "59%",
    desc: "I completed my class 12 education from al Bharti Sr. Sec. Sechool, Haridwar, under the CBSE board, where I studied Accounting, Business Mathematics .",
    degree: "CBSE(XII) - Commerce",
  },
  {
    id: 3,
    img: School,
    school: "Bal Mandir Sr. Sec. School",
    date: "Apr 2014 - March 2015",
    grade: "43.60%",
    desc: "I completed my class 10 education from Bal Mandir Sr. Sec. School, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "E-Commerce",
    description:
      "A powerful and user-friendly React.js application designed and showcase a Shopping website.",
    image: shopping,
    tags: ["HTML", "CSS", "JavaScript", "React JS"],
    github: "https://github.com/jrk-cnx/Ecommerce-reactjs-frontend",
    webapp: "https://ecommerce-reactjs-frontend-vsw2.vercel.app/",
  },
  {
    id: 1,
    title: "WorldAtlas",
    description:
      "A dynamic web app that displays real-time information about countries including population, region, and capital using a clean UI.Built with modern web technologies to provide fast, responsive, and informative access to global data.",
    image: world,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/jrk-cnx/WorldAtlas-ReactJS",
    webapp: "https://world-atlas-react-js.vercel.app",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A clean and responsive portfolio highlighting my developer skills, featured projects, and personal info.",
    image: port,
    tags: ["React JS", "Tailwind CSS"],
    github: "",
    webapp: "",
  },

  //   {
];
