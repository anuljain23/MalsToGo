import React, {createContext, useState, useEffect } from "react";
import { locationRequest, locationTranform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    
    const [error, setError] = useState(null);
    
    const [location, setLocation] = useState(null);
    
    const [keyword, setKeyword] = useState("san francisco");
    
    const onSearch = (searchKeyWord) => {
        setIsLoading(true);
        setKeyword(searchKeyWord);
        locationRequest(searchKeyWord.toLowerCase())
        .then(locationTranform)
        .then((result) => {
            setIsLoading(false);
            setLocation(result);
            console.log(result);
        }).catch((err) => {
            setIsLoading(false);
            setError(err);
            console.log(err);
        })
    }
    
    useEffect(() => {
        onSearch(keyword);
    },[]);
    
    return (
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                location,
                search: onSearch,
                keyword,
            }} 
        >
            {children}
        </LocationContext.Provider>
    )
}