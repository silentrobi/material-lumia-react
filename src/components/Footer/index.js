import { Container, Grid, Typography, Box, Link } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { mainData } from './data';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.default,
        height: '100%'
    },
    img: {
        width: '100%',
        height: '30vh',
        objectFit: 'contain'
    },
    card: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: theme.spacing(2),
        flexGrow: 1
    },
    footterBottom: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingBottom: theme.spacing(2)
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
        lineHeight: 1.3,
        fontWeight: 'normal',
    },
    title: {
        cursor: 'pointer',
        fontWeight: 'bold'
    },
    link: {
        textDecoration: 'none',
        fontFamily: theme.typography.fontFamily,
        textAlign: 'center',
        cursor: 'pointer',
        '&:hover': {
            color: theme.palette.primary.main
        }
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <Container maxWidth='xl' className={classes.root}>
            <Grid container justifyContent='space-around'>
                {mainData.map((data) => (
                    <Grid xs={6} sm={6} md={3} >
                        <Box className={classes.card}>
                            <Typography variant='h4' color='textPrimary' className={classes.headline}>{data.heading}</Typography>
                            {data.items.map((item) => (<Typography variant='subtitle2' className={classes.description}>
                                <Link color='textPrimary' className={classes.link} underline='none' href="#">
                                    {item}
                                </Link>
                            </Typography>
                            ))}
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Box className={classes.footterBottom}>
                <Typography variant='h5' className={classes.title} color='textPrimary'>Lumia</Typography>
                <Typography variant='subtitle2' style={{ fontWeight: 'normal' }} color='textPrimary' >
                    lumia &copy; 2021 All right reserved.
                </Typography>
                <Box>
                    <Link href='#' color='inherit' >
                        <FacebookIcon style={{ color: '#4267B2' }} />
                    </Link>
                    <Link href='#' style={{ paddingLeft: '8px' }} color='inherit'>
                        <YouTubeIcon style={{ color: '#FF0000' }} />
                    </Link>
                    <Link href='#' style={{ paddingLeft: '8px' }} color='inherit'>
                        <TwitterIcon style={{ color: '#1DA1F2' }} />
                    </Link>
                    <Link href='#' style={{ paddingLeft: '8px' }} color='inherit'>
                        <InstagramIcon style={{ color: '#F77737' }} />
                    </Link>
                </Box>
            </Box>
        </Container >
    );
}

export default Footer;
