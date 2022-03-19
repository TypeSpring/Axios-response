import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const status: string[] = [
    "200",
    "201",
    "202",
    "203",
    "204",
    "205",
    "206",
    "207",
    "208",
    "226",
    "300",
    "301",
    "302",
    "303",
    "304",
    "400",
    "401",
    "402",
    "403",
    "404",
    "405",
    "406",
    "500",
    "501",
    "502",
    "503",
    "504",
  ];
  const [axiosResult, setAxiosResult] = useState<String>("");
  const updateResult = (result: string): void => {
    setAxiosResult(result);
  };
  return (
    <div className="App">
      <div className="App_axiosResult">{axiosResult}</div>
      {status.map((num) => (
        <Button key={num} num={num} updateResult={updateResult} />
      ))}
    </div>
  );
}

export default App;
