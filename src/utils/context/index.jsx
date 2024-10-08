import {createContext} from "react";
import {useFetch} from "../hooks/index.jsx";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
    const {data, isLoading, error} = useFetch(`/api/logements.json`);


    return (
        <DataContext.Provider value={{ data, isLoading, error }}>
            {children}
        </DataContext.Provider>
    )
}