import { Link } from "react-router-dom";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    phone,
    tandwiel1,
    docker,
    meta,
    starbucks,
    carrent,
    jobit,
    threejs,
    windowss,
    flipperzero,
    tripguide,
    flipperlogobg,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About us",
    },
    {
      id: "Works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Innovation",
      icon: web,
    },
    {
      title: "User friendly",
      icon: mobile,
    },
    {
      title: "Guided help",
      icon: backend,
    },
    {
      title: "Custom requests",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Individual",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "We offer methods.",
        "We offer combolists and accounts",
        "We offer nice leaks",
        "We offer tools with tutorials in the Discord.",
        "We take custom requests, just fill in the form",
      ],
    },
    {
      title: "Website's",
      company_name: "Tesla",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "We design logo's",
        "We offer a webdesign team who will design a website at your requests",
        "We provide webshop setup, trough shopify, wix, wordpress etc.. ",
        "We support and help with your plans on getting a domain and help you to set it up",
        "We develop other web applications for your needs",
        "we DON'T host website's"
      ],
    },
    {
      title: "Windows",
      company_name: "Shopify",
      icon: windowss,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "We will help you with any error's on your window's device. Or any other problem",
        "We can factory reset any windows device to new and/or recover data",
        "Installing programs and recover passwords",
        "Configuring and installing your new windows device",
        "If u have a problem that is not in here, do a request",
      ],
    },
    {
      title: "Flipper zero",
      company_name: "Shopify",
      icon: flipperlogobg,
      iconBg: "#FF7F00",
      date: "Jan 2022 - Jan 2023",
      points: [
        "We install the firmware for you",
        "We provide NFC, sub-ghz, and other files",
        "Custom badUSB script",
        "We take custom requests",
      ],
    },
    {
      title: "Phone's",
      company_name: "Meta",
      icon: phone,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "We provide android factory reset",
        "We offer tools and tutorial's for iphone (Locations change, jailbreak, custom ringtone, etc..)",
        "Soon: IcloudLock remove",
      ],

    },
    {
      title: "Custom request's",
      company_name: "Meta",
      icon: tandwiel1,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "We take custom requests, for custom solutions",
        "Maybe it's something you saw on the internet and you want us to fix it",
        "Maybe it's a problem that is not above",
        "Maybe it's something you want us to look at, and see what we can do",
        "Your problem is our challenge!",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "We needed a webshop for our starting business, this team guided us with buying a domain and designen the site! Great work! ",
      name: "Frits",
      designation: "Owner",
      company: "Bloemensnel",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I have submitted a reqeust to reset my phone, this took 2 days.. very quick and effective",
      name: "Branco",
      designation: "Owner",
      company: "a request",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Bloemensnel",
      description:
        "Bloemensnel is designed and guided with the setup by the Tollie bonker team",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Phone reset",
      description:
        "this samsung galaxy s21 was succesfully factory resetted by the Tollie bonker team at a request from our client",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Veldhoven powerwalk",
      description:
        "Crafted one of our initial web designs for a client, collaborating closely to achieve the optimal design according to the client's preferences.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Flipper zero",
      description:
        "Installed one of the firmware the client submitted, and provided some file's the client requested (Sub-ghz tesla charger EU)",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: flipperzero,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };