import {createContext, useEffect, useState} from "react";

export const AlbumsContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const AlbumsProvider = ({children}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        if (!response.ok) {
          throw new Error("Problem with internet conection");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <AlbumsContext.Provider value={data}>
      {children}
    </AlbumsContext.Provider>
  )
}
