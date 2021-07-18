import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { useState } from 'react';

const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#01bf71'
        },
        secondary: {
            main: '#ffc400'
        },
        custom:{
            white: '#fff'
        },
        background: {
            default: '#fff',
            paper: '#fff'
        },
        type: 'light'
    },
    typography: {
        fontFamily: [
            'Roboto'
        ].join(',')
    }
});

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#01bf71'
        },
        secondary: {
            main: '#fffff'
        },
        background: {
            default: '#000',
            paper: '#000'
        },
        custom:{
            white: '#fff'
        },
        type: 'dark',
        text: {
            primary: '#FFFFFF',
            secondary: '#fafafa'
        }
    },
    typography: {
        fontFamily: [
            'Roboto'
        ].join(',')
    }
});

export { lightTheme, darkTheme };