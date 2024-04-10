import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import {createContext, PropsWithChildren, useMemo} from "react";
import theme from '../src/theme';
import useLocalStorage from "use-local-storage";

type IThemeSwitch = {
  setTheme: (name: string) => void;
}

export const SwitchContext = createContext<IThemeSwitch>({
  setTheme: () => undefined,
});

export const ThemeProvider = ({ children}: PropsWithChildren) => {
  const [themeName, setTheme] = useLocalStorage<string>('themeName', 'dark');
  const switchValue = useMemo(() => ({ setTheme }), [setTheme])

  const themeValue = useMemo(() => {
    return themeName === 'dark' ? theme.dark : theme.light;
  }, [themeName])

  return (
    <SwitchContext.Provider value={switchValue}>
      <MuiThemeProvider theme={themeValue}>
        {children}
      </MuiThemeProvider>
    </SwitchContext.Provider>
  )
}
