import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
// import AboutImg from '../assets/images/about-sec-img.png';

const AboutSectionStyles = styled.div`
padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .aboutSection__right {

    img {
        height: 100%;
        width: 100%;
        border: 2px solid var(--pink);
    }
  }
  .smallImg {
        display: none;
  }
  .section-title {
    text-align: left;
  }

  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 3;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .smallImg {
        margin: 0 auto;
        height: 250px;
        max-width: 100%;
        display: flex;
        border: 2px solid var(--pink);
  }
  .para {
    margin-top: 2rem;
  }
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
      img {
          display: none;
      }
    }
    .section-title {
      text-align: center;
    }

    .aboutSection__buttons {
    display: flex;
    justify-content: center;
      gap: 2rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }

      
    }
  }

  
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About Me"
          />
           <img className="smallImg" src="https://res.cloudinary.com/orawee/image/upload/v1640912321/IMG_FF68CBED7018-1_hjnpkj.jpg" alt="Img" />
          <PText>
          I have a growth mindset and a strong passion for learning. Being able to combine logic and creativity to develop and solve problems is fun!
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Works" btnLink="/projects" />
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src="https://res.cloudinary.com/orawee/image/upload/v1640912321/IMG_FF68CBED7018-1_hjnpkj.jpg" alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
