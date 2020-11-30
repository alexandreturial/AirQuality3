import React, { createContext, useState, useContext } from 'react';


interface IDataContext{
    showHistory(data: {Name: string; grupo: string; percent: number} ):void;
    historyData?:IData;
}

interface IData{
    data: {
        Name: string,
        grupo: string;
        percent: number
    };
}

//cria o context, que começa vazio com o ITehemeContext de interface
const DataContext = createContext<IDataContext>({} as IDataContext);

const DataProvider: React.FC= ({children}) => {

    const [historyData, setHistoryData] = useState<IData>();

    const showHistory = (data: {Name: string; grupo: string; percent: number} ) => {
        setHistoryData({data});
    };
    
    return (
        <DataContext.Provider value={{showHistory, historyData}}>
            {children}
        </DataContext.Provider>
    );
}

function useData(): IDataContext{
    const context = useContext(DataContext);

    return context;
}

export {DataProvider, useData};