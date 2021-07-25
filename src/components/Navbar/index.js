import React, { useContext, useState, useEffect } from 'react';
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
import classNames from 'classnames';

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
        padding: theme.spacing(2.6, 1.5),
        textDecoration: 'none',
        fontFamily: theme.typography.fontFamily,
        textAlign: 'center',
        height: '100%',
        cursor: 'pointer',
        color: theme.palette.text.primary,
        '&:hover': {
            color: theme.palette.primary.main
        },
        '&:active': {
            color: theme.palette.primary.main,
            borderBottom: `3px solid ${theme.palette.primary.main}`,
        },
    },
    isActive: {
        color: theme.palette.primary.main,
        borderBottom: `3px solid ${theme.palette.primary.main}`,
    },
    buttonLink: {
        margin: theme.spacing(1, 1.5),
        borderRadius: theme.spacing(6),
        '&:hover': {
            transition: 'all 0.2s ease-in-out',
            background: theme.palette.common.white
        }
    },
    appbar: {
        background: 'transparent',
        boxShadow: 'none'
    },
    initAppbarElement: {
        color: theme.palette.common.white
    }
}));

const Navbar = (props) => {
    const classes = useStyles();
    const { handleDrawerToggle } = props;
    const { isDark, toggleDarkMode } = useContext(ThemeContext);
    const [showAppBar, setShowAppBar] = useState(false);
    const [currentBookmarkId, setCurrentBookmarkId] = useState(-1);
    
    const scrollToTop = () => {
        window.scrollTo(0, 0);
        setCurrentBookmarkId(-1);
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setShowAppBar(window.pageYOffset > 100)
            );
        }
    }, []);

    return (
        <>
            <AppBar position="fixed" color="inherit" className={classNames({ [classes.appbar]: !showAppBar })}>
                <Toolbar>
                    <Typography variant="h4" onClick={scrollToTop} color="textPrimary" className={classNames(classes.title, { [classes.initAppbarElement]: !showAppBar })}>
                        Lumia
                    </Typography>
                    <Hidden xsDown={true}>
                        {['About', 'Discover', 'Services', 'Sign Up'].map((text, i) => (

                            <Link
                                key={i}
                                underline='none'
                                href={`#${text.replace(/\s+/g, '').toLowerCase()}`}
                                onClick={() => setCurrentBookmarkId(i)}
                                className={classNames(classes.link, { [classes.isActive]: i == currentBookmarkId, [classes.initAppbarElement]: !showAppBar })}>
                                {text}
                            </Link>
                        ))}
                        <Button variant='contained' color='primary' className={classes.buttonLink}>
                            Sign In
                        </Button>
                    </Hidden>
                    <IconButton
                        onClick={toggleDarkMode}
                        className={classNames({ [classes.initAppbarElement]: !showAppBar })}
                    >
                        {isDark ?
                            <Brightness7Icon color="inherit" />
                            : <Brightness4Icon color="inherit" />}
                    </IconButton>
                    <IconButton
                        edge="start"
                        className={classNames(classes.menuIcon, { [classes.initAppbarElement]: !showAppBar })}
                        aria-label="menu"
                        onClick={handleDrawerToggle}>
                        <MenuIcon color="inherit" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;