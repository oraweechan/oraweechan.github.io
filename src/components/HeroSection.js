import styled from "styled-components";
import Button from "./Button";
import PText from "./PText";
import SocialMediaArrow from "../img/social-media-arrow.svg";
import ScrollDownArrow from "../img/scroll-down-arrow.svg";

const HeroStyles = styled.div`
.hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 9rem;
      color: var(--pink);
    }
  }
  .hero__img {
      img{
        max-width: 900px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        border: 2px solid var(--pink);
      }
    
  }
  .hero__info {
    margin-top: 10rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 2rem;
      margin-bottom: 1rem;
      .hero__name {
        font-size: 5rem;
      }
    }
    .hero__img {
        img{
            height: 100%;
        }
      
    }
    .hero__info {
      margin-top: 5rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, my name is</span>
            <span className="hero__name">Orawee </span>
          </h1>
          <div className="hero__img">
            {/* <img
              src="https://res.cloudinary.com/orawee/image/upload/v1640940885/IMG_FF68CBED7018-1_r1elqy.jpg"
              alt=""
            /> */}
          </div>
          <div className="hero__info">
            <PText>
              <div className="hero-bg">
                {" "}
                Welcome to my portfolio
              </div>
            </PText>
            <Button btnText="see my works" btnLink="/projects" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/orawee-chantravutikorn/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/oraweechan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GI
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
