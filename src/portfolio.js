import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/google.svg";
import swiftalogo from "./assets/img/icons/common/swifta.svg";
import github from "./assets/img/icons/common/github.svg";
import hng from "./assets/img/icons/common/hnglogo.svg";
import nhslogo from "./assets/img/icons/common/newhorizonslogo.png";
import oracleocalogo from "./assets/img/icons/common/javaoca.svg";
import udacitylogo from "./assets/img/icons/common/u-logo.svg";
import aadlogo from "./assets/img/icons/common/aad_badge.png";
import anchorlogo from "./assets/img/icons/common/anchorlogo.svg";
import concretelogo from "./assets/img/icons/common/concretelogo.png";
import airbnb from "./assets/img/icons/common/airbnbLogo.png";

export const greetings = {
    name: "Badejo Adesire",
    title: "Hello, I am Adesire",
    description:
        "A skilled and passionate Software Developer with experience in Java, Kotlin, SpringBoot, AndroidSDK, KMM and a host of libraries and frameworks that help in achieving my goals.",
    // resumeLink: "https://resume.io/r/6AzCXQwCr",
    resumeLink: "https://resume.io/r/IJ6DhBjTk",
};

export const openSource = {
    githubUserName: "Adesire",
};

export const contact = {};

export const socialLinks = {
    // facebook: "https://www.facebook.com/1hanzla100",
    // instagram: "https://www.instagram.com/1hanzla100",
    // twitter: "https://twitter.com/1hanzla100",
    github: "https://github.com/Adesire",
    linkedin: "https://linkedin.com/in/adesire-badejo",
};

export const skillsSection = {
    title: "What I do",
    subTitle:
        "A DEVELOPER WHO WANTS TO LEARN EVERY TOOL OUT THERE TO SOLVE PROBLEMS",
    skills: [
        emoji(
            "⚡ Develop quality mobile applications, using the most stable of technologies"
        ),
        emoji(
            "⚡ Web-services using SpringBoot and Java"
        ),
        emoji(
            "⚡ Integration of third party services such as Firebase/ AWS Amplify / Digital Ocean"
        ),
        emoji(
            "⚡ Knowledge of Git, Github, Heroku and other dev tools"
        ),
        emoji(
            "⚡ Knowledge of SQL and databases"
        ),
        emoji(
            "⚡ Knowledge of Implementing REST APIs in the Android framework"
        ),
        emoji(
            "⚡ Knowledge of Object Oriented programmming"
        ),
    ],

    softwareSkills: [
        {
            skillName: "Java",
            fontAwesomeClassname: "logos:java",
        },
        {
            skillName: "Kotlin",
            fontAwesomeClassname: "logos:kotlin",
        },
        {
            skillName: "Android",
            fontAwesomeClassname: "logos:android-icon",
        },
        {
            skillName: "SpringBoot",
            fontAwesomeClassname: "logos:spring-icon",
        },
        {
            skillName: "Gradle",
            fontAwesomeClassname: "vscode-icons:file-type-light-gradle",
        },
        {
            skillName: "maven",
            fontAwesomeClassname: "logos:maven",
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "logos:nodejs-icon",
        },
        {
            skillName: "npm",
            fontAwesomeClassname: "vscode-icons:file-type-npm",
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "vscode-icons:file-type-sql",
        },
        {
            skillName: "PostgreSQL",
            fontAwesomeClassname: "logos:postgresql",
        },
        {
            skillName: "MySQL",
            fontAwesomeClassname: "logos:mysql",
        },
        {
            skillName: "sqlite",
            fontAwesomeClassname: "logos:sqlite",
        },
        {
            skillName: "AwsAmplify",
            fontAwesomeClassname: "logos:aws",
        },
        {
            skillName: "firebase",
            fontAwesomeClassname: "logos:firebase",
        },
        {
            skillName: "heroku",
            fontAwesomeClassname: "logos:heroku-icon",
        },
        {
            skillName: "git",
            fontAwesomeClassname: "logos:git-icon",
        },
        {
            skillName: "github",
            fontAwesomeClassname: "logos:github-icon",
        },
        {
            skillName: "gitlab",
            fontAwesomeClassname: "logos:gitlab",
        },
        {
            skillName: "DigitalOcean",
            fontAwesomeClassname: "logos:digital-ocean",
        },
        {
            skillName: "AWS",
            fontAwesomeClassname: "logos:aws",
        },
        {
            skillName: "arduino",
            fontAwesomeClassname: "vscode-icons:file-type-arduino",
        },
    ],
};

export const SkillBars = [
    {
        Stack: "Android Development", //Insert stack or technology you have experience in
        progressPercentage: "90", //Insert relative proficiency in percentage
    },
    {
        Stack: "Backend Development",
        progressPercentage: "90",
    },
    {
        Stack: "Programming",
        progressPercentage: "90",
    },
];

export const educationInfo = [
    {
        schoolName: "University of Ibadan",
        subHeader: "B.Sc Mathematics",
        duration: "2014 - 2019",
        desc: "Final year desertation: APPLICATION OF FUZZY SET THEORY TO AUTONOMOUS MOBILE CONTROL",
        descBullets: [
            "Learnt how to use MATLAB",
            "Learnt how to use an Arduino Uno",
            "Used the fuzzy set theory to build an obstacle avoiding robot",
        ],
    },
    {
        schoolName: "Udacity",
        subHeader: "Android Developer Nanodegree",
        duration: "2018 - 2019",
        desc: "Capstone Project: A podcast application",
        descBullets: [
            "Built an android app that uses 3rd party services to fetch podcasts",
        ],
    },
    {
        schoolName: "Dansol High School",
        duration: "2008 - 2014",
    },
];

