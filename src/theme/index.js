import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette:{
        primary:{
            main: '#01bf71'
        },
        secondary:{
            main: '#ffc400'
        },
        white: '#fff'
    },
    typography:{
        fontFamily: [
            'Roboto'
        ].join(',')
    }
});

export default theme;