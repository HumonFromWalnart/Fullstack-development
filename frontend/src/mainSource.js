import axios from 'axios'
import React, { createContext, useEffect, useState } from "react";

export const UserData = createContext();

const Source = ({ children }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:6942");
    console.log(res.data.data);
    setData(res.data.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <UserData.Provider value={{ data }}>
      {children}
    </UserData.Provider>
  );

}

export default Source;
