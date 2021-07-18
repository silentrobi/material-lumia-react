import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton, ListItemText } from '@material-ui/core';
import { Button, Link } from '@material-ui/core';
const drawerWidth = '100%';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    closeButtonWrapper: {
        display: 'flex',
        justifyContent: 'flex-end'

    },
    closeButton: {
        color: theme.palette.text.primary
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    link: {
        margin: theme.spacing(1, 1.5),
        textDecoration: 'none',
        color: theme.palette.text.primary,
        fontFamily: theme.typography.fontFamily,
        textAlign: 'center',
        cursor: 'pointer',
        '&:hover': {
            color: theme.palette.primary.main
        }
    },
    buttonLink: {
        textAlign: 'center',
        borderRadius: theme.spacing(6),
        '&:hover': {
            transition: 'all 0.2s ease-in-out',
            background: theme.palette.custom.white
        }
    },
    buttonWrapper: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

const Sidebar = (props) => {
    const { window, mobileOpen, handleDrawerToggle } = props;
    console.log(mobileOpen);
    const classes = useStyles();
    const theme = useTheme();

    const drawer = (
        <>
            <List>
                <div className={classes.closeButtonWrapper}>
                    <IconButton
                        color="textPrimary"
                        onClick={handleDrawerToggle}
                    >
                        <CloseIcon className={classes.closeButton} />
                    </IconButton>
                </div>
                {['About', 'Discover', 'Services', 'Sign Up'].map((text) => (
                    <ListItem className={classes.link} key={text} component='a' href="#">
                        <ListItemText color='textPrimary'> {text}</ListItemText>
                    </ListItem>
                ))}
                <ListItem className={classes.link}>
                    <ListItemText color='textPrimary'>
                        <Button variant='contained' color='primary' className={classes.buttonLink}>
                            Sign In
                        </Button>
                    </ListItemText>

                </ListItem>
            </List>
        </>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <div aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </div>
        </>
    );
}

Sidebar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Sidebar;
