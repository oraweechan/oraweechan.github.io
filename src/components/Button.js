import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    background-color: ${(props) =>
      props.outline ? "transparent" : "var(--teal)"};
    color: ${(props) => (props.outline ? "var(--teal)" : "black")};
    font-size: 2rem;
    padding: 0.5em 2em;
    border: 2px solid var(--teal);
    border-radius: 9px;
    display: inline-block;
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.7rem;
    }
  }
`;

export default function Button({
  btnLink = "link",
  btnText = "text",
  outline = false,
  url = 'url',
}) {
  return (
    <ButtonStyle outline={outline}>
      <div>
        <Link className="button" to={btnLink}>
      
          {btnText}
         
          
        </Link>
      </div>
    </ButtonStyle>
  );
}
