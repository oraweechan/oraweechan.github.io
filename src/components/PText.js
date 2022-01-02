import styled from "styled-components";

const PStyle = styled.div`
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.2em;
  .hero-bg{
    position:relative;
    // background-color:var(--deep-dark);
    

  }
  
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
export default function PText({ children }) {
  // console.log(props)
  return (
    <PStyle>
      <div className="para">
        <p>{children}</p>
      </div>
    </PStyle>
  );
}
