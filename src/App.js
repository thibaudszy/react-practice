// App.js
import React from "react";
import "./App.css";
import Icon from "./components/icon";
import Section from "./components/Section";

const sections = [
  {
    title: "Do you want to",
    subTitle: "Learn how to code",
    description:
      "Awesome! Let’s do this together. We are here to support you in your coding journey.",
    image1: {
      source: "https://learntocodetogether.nl/assets/team.svg",
      caption: "Get help from experienced developers",
    },
    image2: {
      source: "https://learntocodetogether.nl/assets/community.svg",
      caption: "Learn & share with our community",
    },
    image3: {
      source: "https://learntocodetogether.nl/assets/personal-speed.svg",
      caption: "Personal & at your own speed",
    },
  },
  {
    title: "Courses",
    subTitle: "Our courses",
    description:
      "We have created courses to help you learn, with easy to follow steps and some sparks of fun!",
    image1: {
      source: "https://learntocodetogether.nl/assets/expand-horizon.svg",
      caption: "Learn new skills and expand your horizon",
    },
    image2: {
      source: "https://learntocodetogether.nl/assets/developers.svg",
      caption: "Follow courses created by experienced developers",
    },
    image3: {
      source: "https://learntocodetogether.nl/assets/step-by-step.svg",
      caption: "Fun, hands on and easy to follow",
    },
  },
  {
    title: "Why?",
    subTitle: "Why do we do this",
    description:
      "It’s really simple actually. We just love to combine our passion for code with our love for teaching. Coding is so much fun when doing it together.",
    image1: {
      source: "https://learntocodetogether.nl/assets/technology.svg",
      imgTitle: "Technology",
      caption:
        "We love to experiment and create awesome stuff from the comfort of our couch.",
    },
    image2: {
      source: "https://learntocodetogether.nl/assets/community.svg",
      imgTitle: "People",
      caption:
        "It’s always fun to do things together, the excitement and the collaborations.",
    },
    image3: {
      source: "https://learntocodetogether.nl/assets/personal-speed.svg",
      imgTitle: "Teaching",
      caption: "We like to learn and to teach others the stuff we know.",
    },
  },
];

export default function App() {
  return (
    <div>
      <header id="header" className="section-header scroll">
        <Icon
          link="./"
          cssClass="icon"
          image="https://learntocodetogether.nl/assets/icon.svg"
        />
        <Icon
          cssClass="meetup-icon"
          link="https://www.meetup.com/Learning-to-Code-Amsterdam/"
          image="https://learntocodetogether.nl/assets/meetup-icon.svg"
        />

        <nav>
          <a href="/courses.html">Our Courses</a>
        </nav>
      </header>

      <div className="section-header-spacer"></div>
      {sections.map((section) => {
        return (
          <Section
            title={section.title}
            subTitle={section.subTitle}
            description={section.description}
            image1={section.image1}
            image2={section.image2}
            image3={section.image3}
          />
        );
      })}

      <div className="section-footer">
        <img
          className="logo"
          src="https://learntocodetogether.nl/assets/logo.svg"
        />
        <div className="title">Created by</div>
        <div className="subtitle">
          Rein Op &#x27;t land &amp; Danny van der Jagt
        </div>
        <div className="team-container">
          <img
            className="team"
            src="https://learntocodetogether.nl/assets/danny&rein.svg"
          />
        </div>
      </div>
    </div>
  );
}
