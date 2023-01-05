// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Nipun",
  middleName: "",
  lastName: "Rustagi",
  message: " Passionate about changing the word with AI and ML. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Nipun0309/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/nipun0309/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/nipun-rustagi",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/nipunrustagi.jpeg"),
  imageSize: 330,
  message:
    "My name is Nipun Rustagi. I'm currently an undergraduate student studying at the University of Toronto pursuing a degree in Computer Science with a specialization in AI and ML. " +
      "I'm most passionate about giving back to the community, and exploring new domains, algorithms within the field of ML. In my free time I like working on open source projects and snowboarding.",
  resume: require("../editable-stuff/resume.pdf"),
};
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Nipun0309", //i.e."johnDoe12Gh"
  reposLength: 7,
  specificRepos: [],
};


// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Java", value: 80 },
    { name: "SQL", value: 95 },
    { name: "R", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 70 },
    { name: "React", value: 77 },
    { name: "HTML/CSS", value: 55 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Critical Thinking", value: 80 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 70 },
    { name: "Organization", value: 95 },
    { name: "Creativity", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Software Engineering or Machine Learning internship opportunities! If you know of any positions available, if you have any questions, please feel free to email me at",
  email: "nipun.rustagi@mail.utoronto.ca",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
  ]
}

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
