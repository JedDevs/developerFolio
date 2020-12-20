
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Theo Docking",
  title: "Hi all, I'm Theo",
  subTitle: emoji("A passionate Game Developer 🚀 with experience building games on the roblox and unreal platform with Lua / Knit and some other cool libraries and frameworks."),
  resumeLink: "https://jeddevs.me"
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/teotcd",
  linkedin: "https://www.linkedin.com/in/theo-docking-364b221b2/",
  gmail: "theo@jeddevs.me",
  gitlab: "https://gitlab.com/Teotcd",
  twitter: "https://twitter.com/GameJed",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY GAMEPLAY PROGRAMMER AND INDIE DEV WHO ENJOYS DEBUGGING",
  skills: [
    emoji("⚡ Detail Oriented Developer with a focus for the big picture - experience heading large and small teams"),
    emoji("⚡ Co-Author of 'Sams 24 Hour Guide To Roblox Game Development"),
    emoji("⚡ Head Programmer @ BloopVille with 4 years of experience working as a roblox developer")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github-square"
    },
    {
      skillName: "Lua",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "VSCode",
      fontAwesomeClassname: "fas fa-laptop-code"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Game Design",  //Insert stack or technology you have experience in
      progressPercentage: "60%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Project Management",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Freelance Programmer",  
      company: "Roblox",
      companylogo: require("./assets/images/black_tilt_1200x1200.png"),
      date: "December 2017 – June 2019",
      desc: "Doing commisions for a range of clients and projects including contract work",
      descBullets: [
        "Working For Alterdrift Studios",
        "Developing my front end and backend skills"
      ]
    },
    {
      role: "Contracted Author",   
      company: "Pearson",
      companylogo: require("./assets/images/pearson.jpg"),
      date: "June 2020 - September 2020",
      desc: "Contracted Out Through Backstop Media to write four chapters for 'Sams 24 Hour Guide To Roblox Development' ",
    },
    {
      role: "Head Developer",  
      company: "BloopVille",
      companylogo: require("./assets/images/GkfuWn0d_400x400.jpg"), 
      date: "September 2020 – Present",
      desc: "Joining BloopVille as a Backend Programmer i've matured my skills and taken a more leadership role, spearheading our engineering approach and framework."
    },
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "teotcd", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://static.wixstatic.com/media/79b3ba_607e93d6e1914940836df9d6b9b004a8~mv2.jpg/v1/fill/w_1067,h_600,al_c,q_90/79b3ba_607e93d6e1914940836df9d6b9b004a8~mv2.webp",
      link: "http://bloopville.com/"
    },
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Creative Media Production and Technology",
      subtitle: "Received my Level 3 Diploma studying game design and development at WSC, Looking to get my Extended Diploma",
      image:
        "data:image/png;base64,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",
      footerLink: [{name: "Certification - UAL Level 3 Diploma"}]
    },
    {
      title: "Computer Science",
      subtitle: "Received a grade 7 (A) upper school diploma in computer science.",
      image: require("./assets/images/ae8b7b0e-c88b-45d9-bf26-aa5fb7c1f578-Org-OCR-Logo.jpg"),
      footerLink: []
    },
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "Always trying to learn and interact more, I started a blog!",

  blogs: [
    {
      url: "https://dev.to/teotcd",
      title: "My Dev.to blog from last year!",
      description: "It's no secret that roblox is a large platform, in fact, I bet that you, your child, brother or sister has at some point exposed you to it whether it is through play, talk or interaction."
    },
    {
      url: "https://blog.jeddevs.me/",
      title: "My Personal Blog",
      description: "I recently read a blog post that really resonated with me, my struggles and experiences which was later expanded via tweet by Daniel Irvine 7 who said:"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "",
  subtitle: emoji(""),

  talks: [
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("My Fav Podcasts 🎙️"),
  subtitle: "I LOVE LISTENING TO PODCASTS ALL THINGS TECHNOLOGY AND POLITICS",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://bullhorn.fm/americast/posts/from-russia-with-bugs"]
};

const contactInfo = {
  title: "Contact Me",
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "theo@jeddevs.me"
};

//Twitter Section

const twitterDetails = {

  userName : "GameJed"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
