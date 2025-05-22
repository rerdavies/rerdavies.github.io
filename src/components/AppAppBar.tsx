import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../theme/ColorModeIconDropdown';
import Typography from '@mui/material/Typography';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  backdropFilter: 'blur(24px)',
  borderBottom: '1px solid',
  borderColor: (theme).palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme).shadows[1],
  padding: '16px 8px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="static" 
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
      }}
    >
      <StyledToolbar disableGutters>

        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
          <Box sx={{ display: { xs: 'none', md: 'flex', alignItems: 'baseline'} }}>
            <Typography variant="caption" component="div" 
            sx={{ fontWeight: 700, opacity: 0.6, marginLeft: 4 }}
            >______ <span style={{fontSize: "3.25em", opacity: 0.6}}>Robin E.R. Davies</span> ____________</Typography>

            <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
              Projects
            </Button>
            <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
              Blog
            </Button>
            <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
              Sponsorship
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 1,
            alignItems: 'center',
          }}
        >
          <ColorModeIconDropdown />
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
          <ColorModeIconDropdown size="medium" />
          <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="top"
            open={open}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: {
                top: 'var(--template-frame-height, 0px)',
              },
            }}
          >
            <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <IconButton onClick={toggleDrawer(false)}>
                  <CloseRoundedIcon />
                </IconButton>
              </Box>
              <MenuItem>Projects</MenuItem>
              <MenuItem>Blog</MenuItem>
              <MenuItem>Sponsorship</MenuItem>
            </Box>
          </Drawer>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
}
