import { Grid, Box, Typography, Container, CardMedia } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import imgFive from '../../images/svg-5.svg';
import imgOne from '../../images/svg-1.svg';
const useStyles = makeStyles((theme) => ({
    root: {
        background: '#000',
        flexGrow: 1
    },
    item: {

    },
    img: {
        width: '100%',
        height: '30vh',
        objectFit: 'contain'
    },
    containerItem: {

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
        padding: theme.spacing(2)
    },
    container: {
        margin: theme.spacing(10),

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
    const classes = useStyles();
    return (
        <>
            <Container maxWidth='xl' className={classes.root}>
                <Box>
                    <Typography variant="h1" style={{ padding: '16px', fontWeight: 'bold', textAlign: 'center', color: '#fff' }}>Our Services</Typography>
                </Box>
                <Grid container spacing={3} justifyContent='center' >
                    <Grid item xs={12} sm={6} md={3}>
                        <Box className={classes.card}>
                            <img
                                src={imgOne}
                                alt="benifits"
                                className={classes.img}
                            />
                            <Typography variant='h4' className={classes.headline}>Reduce Expenses</Typography>
                            <Typography variant='subtitle2' className={classes.description}>We help reduce your fees and
                                increase your overall revenue.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box className={classes.card}>
                            <img
                                src={imgFive}
                                alt="benifits"
                                className={classes.img}
                            />
                            <Typography variant='h4' className={classes.headline}>Premium Benifits</Typography>
                            <Typography variant='subtitle2' className={classes.description}>Unlock our special membership card
                                that returns 5% cash back.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box className={classes.card}>
                            <img
                                src={imgFive}
                                alt="benifits"
                                className={classes.img}
                            />
                            <Typography variant='h4' className={classes.headline}>Premium Benifits</Typography>
                            <Typography variant='subtitle2' className={classes.description}>Unlock our special membership card
                                that returns 5% cash back.</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Services;
