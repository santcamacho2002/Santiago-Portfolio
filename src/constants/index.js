{/*  Constantes del proyecto, lugar donde modificar habilidades, fortalezas, etc */}


const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "images/ideas.svg" },
  { text: "Concepts", imgPath: "images/concepts.svg" },
  { text: "Designs", imgPath: "images/designs.svg" },
  { text: "Code", imgPath: "images/code.svg" },
  { text: "Ideas", imgPath: "images/ideas.svg" },
  { text: "Concepts", imgPath: "images/concepts.svg" },
  { text: "Designs", imgPath: "images/designs.svg" },
  { text: "Code", imgPath: "images/code.svg" },
];

const abilities = [
  {
    imgPath: "images/solving.png",
    title: "Problem Solving",
    desc: "Identifying needs and designing efficient technological solutions through structured thinking.",
  },
  {
    imgPath: "images/teamwork.png",
    title: "Team Collaboration",
    desc: "Working effectively with students, teachers, and developers to achieve common goals.",
  },
  {
    imgPath: "images/time.png",
    title: "Time Management",
    desc: "Planning and balancing academic projects, support sessions, and development tasks efficiently.",
  }
];

const expCards = [
  {
    title: "Teaching Assistant — Advanced Programming",
    date: "January 2023 – January 2024",
    responsibilities: [
      "Assisted the professor during lectures and academic activities.",
      "Prepared support classes on advanced topics such as pointers, memory management, and OOP.",
      "Provided one on one support to students, answering questions and reviewing course material.",
    ],
  },
  {
    title: "Project Leader — Tech Education Program",
    date: "June 2023 – December 2023",
    responsibilities: [
      "Designed and led an educational initiative for high school students focused on programming and digital skills.",
      "Managed a team of instructors and coordinated the development of learning materials.",
      "Taught advanced topics like web development and programming logic to participating students.",
    ],
  },
  {
    title: "Teaching Assistant — Software Engineering Fundamentals",
    date: "June 2024 – November 2024",
    responsibilities: [
      "Assisted in grading coursework and preparing learning materials.",
      "Planned and delivered support classes based on course requirements.",
      "Guided students by answering technical questions and supporting project development.",
    ],
  },
];

const projects = [
  {
    title: "JaveLab",
    description: "JaveLab is a mobile application developed as a capstone project to address the high failure rates in key courses of the Systems Engineering program at Pontificia Universidad Javeriana. Built with Flutter, SpringBoot, Node.js, Microsoft Azure, and MongoDb.",
    image: "images/logoJaveLab.png",
  },
  {
    title: "Web Developer Portfolio",
    description: "Personal portfolio showcasing my skills, projects and contact information. Built with React, Tailwind CSS, and GSAP for animations.",
    image: "/scLogo.png",
  },
  {
    title: "Tool and User Management Platform",
    description: "Angular and Spring Boot platform that manage various tools and user accounts. The system has authentication and authorization mechanisms, ensuring that users only access endpoints aligned with their assigned permissions",
    image: "images/toolUserLogo.png",
  }
];


export {
  words,
  abilities,
  expCards,
  navLinks,
  projects
};