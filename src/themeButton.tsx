import {SwitchContext} from "./themeProvider";
import {useContext} from "react";

export const ThemeButton = () => {
  const { setTheme } = useContext(SwitchContext);

  return (
    <div>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
    </div>
  )
}
