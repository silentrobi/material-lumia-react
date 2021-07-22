import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { useState } from 'react';
import typography from './typography';
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
            default: 'rgb(244, 246, 248)',
            paper: '#fff'
        },
        type: 'light',
        text: {
            primary: '#000',
            secondary: '#000'
        },
    },
    typography
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
            default: '#3a3b3c',
            paper: '#18191a'
        },
        custom:{
            white: '#fff'
        },
        type: 'dark',
        text: {
            primary: '#fff',
            secondary: '#fff'
        }
    },
    typography
});

export { lightTheme, darkTheme };