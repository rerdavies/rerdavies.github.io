import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary'}}>
      {'Copyright © 2025 '}
        Robin E.R. Davies
    </Typography>
  );
}

export default function Footer() {
  return (
    <React.Fragment>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          textAlign: { sm: 'center', md: 'left' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'start',
            pt: 2,
            pb: 2,
            width: '100%',
          }}
        >
          <div>
            <Copyright />
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
