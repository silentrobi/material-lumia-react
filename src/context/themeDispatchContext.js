import ThemeProvider from '@material-ui/styles/ThemeProvider';
import React, { createContext, useContext, useReducer, useMemo, useCallback } from 'react';
import { createTheme, useTheme } from '@material-ui/core';

export const ThemeDispatchContext = createContext(null);

const Theme = ({ children, theme }) => {
    const themeInitialOptions = {
        paletteType: 'light'
    }

    const [themeOptions, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'changeTheme':
                return {
                    ...state,
                    paletteType: action.payload
                }
            default:
                throw new Error();
        }
    }, themeInitialOptions);

    const memoizedTheme = useMemo(() => {
        return createTheme({
            palette: {
                ...theme.palette
            }
        })
    }, [theme, themeOptions.paletteType]);
    return (
        <ThemeProvider theme={memoizedTheme}>
            <ThemeDispatchContext.Provider value={dispatch}>
                {children}
            </ThemeDispatchContext.Provider>

        </ThemeProvider>
    );
}

export default Theme;

export const useChangeTheme = () => {
    const dispatch = useContext(ThemeDispatchContext);
    const theme = useTheme();
    const changeTheme = useCallback(()=>
      dispatch({
        type: 'changeTheme',
        payload: theme.palette.type === 'light' ? 'dark' : 'light'
      }),
    [theme.palette.type, dispatch]);
  
    return changeTheme;
  }