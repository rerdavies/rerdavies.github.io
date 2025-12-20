import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import articleInfo from '../data/BlogData';
import { useNavigate } from "react-router";



const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    borderShadow: "0px 1px 3px rgba(0,0,0,0.1)",
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

export default function Latest() {
    const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
        null,
    );

    const navigate = useNavigate();
    const handleFocus = (index: number) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };

    return (
        <Box sx={{ flex: "1 1 auto", display: 'flex', flexDirection: 'column', marginTop: 0 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                <h2 style={{flex: '1 1 auto'}}>
                    Blog
                </h2>
                <a href="./feed.xml" style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center', marginRight: 16 }}>
                    <img src="./img/rss-icon.svg" alt="RSS Feed" style={{width: 32, height: 32, opacity: 0.5}}/>
                </a>
            </Box>

            <Grid container spacing={4} columns={12} sx={{ my: 1, marginTop: 3 }}>
                {articleInfo.map((article, index) => (
                    <Grid key={index} size={{
                        xs: 12, sm: 12
                    }}
                        sx={{
                            gap: 2, padding: "4px",
                            borderRadius: "8px"
                        }}
                    >
                        <StyledCard
                            className={focusedCardIndex === index ? 'Mui-focused' : ''}
                            onFocus={() => handleFocus(index)}
                            onBlur={handleBlur}
                            variant="outlined"
                            tabIndex={0}
                            style={{ padding: 8 }}
                            onClick={(e) => {
                                e.preventDefault();
                                navigate(article.route);
                            }}
                        >

                            <Box sx={{
                                display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'start',
                            }}
                            >
                                <img src={article.thumbnail} alt={article.title} style={{ width: 96, borderRadius: 6 }} />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 1,
                                        height: '100%',
                                    }}
                                >
                                    <Typography
                                        variant="h6" color="text.secondary"
                                    >
                                        {article.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        {article.description}
                                    </Typography>

                                </Box>
                            </Box>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
            {/*
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 4 }}>
        <Pagination hidePrevButton hideNextButton count={10} boundaryCount={10} />
      </Box>
      */}
        </Box>
    );
}
