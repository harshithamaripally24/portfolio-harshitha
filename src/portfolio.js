/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Harshitha Maripally",
  title: "Hello, I'm Harshitha Maripally",
  subTitle: (
    "A passionate Full Stack Software Developer with experience of building Web and Mobile applications with JavaScript / Angular / Spring Boot and other cool libraries and frameworks."
  ),
 
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/harshithamaripally24",
  linkedin: "https://www.linkedin.com/in/harshitha-maripally/",
  gmail: "hmaripal@asu.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full stack developer who wants to explore every tech stack",
  skills: [
  
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "angular",
      fontAwesomeClassname:"fab fa-angular"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
  
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
   
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/asuLogo.png"),
      subHeader: "Master of Science in Software Engineering",
      duration: "January 2022 - December 2023"

    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Intern",
      company: "Chartbeat",
      companylogo: require("./assets/images/chartbeatLogo.png"),
      date: "June 2023 – Aug 2023",
      // desc: "Chartbeat provides Content Analytics and Insights for Digital Publishing.",
      descBullets: [
        "Developed reusable components in ReactJS reducing code duplication",
        "Conducted functional, regression, performance, and integration testing"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "DBS Bank",
      companylogo: require("./assets/images/dbs.png"),
      date: "Sep 2020 – Dec 2021",
      descBullets: [
        "Created RESTful web services using Spring Boot framework, built responsive user interfaces utilizing Angular",
        "Modularized old code bases of Accounting application to Angular framework"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "ValueLabs",
      companylogo: require("./assets/images/valueLabs.jpeg"),
      date: "Sep 2019 – Mar 2020",
      descBullets: [
        "Utilized Angular and Node JS to create web applications with POSTGRESQL database integration",
        "Modeled APIs to create endpoints, prepared test scripts, performed functional testing"
      ]
    },

    {
      role: "Web Development Intern",
      company: "Olcademy",
      companylogo: require("./assets/images/olcademy.jpeg"),
      date: "Jun 2018 – Sep 2018",
      descBullets: [
        "Built quiz pages and a messenger user interface using JavaScript, HTML, CSS and bootstrap",
        "Identified and troubleshot technical issues, and improved website functionality and user experience"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  //subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [{
    projectName: "Effort Logger | Python | Flask | MySQL ",
    projectDesc:
      "Developed a web application for efficient employee effort logging and tracking, strengthened security by implementing SHA-256 password hashing and •	Integrated Flask-Mail for OTP-based user verification",    
  },
  
  {
    projectName: "Nearby Events | Node JS | Fuseki Server | SparQL	",
    projectDesc:
      "Scraped nearby events from Google events API and extracted structured data using SparQL and modeled database to improve data organization and deployed a user-friendly NodeJS app on Amazon EC2",    
  },
  {
    projectName: "Soccer Tournament Web Application | JavaScript | React | Express.js | Node.js | MongoDB  ",
    projectDesc:
      "Developed a soccer events web application enabling users to access match detail and implemented a scheduling algorithm using JavaScript and utilized cloud MongoDB for efficient data managements",   
  },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {

 
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  email_address: "hmaripal@asu.edu"
};

// Twitter Section

const twitterDetails = {
 
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};