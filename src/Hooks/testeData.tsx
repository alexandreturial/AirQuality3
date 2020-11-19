import React, { createContext, useState, useContext } from 'react';


interface ITesteContext{
    toggleTheme(name: string):void;
    teste:Iteste;
}

interface Iteste{
    data: string;
}

//cria o context, que começa vazio com o ITehemeContext de interface
const TesteContext = createContext<ITesteContext>({} as ITesteContext);

const TesteProvider: React.FC= ({children}) => {

    const [teste, setTeste] = useState<Iteste>({data: ""});

    const toggleTheme = (name: string) => {
        setTeste({data: name});
        console.log(teste);
    };
    
    return (
        <TesteContext.Provider value={{toggleTheme, teste}}>
            {children}
        </TesteContext.Provider>
    );
}

function useTeste(): ITesteContext{
    const context = useContext(TesteContext);

    return context;
}

export {TesteProvider, useTeste};