import React, { createContext, useState } from 'react'

const ThemeMoodContext = createContext(null)

function ThemeMood({ children }) {
    const [isLightmode, setIslightmode] = useState(true)
    return (
        <ThemeMoodContext.Provider value={[isLightmode, setIslightmode]}>
            { children }
        </ThemeMoodContext.Provider>
    )
}

export  {ThemeMood, ThemeMoodContext}