export const experience = [
    {
        role: "Senior Software Engineer",
        company: "Anchor Software Limited",
        companylogo: anchorlogo,
        date: "Dec 2023 – Present",
        desc: "Work on a highly functional team, providing solutions to interesting financial problems",
        descBullets: [
            "Led customer microservice implementation and maintenance",
            "Built and manage core orchestrating microservice processing ₦1T+ value transactions",
            "Build financial services infrastructure and tooling",
        ],
    },
    {
        role: "Senior Software Engineer",
        company: "Swifta Systems and Services",
        companylogo: swiftalogo,
        date: "July 2021 – Dec 2023",
        desc: "Leading and working with many teams to bring technology solutions to life",
        descBullets: [
            "Built and managed USSD retail applications serving 80M+ subscribers ",
            "Led development of Android POS Terminal processing millions in transaction value",
            "Developed lending infra solutions providing Lenders with credit scoring information",
        ],
    },
    {
        role: "Software Engineer",
        company: "Swifta Systems and Services",
        companylogo: swiftalogo,
        date: "July 2019 – Dec 2021",
        desc: "Work with many teams to bring technology solutions to life",
        descBullets: [
            "Integrated 3rd party value added services into the Fazipay mobile app",
            "Developed USSD solutions for providers in the Insurance and Pensions industry",
            "Built a reporting service extracting critical business information from deployed solutions",
        ],
    },
    {
        role: "Software Engineer",
        company: "Concrete Communications Ltd",
        companylogo: concretelogo,
        date: "Sep 2019 – Nov 2019",
        desc: "Built and managed Mobile and Backend for B2B market place"
    },
    {
        role: "Android Developer",
        company: "HNG Internship",
        companylogo: hng,
        date: "Sep 2019 – Nov 2019",
        desc: "A remote internship done by hotels.ng to turn out developers ready to face challenges and solve problems",
    },
    {
        role: "Intern",
        company: "New Horizons Computer Learning Centers",
        companylogo: nhslogo,
        date: "Aug 2017 – Jan 2018",
        desc: "Worked as an intern for 6 months, resolving software and hard ware issues. Also gained enough to write and pass the Oracle Java SE7 associate exam",
    },
];

export const projects = [
    {
        name: "Ou4r Ticketa",
        desc: "An app that enables purchase of tickets for a stage play",
        link: "https://ou4r.miscell.com.ng",
    },
    {
        name: "Methodist Hymns for all Seasons",
        desc: "An app that hosts a compilation of some Methodist hymns. built using Google's Exoplayer and Firebase",
        link: "https://play.google.com/store/apps/details?id=com.methodist.seasonalhynms",
    },
    {
        name: "100 songs of Ben Tomoloju",
        desc: "A music android app built to showcase music of a popular folk music artiste in Nigeria",
        link: "https://play.google.com/store/apps/details?id=com.concretecommunications.bentomolojusongs",
    },
    {
        name: "Aruzone Logistics",
        desc: "A logistics application, for delivery of goods and services in which I created and manage the Backend using Java/SpringBoot, PostgrSQL and Heroku/Digital Ocean",
        link: "https://aruzone.netlify.app/",
    },
    {
        name: "Kid Stories",
        desc: "Built during the HNG internship, It's a children bed time stories app for their enjoyment. It's fun for all ages.",
        link: "https://play.google.com/store/apps/details?id=com.project.android_kidstories&hl=en",
    },
    {
        name: "Overcomers' Prayers",
        desc: "An android app based on a book written by the author, who gave me the project. It's on Google play store and Amazon app store.",
        link: "https://play.google.com/store/apps/details?id=com.overcomersprayer.app.overcomersprayers",
    },
    {
        name: "Obstacle avoidance robot",
        desc: "A robot built that operates on concept of Fuzzy set theory, making it's descisions based on the definition of clossness to objects",
        github: "https://github.com/Adesire/Final-year-project",
    },
    {
        name: "Poddle",
        desc: "A podcast application",
        github: "https://github.com/Adesire/Capstone_Project",
    },
    {
        name: "Euclidean Division Algorithm program",
        desc: "I built a program in pure Java that calculates the greatest common divisor(g.c.d) using the Euclidean Division Algorithm.",
        github: "https://github.com/Adesire/Euclidean-Division-Algorithm",
    },
];

export const certifications = [
    {
        name: "Associate Android Developer",
        description: "Passed the exam as a Google African Developer Scholar. The Associate Android Developer Certification is a performance-based exam where developers write real apps to show their skills.",
        img: aadlogo,
        link: "https://www.credential.net/dfd220d4-d3a8-4869-8b67-406011a6a45f",
    },
    {
        name: "Android Developer Nanodegree, Udacity",
        description: "A udacity program that takes you through many courses on a path to Android development",
        img: udacitylogo,
        link: "https://confirm.udacity.com/TQVVDNA6",
    },
    {
        name: "Oracle Certified Associate",
        description: "Oracle Certified Associate, Java SE 7 Programmer",
        img: oracleocalogo,
        link: "https://www.youracclaim.com/badges/f9a6df5b-22fb-491a-b102-47a6168d5307/public_url",
    },
    {
        name: "Google Cloud Platform",
        description: "Essential Google Cloud Infrastructure: Foundation",
        img: googlelogo,
        link: "https://coursera.org/verify/6QHSKVXN8QGA",
    },
    {
        name: "Google Cloud Platform",
        description: "Essential Google Cloud Infrastructure: Core Services",
        img: googlelogo,
        link: "https://coursera.org/verify/3ZL65J83AHF8",
    },
];

export const feedbacks = [
    /*{
        name: "Hassan Mehmood",
        feedback:
            "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
    },
    {
        name: "Maheen Altaf",
        feedback:
            "the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
    },*/
];
