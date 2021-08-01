import React from 'react';
import { Box, Typography } from '@material-ui/core/';

interface propTypes {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text: string;
  className: string;
  styles?: React.CSSProperties;
}

const Button: React.FC<propTypes> = (propTypes) => {
  return (
    <Box style={propTypes.styles} onClick={propTypes.onClick} className={propTypes.className}>
      <Typography variant="h6">{propTypes.text}</Typography>
    </Box>
  );
};

export default Button;
