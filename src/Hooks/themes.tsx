import React, { createContext, useState, useContext }  from 'react';

import Dark from '../styles/Themes/Dark';
import Light from '../styles/Themes/Light';


interface ITehemeContext{
    toggleTheme(): void;
    theme: ITheme
}

interface ITheme{
    title: string;
    
    colors:{
        primary: string;
        secundary: string;
        tertiary: string;
        
        white: string;          
        balck:string;          
        gray:string;

        red: string;
        green: string;
        yellow: string;
        purple: string;
        birches: string;
        purpleBlue: string;
        blueishBlack: string;
        blue: string;

        gradient1: string;
        gradient2: string;
        gradient3: string;
    },   
}

//cria o context, que começa vazio com o ITehemeContext de interface
const ThemeContext = createContext<ITehemeContext>({} as ITehemeContext);

//prodivder vai disponibilizar context para o resto da aplicação
const ThemeProvider: React.FC = ({children}) => {
    const [theme, setTheme] = useState<ITheme>(Dark)

    const toggleTheme = () => {
       
        if(theme.title === 'Dark'){
            setTheme(Light);
        }else{
            setTheme(Dark);
        }
    };

  return (
      <ThemeContext.Provider value={{toggleTheme, theme}}>
          {children}
      </ThemeContext.Provider>
  );
} 


function useTheme(): ITehemeContext{
    const context = useContext(ThemeContext);

    return context;
}

export {ThemeProvider, useTheme};