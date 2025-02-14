import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { cardData } from "../data/ProjectData";
import { useWindowSize } from '@uidotdev/usehooks';


const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: (theme).palette.background.paper,
  '&:hover': {
    backgroundColor: (theme).palette.action.hover,
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const StyledCardContent = styled(CardContent)({
  display: 'flex', flexDirection: 'column', gap: 4, padding: 16, flexGrow: 1,
  '&:last-child': { paddingBottom: 16, },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});


export default function MainContent(props: { breakWidth?: number}) {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
    null,
  );

  const breakWidth = props.breakWidth || 600;

  const handleNavigate = (url: string) => {
    window.location.href = url;
  };
  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const {width} = useWindowSize();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 0}}>

      <h2 className="no_top_padding">
        My Open-Source Projects
      </h2>

      <Grid container spacing={8} columns={12} sx={{ my: 4, flexFlow: "row wrap" }} >
        {
          cardData.map((card, index) => {
            return (
              <Grid key={index} size={ ((width ? width: 0) > breakWidth) ? 6: 12}>
                <StyledCard
                  key={index}
                  variant="outlined"
                  onFocus={() => handleFocus(index)}      
                  onBlur={handleBlur}
                  tabIndex={0}
                  className={focusedCardIndex === index ? 'Mui-focused' : ''}
                  sx={{ height: '100%' }}
                  onClick={() => {
                    handleNavigate(card.url);
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={card.title}
                    image={card.img}
                    sx={{
                      aspectRatio: '16 / 4',
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                    }}
                  />
                  <StyledCardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                    }}
                  >
                    <div style={{ display: 'flex', flexFlow: 'row nowrap', columnGap: 16 }}>
                      <div>
                        <img src={card.icon} style={{ width: '48px', height: '48px' }} />
                      </div>
                      <div style={{ flex: "1 1 auto" }}>
                        <h3 className="project_card_title" >
                          {card.title}
                        </h3>
                        <StyledTypography
                          variant="body2"
                          color="text.secondary"
                          gutterBottom
                        >
                          {card.description}
                        </StyledTypography>
                      </div>
                    </div>
                  </StyledCardContent>
                </StyledCard>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );

}
