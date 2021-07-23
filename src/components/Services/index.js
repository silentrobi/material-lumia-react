import { Grid, Box, Typography, Container, CardMedia } from '@material-ui/core';
import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import imgFive from '../../images/svg-5.svg';
import imgOne from '../../images/svg-1.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ThemeContext from '../../context/Context';
const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.paper,
        flexGrow: 1,
        padding: theme.spacing(6),
        overflowX: 'hidden'
    },
    img: {
        width: '100%',
        height: '30vh',
        objectFit: 'contain'
    },
    card: {
        maxWidth: '300px',
        margin: 'auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '8px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        background: '#fff',
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.default
    },
    container: {
        margin: theme.spacing(10),

    },
    sectionHeading: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    headline: {
        paddingTop: theme.spacing(2),
        fontWeight: 'bold'
    },
    description: {
        paddingTop: theme.spacing(1),
        lineHeight: 1.1
    }
}));
const Services = () => {
    const isDark = useContext(ThemeContext);
    const classes = useStyles();
    useEffect(() => {
        
        Aos.init({once: true, duration: 2000 })
    }, [isDark]);

    return (
        <>
            <Container maxWidth='xl' className={classes.root}>
                <Box data-aos='fade-right'>
                    <Typography variant="h1" color="textPrimary" className={classes.sectionHeading}>Our Services</Typography>
                </Box>
                <Grid container spacing={3} justifyContent='center' alignItems='center' >
                    <Grid item xs={12} sm={6} md={3}>
                        <Box data-aos='fade-up' className={classes.card}>
                            <img
                                src={imgOne}
                                alt="benifits"
                                className={classes.img}
                            />
                            <Typography variant='h4' color='textPrimary' className={classes.headline}>Reduce Expenses</Typography>
                            <Typography variant='subtitle2' color='textPrimary' className={classes.description}>We help reduce your fees and
                                increase your overall revenue.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box data-aos='fade-down' className={classes.card}>
                            <img
                                src={imgFive}
                                alt="benifits"
                                className={classes.img}
                            />
                            <Typography variant='h4' color='textPrimary' className={classes.headline}>Premium Benifits</Typography>
                            <Typography variant='subtitle2' color='textPrimary' className={classes.description}>Unlock our special membership card
                                that returns 5% cash back.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box data-aos='fade-left' className={classes.card}>
                            <img
                                src={imgFive}
                                alt="benifits"
                                className={classes.img}
                            />
                            <Typography variant='h4' color='textPrimary' className={classes.headline}>Premium Benifits</Typography>
                            <Typography variant='subtitle2' color='textPrimary' className={classes.description}>Unlock our special membership card
                                that returns 5% cash back.</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Services;
