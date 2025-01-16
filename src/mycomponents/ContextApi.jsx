import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

let Apidata = createContext();

const ContextApi = ({ children }) => {
    let [data, setData] = useState([]);

    let getData = () => {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((response) => {
                setData(response.data.categories);
            })
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Apidata.Provider value={data}>
            {children}
        </Apidata.Provider>
    );
};

export { ContextApi, Apidata };
