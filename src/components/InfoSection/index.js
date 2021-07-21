import { Grid, Typography, Button, makeStyles, Container, Box,  ThemeProvider} from '@material-ui/core';
import React, { useContext } from 'react';
import ThemeContext from '../../context/Context';
const useStyles = makeStyles((theme) => ({
    container: {
        background: ({ bgColor }) => bgColor ? bgColor : theme.palette.background.default
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
        color: ({textColor}) => textColor
    },
    description: {
        lineHeight: '24px',
        paddingBottom: theme.spacing(2),
        color: ({textColor}) => textColor
    },
    img: {
        width: '100%',
        height: 'auto',
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
        margin: theme.spacing(3)
    }
}));
const InfoSection = (props) => {

    const { id, button, topLine, headline, description, image, alt, bgColor, textColor } = props;
    const classes = useStyles({ bgColor, textColor });
    return (
        <>
            <div className={classes.container}>
                <Grid container>
                    <Grid item sm={12} md={6}>
                        <Box className={classes.item}>
                            <Typography className={classes.topline} variant='h4' color='primary'>{topLine}</Typography>
                            <Typography className={classes.headline} variant='h1'>{headline}</Typography>
                            <Typography className={classes.description} variant='subtitle1'>{description}</Typography>
                            <Button variant='contained' color='primary' className={classes.buttonLink}>
                                {button}
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Box className={classes.item}>
                            <img className={classes.img} src={image} alt={alt} />
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default InfoSection;
