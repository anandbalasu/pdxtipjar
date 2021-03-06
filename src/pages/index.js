import React, { useState } from "react";

import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RandomButton from "../components/RandomButton";
import RandomPerson from "../components/RandomPerson";
import social1 from "../images/social-1.png";
import social2 from "../images/social-2.png";
import social3 from "../images/social-3.png";
import social4 from "../images/social-4.png";
import press1 from "../images/ames_tribune_logo.png";
import press2 from "../images/clay_milk_logo.png";

const Intro = () => (
  <div className="intro">
    <h2>About Ames Tip Jar</h2>
    <p>
      Ames Tip Jar is an opportunity to share a small act of kindness with our
      Service Industry community during these uncertain times. With a government
      mandate in effect, thousands of servers, bartenders, baristas and other
      service industry workers have been laid off or furloughed.
    </p>
    <p>
      The premise is simple: Tip a dollar, $5, $10, $20—or whatever you’d
      like—directly to a Service Industry worker! Tip someone at random or
      browse the <Link to="/donate">full list to find your favorite spots</Link>
      .
    </p>
    <p>
      If you’re a Service Industry worker,{" "}
      <Link to="/signup">fill out the form to receive tips</Link> directly
      through your Cashapp, Venmo, or PayPal.
    </p>
  </div>
);

const Pledge = () => (
  <div className="pledge">
    <h2>Take the pledge!</h2>
    <p>
      Take the pledge to tip every time you make a cocktail at home, miss going
      out, wish you were drinking a latte, wish you had a wood-fired oven, or
      don’t want to do the dishes.
    </p>
    <h3>Help spread the word and share on social media!</h3>
    <a href={social1}>
      <img src={social1} alt="Send some love on Ames tip jar" />
    </a>
    <a href={social2}>
      <img
        src={social2}
        alt="I pledge to tip for every meal I wish someone else made"
      />
    </a>
    <a href={social3}>
      <img
        src={social3}
        alt="I pledge to tip for every drink I make at home because I really miss going out"
      />
    </a>
    <a href={social4}>
      <img
        src={social4}
        alt="I pledge to tip for every cup of coffee I wish was a latte"
      />
    </a>
  </div>
);

const Article = () => (
  <div className="article">
    <a href="https://www.amestrib.com/business/20200417/ames-tip-jar-website-created-to-give-back-to-service-industry">
      <img
        src={press1}
        alt="Article by Ames Tribune on Ames Tip Jar"
      />
    </a>
    <a href="https://clayandmilk.com/2020/04/17/middle-bit-global-insurance-accelerator-to-hold-virtual-pitch-event-on-april-22/">
      <img
        src={press2}
        alt="Article by Clay & Milk on Ames Tip Jar"
      />
    </a>
  </div>
);

const Testimonial = () => (
  <div className="pledge">
    <h2>What we are hearing</h2>
    <p>
      I know so many people that need help right now and out of a job and this is so amazing.
      -Joan, Mess is Blessed Cleaning Services
    </p>
  </div>
);

const IndexPage = () => {
  const [randomPerson, setRandomPerson] = useState({});

  return (
    <Layout>
      <SEO title="Home" />
      <Intro />
      {Object.keys(randomPerson).length > 0 && (
        <RandomPerson
          person={randomPerson}
          clearPerson={() => setRandomPerson({})}
          random={true}
        />
      )}
      <RandomButton
        handleClick={setRandomPerson}
        text="Find a random person to tip"
      />
      <nav>
        <Link to="/donate">Browse the full list</Link>
        <Link to="/signup">Sign up to receive tips</Link>
      </nav>
      <Pledge />
      <Article />
    </Layout>
  );
};

export default IndexPage;
