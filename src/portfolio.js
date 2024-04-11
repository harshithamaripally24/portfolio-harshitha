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
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Harshitha Maripally",
  title: "Hi, I'm Harshitha",
  subTitle: (
    "I am a Software Engineer with experience of building Web and Mobile applications with Python / Javascript / Angular / Spring Boot and other cool libraries and frameworks."
  ),
  resumeLink:
  "https://drive.google.com/file/d/1d1XaTI15-cWP2FS0v7KxOI2UA4zao0yI/view?usp=drive_link",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/harshithamaripally24",
  linkedin: "https://www.linkedin.com/in/harshitha-maripally/",
  gmail: "harshithamaripally2408@gmail.com",
  leetcode: "https://leetcode.com/harshitha2408/",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I am a passionate full stack developer. Explore my skills below",
  skills: [
    emoji(
      "⚡  Develop highly interactive Front end / User Interfaces for web applications"
    ),
    emoji("⚡ Build restful webservices to facilitate seamless communication between front-end and back-end components."),
    emoji(
      "⚡ Implement test-driven development methodologies to maintain code quality and reliability"

    )
  ],
  

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    // {
    //   skillName: "java",
    //   fontAwesomeClassname: "fab fa-java-alt"    },

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
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
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

    },
    {
      schoolName: "Jawaharlal Nehru Technological University",
      logo: require("./assets/images/jntu.png"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "August 2016 - September 2020"

    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "GEICO",
      companylogo: require("./assets/images/Geico.jpg"),
      date: "2024 – Present",
      descBullets: [
        "Developed, implemented, and maintained core software components using C# .NET aligning closely with business needs and user requirements." ,"Implemented data fixes to conduct data control cleanup to enhance data accuracy",
        "Facilitated use case discussions and planning sessions for the transition to GO lang"

      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Chartbeat",
      companylogo: require("./assets/images/chartbeatLogo.png"),
      date: "June 2023 – Aug 2023",
      descBullets: [
        "Developed reusable components in ReactJS reducing code duplication and contributed to the development of a user specific dropdown feature." ,"Identified and resolved critical bugs related to UI elements and data fetching on the product dashboard",
        "Conducted functional, regression, and integration testing"

      ]
    },
    {
      role: "Full Stack Developer",
      company: "DBS Bank",
      companylogo: require("./assets/images/dbs.png"),
      date: "Sep 2020 – Dec 2021",
      descBullets: [
        "Built RESTful web services using Java-based Spring framework, and engineered responsive user interfaces utilizing Angular",
        "Modularized old code bases of Accounting application from Angular JS to Angular framework"
        
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "ValueLabs",
      companylogo: require("./assets/images/valueLabs.jpeg"),
      date: "Sep 2019 – Mar 2020",
      descBullets: [
        "Utilized JavaScript with Node.js for backend and Angular for frontend development, integrating with a PostgreSQL database",
        "Modeled APIs to create endpoints, prepared test scripts, performed functional testing",
      ]
    },

    {
      role: "Web Development Intern",
      company: "Olcademy",
      companylogo: require("./assets/images/olcademy.jpeg"),
      date: "Jun 2018 – Oct 2018",
      descBullets: [
        "Built quiz pages and a messenger user interface using JavaScript, HTML, CSS and bootstrap to ensure responsive web design",
        "Identified and troubleshot technical issues, and improved website functionality and user experience",
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
      "Developed a web application for efficient employee effort logging and tracking. Strengthened security by implementing SHA-256 password hashing and integrated Flask-Mail for OTP-based user verification",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/harshithamaripally24/CSE563-SPRING-2023"
        }
      ]   
  },
  
  {
    projectName: "Nearby Events | Node JS | Fuseki Server | SparQL	",
    projectDesc:
      "Extracted structured data using SparQL, modeled database to improve data organization and deployed a user-friendly NodeJS app on Amazon EC2",    
  },
  {
    projectName: "Soccer Tournament Web App | JavaScript | React | Express.js | Node.js | MongoDB  ",
    projectDesc:
      "Developed a soccer events web application enabling users to access match details using React for frontend development. Implemented a scheduling algorithm using JavaScript and utilized cloud MongoDB for efficient data management",   
  },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {

 
  display: false
   // Set false to hide this section, defaults to true
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
  title: emoji("Contact me!"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all. "
    ,
    
  email_address: "harshithamaripally2408@gmail.com",
  locationlogo: require("./assets/images/location.png"),
  location:"Tempe, Arizona",
  subsection: "Open for opportunities: Yes"
};


// Twitter Section

const twitterDetails = {
 
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
