import { Grid, Typography, Button, makeStyles, Container, Box, ThemeProvider } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
const useStyles = makeStyles((theme) => ({
    container: {
        background: theme.palette.background.paper
    },
    textSection: {
        padding: theme.spacing(0, 3),
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        height: '100%',
    },
    imageSection: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3),
        height: '850px',
    },
    topline: {
        fontWeight: 'bold',
        letterSpacing: '1.4px',
        textTransform: 'uppercase',
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2)
    },
    headline: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(2),
        color: theme.palette.text.primary
    },
    description: {
        lineHeight: '24px',
        paddingBottom: theme.spacing(2),
        color: theme.palette.text.primary
    },
    img: {
        width: '100%',
        height: 'auto',
        fill: '#ff9100'
    },
    buttonLink: {
        borderRadius: theme.spacing(6),
        '&:hover': {
            transition: 'all 0.2s ease-in-out',
            background: theme.palette.common.white
        }
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        margin: theme.spacing(3),
    }
}));
const InfoSection = (props) => {

    const { id, button, topLine, headline, description, image, alt } = props;
    const classes = useStyles();
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    return (
        <>
            <Container maxWidth='xl' className={classes.container}>
                <Grid container>
                    <Grid item sm={12} md={6}>
                        <Box data-aos='fade-up' className={classes.item}>
                            <Typography className={classes.topline} variant='h4' color='primary'>{topLine}</Typography>
                            <Typography className={classes.headline} variant='h1'>{headline}</Typography>
                            <Typography className={classes.description} variant='subtitle1'>{description}</Typography>
                            <Button variant='contained' color='primary' className={classes.buttonLink}>
                                {button}
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Box data-aos='fade-right' className={classes.item}>
                            <img className={classes.img} src={image} alt={alt} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default InfoSection;
