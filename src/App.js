import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  const fetchingData = async () => {
    const response = await fetch(
      "https://uselessfacts.jsph.pl/random.json?language=en"
    );
    const data = await response.json();

    console.log(data);
    setData(data);
    setDataLoaded(true);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      {!dataLoaded ? (
        <h1>Loading</h1>
      ) : (
        <>
          <h1>{data.text}</h1>
          <a href="{data.permalink}" target="_blank">
            Click here.
          </a>
          <button onClick={fetchingData}>Get another fact.</button>
        </>
      )}
    </>
  );
}

export default App;
