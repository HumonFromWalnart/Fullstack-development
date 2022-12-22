import axios from "axios";
import React, { useEffect, useState } from "react";


const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:6942");
    setData(res.data.data);
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
      {data.map(dat => <div>{dat._id}</div>)}
    </div>
  );
}

export default App;
