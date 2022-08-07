import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function Home() {
  const [clientInfo, setClientInfo] = useState([]);

  const refresh = () => {
    getClientInfo();
  };
  
  const getClientInfo = () => {
    axios
      .get("https://randomuser.me/api")
      .then((res) => {
        console.log(res.data.results);
        setClientInfo(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  useEffect(() => {
    getClientInfo();
  }, []);


  return (
    <div className="Home">
      <button onClick={refresh}>Refresh</button>
      <p>
        Name:
        {clientInfo.map((info) => (
          <label key={info.id.value}>
            {info.name.first} {info.name.last}
          </label>
        ))}
      </p>
      <p>
        Address:
        {clientInfo.map((info) => (
          <label key={info.id.value}>
            {info.location.street.number} {info.location.street.name},{" "}
            {info.location.city}, {info.location.state} {info.location.postcode}
            , {info.location.country}
          </label>
        ))}
      </p>
    </div>
  );
}

export default Home;
