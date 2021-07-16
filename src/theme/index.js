import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Component } from 'react';

const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#01bf71'
        },
        secondary: {
            main: '#ffc400'
        },
        background: '#fff',
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
        type: 'dark',
        background: {
            default: '#000',
            paper: '#000'
        },
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

const Theme = (props) => {
    const { children, darkMode } = props;
    const defaultTheme = darkMode ? darkTheme : lightTheme;
    return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export const withTheme = (Component)=>{

}

export { Theme, lightTheme, darkTheme };