import { Grid, Box, Typography, Card, CardMedia } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import imgFive from '../../images/svg-5.svg';
import imgOne from '../../images/svg-1.svg';
const useStyles = makeStyles((theme) => ({
    root:{
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
    containerItem:{

    },
    card:{
        maxWidth: '300px',
        margin: 'auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '8px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        background: '#fff'
    },
    container:{
        margin: theme.spacing(10),
        
    },
    headline:{
        paddingTop: theme.spacing(2),
        fontWeight: 'bold'
    },
    description:{
        paddingTop: theme.spacing(1),
        lineHeight: 1.1
    }
}));
const Services = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <Grid container className={classes.container} >
                    <Grid item xs={12} md={4}>
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
                    <Grid item className={classes.containerItem} xs={12} md={4}>
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
                    <Grid item xs={12} md={4}>
                        <Box className={classes.card}>
                            <img
                                src={imgFive}
                                alt="benifits"
                                className={classes.img}
                            />
                            <Typography variant='h4'>Premium Benifits</Typography>
                            <Typography variant='subtitle2' className={classes.description}>Unlock our special membership card
                                that returns 5% cash back.</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Services;
