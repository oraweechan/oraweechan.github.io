import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

export default function PositionedSnackbar( {children} ) {
  const [state, setState] = React.useState({
    open: true,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal } = state;


  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={true}
        message={children}
        key={vertical + horizontal}
      />
    </div>
  );
}
