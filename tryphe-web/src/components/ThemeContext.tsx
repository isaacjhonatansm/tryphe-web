import { createContext, useState, type ReactNode } from "react"

type ThemeType = "dark" | "gold"

interface ThemeContextType {
  theme: ThemeType
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {}
})

interface Props {
  children: ReactNode
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>("dark")

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`} style={{ minHeight: "100vh" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}