import { createContext, useContext } from "react";

export const ThemeContest = createContext({
    themeMode:'dark',
    darkMode:()=>{},
    lightMode:()=>{},
})

export const ThemeProvider = ThemeContest.Provider

export default function useTheme(){
    return useContext(ThemeContest)
}