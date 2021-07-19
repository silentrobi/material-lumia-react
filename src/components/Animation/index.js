import { Grid, Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Video from '../../videos/video.mp4';
import SendIcon from '@material-ui/icons/Send';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const useStyles = makeStyles((theme) => ({
    container: {
        zIndex: 1,
    },
    animationBg: {
        width: '100%',
        height: '100vh', //strech height 
        overflow: 'hidden', // to hide scrollbar,
    },
    videoBg: {
        width: '100%',
        height: '100%',
        '-o-object-fit': 'cover',
        objectFit: 'cover'
    },
    animationContent: {
        zIndex: 3,
        position: 'absolute',
        display: 'flex',
        'flexDirection': 'column',
        alignItems: 'center'
    },
    buttonLink: {
        marginTop: theme.spacing(3),
        borderRadius: theme.spacing(6),
        '&:hover': {
            transition: 'all 0.2s ease-in-out',
            background: theme.palette.common.white
        }
    },
    textHeader: {
        color: theme.palette.common.white,
        textAlign: 'center',
        marginTop: theme.spacing(3),
        fontWeight: 'bold'
    },
    textContent: {
        color: theme.palette.common.white,
        textAlign: 'center',
        marginTop: theme.spacing(3)
    }
}));
const Animation = () => {
    const classes = useStyles();
    const [isHover, setIsHover] = useState(false);

    const handleButtonHover = () => {
        setIsHover(!isHover);
    };  

    return (
        <Grid className={classes.container} container justifyContent='center' alignItems='center'>
            <div className={classes.animationBg}>
                <video className={classes.videoBg} autoPlay loop muted src={Video} type='video/mp4' />
            </div>
            <div className={classes.animationContent}>
                <Typography variant='h1' className={classes.textHeader}>Virtual Banking Made Easy</Typography>
                <Typography variant='h3' className={classes.textContent}>
                    Sign up for a new account today and receive $250 in credit towards your next payment
                </Typography>
                <Button
                    variant='contained'
                    color='primary'
                    className={classes.buttonLink}
                    endIcon={isHover ? <ArrowForwardIcon /> : <SendIcon />}
                    onMouseEnter={handleButtonHover}
                    onMouseLeave={handleButtonHover}
                >
                    Get started
                </Button>
            </div>
        </Grid>
    )
}

export default Animation;
