

import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import styled from "styled-components";


const SnackbarStyle = styled.div`
  .message {
    font-size: 1.8rem;
    
  }

  .MuiSnackbarContent-message{
    margin: 0 auto;  
  }
`;

export default function PositionedSnackbar({ children }) {
  const [state, setState] = React.useState({
    open: true,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal } = state;

  return (
    <SnackbarStyle>
      <div >
        <Snackbar
        className="snackbar"
          anchorOrigin={{ vertical, horizontal }}
          open={true}
          message={<span className="message">{children}</span>}
          key={vertical + horizontal}
        />
      </div>
    </SnackbarStyle>
  );
}
