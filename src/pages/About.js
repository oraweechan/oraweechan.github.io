import React from "react";
import styled from "styled-components";
import AboutItem from "../components/AboutItem";
import Button from "../components/ButtonNoLink";
import ContactBanner from "../components/ContactBanner";
import PText from "../components/PText";
import resume from '../data/resume.pdf'

const ProjectItemStyles = styled.div`
padding: 10rem 0 5rem 0;  

.about__info__top {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
   
  }
  .left {
    flex: 3;
  }

  .right {
      flex: 2;
    img {
      border: 2px solid var(--pink);
      max-width: 100%;
      height: 300px;
    }
  }
  .subHeading {
    font-size: 2.2rem;

    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .other__info {
    margin-top: 15rem;
  }

  
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .about__info__top {
      flex-direction: column;
    }
    .other__info__item{
        align-items:center;
    }
  }
`;

export default function About() {
  return (
    <ProjectItemStyles>
      <div className="container">
          <div className="about__info__top">
          <div className="left">
              <p className="subHeading">
                  Hi, I am <span>Orawee Chantravutikorn</span>
              </p>
              <div className="about__info">
                  <PText>
                      I'm an accountant turned developer. My coding journey started back in the Myspace days. Where I would spend countless hours designing and creating custom layouts. Now, I continue to grow my skill set to develop and write clean and efficient code.
                      <br /><br/>
                      I aim to develop seamless applications with a user-friendly interface. I love to create things that can be useful to others.
                      <br /><br/>
                      When I am not coding, I spend my time playing with my dog, playing video games, and baking.
                  </PText>
              </div>
              <a href={resume} download="Resume-OraweeChan" >
              <Button outline  btnText="Get Resume"/>
              
              </a>
              
          </div>
          <div className="right">
              <img src="https://res.cloudinary.com/orawee/image/upload/v1641083134/IMG_3856_omtajd.jpg" alt="dog"/>
          </div>

          </div>
         
          <div className="other__info">
              <div className="other__info__item">
                  <h1>My Skills</h1>
                  <AboutItem title="Languages" items={['JavaScript', 'HTML', 'CSS', 'Python']}/>
                  <AboutItem title="Libraries" items={['React', 'Bootstrap', 'MaterialUI', 'jQuery']}/>
                  <AboutItem title="Frameworks" items={['Express', 'Mongoose', 'Django']}/>
              </div>
          </div>
          <ContactBanner/>
    
      </div>
    </ProjectItemStyles>
  );
}
