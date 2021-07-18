import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, Link } from '@material-ui/core';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import ThemeContext from '../../context/Context';

const useStyles = makeStyles((theme) => ({
    menuIcon: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    title: {
        flexGrow: 1,
        cursor: 'pointer',
        fontWeight: 'bold'
    },
    link: {
        margin: theme.spacing(1, 1.5),
        textDecoration: 'none',
        fontFamily: theme.typography.fontFamily,
        textAlign: 'center',
        cursor: 'pointer',
        '&:hover': {
            color: theme.palette.primary.main
        }
    },
    buttonLink: {
        borderRadius: theme.spacing(6),
        '&:hover': {
            transition: 'all 0.2s ease-in-out',
            background: theme.palette.custom.white
        }
    }
}));

const Navbar = (props) => {
    const classes = useStyles();
    const { handleDrawerToggle } = props;
    const { isDark, toggleDarkMode } = useContext(ThemeContext);
    console.log(isDark, toggleDarkMode);
    return (
        <>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Typography variant="h6" color="textPrimary" className={classes.title}>
                        Token
                    </Typography>
                    <Hidden xsDown={true}>
                        {['About', 'Discover', 'Services', 'Sign Up'].map((text) => (
                            <Link color='textPrimary' underline='none' className={classes.link} >
                                {text}
                            </Link>
                        ))}
                        <Button variant='contained' color='primary' className={classes.buttonLink}>
                            Sign In
                        </Button>
                    </Hidden>
                    <IconButton
                        onClick={toggleDarkMode}
                    >
                        {isDark ?
                            <Brightness7Icon color="inherit" />
                            : <Brightness4Icon color="inherit" />}
                    </IconButton>
                    <IconButton
                        edge="start"
                        className={classes.menuIcon}
                        aria-label="menu"
                        onClick={handleDrawerToggle}>
                        <MenuIcon color="inherit"/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;