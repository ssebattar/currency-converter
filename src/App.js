import React, { useEffect, useState } from "react";
import Axios from "axios";
import Dropdown from "react-dropdown";
import { HiSwitchHorizontal } from "react-icons/hi";

import "react-dropdown/style.css";
import "./App.css";

import Userguide from "./components/UserGuide/Userguide";
import FullUserguide from "./components/UserGuide/FullUserguide";
import img_header from "./image-header.jpg";

function App() {
  // Initializing all the state variables
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("jpy");
  const [output, setOutput] = useState(0);
  const [name, setName] = useState([]);
  const [names, setNames] = useState([]);
  const [value, setValue] = useState(0);

  // Calling the api whenever the dependency changes
  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
    ).then((res) => {
      setInfo(res.data[from]);
    });

    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`
    ).then((res) => {
      setName(res.data);
    });
  }, [from]);

  // Calling the convert function whenever
  // a user switches the currency

  useEffect(() => {
    setNames(Object.values(name));
    convert();
  }, [name]);

  // Function to convert the currency
  function rate() {
    return info[to];
  }

  // Calculate the rate
  function convert() {
    setOutput(input * rate());
  }

  // Function to switch between two currency
  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }

  // Draw Horizontal Line
  const ColoredLine = () => <hr />;

  // Get currency key by its value
  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  const validateAmount = (amount) => {
    if (amount < 0) return 0;
  };

  return (
    <div className="outer">
      <div className="heading">
        <h1>CMSC 495 Group 6 Project - Currency Converter</h1>
      </div>

      <div className="inner">
        <div className="user-guide">
          <Userguide />
        </div>

        <div className="App">
          <div className="img-header">
            <img src={img_header} width="900" height="180" />
          </div>

          <div className="container">
            <div className="left">
              <h3>Amount</h3>
              <input
                type="number"
                min="0"
                step="1"
                placeholder="Enter amount"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                onKeyUp={() => convert()}
              />
            </div>
            <div className="middle">
              <h3>From</h3>
              <Dropdown
                options={names}
                onChange={(e) => {
                  setFrom(getKeyByValue(name, e.value));
                  convert();
                }}
                value={`(${from.toUpperCase()}) ${name[from]}`}
                placeholder="From"
              />
            </div>
            <div className="switch">
              <HiSwitchHorizontal
                size="30px"
                onClick={() => {
                  flip();
                }}
              />
            </div>
            <div className="right">
              <h3>To</h3>
              <Dropdown
                options={names}
                onChange={(e) => {
                  setTo(getKeyByValue(name, e.value));
                  convert();
                }}
                value={`(${to.toUpperCase()}) ${name[to]}`}
                placeholder="To"
              />
            </div>
          </div>
          <div className="result">
            <button
              onClick={() => {
                convert();
              }}
            >
              Convert
            </button>
            <div className="res">
              <div className="res-ins">
                <h3>Converted Amount:</h3>
                <p>
                  {input +
                    " " +
                    from.toUpperCase() +
                    " = " +
                    output.toFixed(2) +
                    " " +
                    to.toUpperCase()}
                </p>
              </div>
              <div className="res-ins">
                <h3>Rate:</h3>
                <p>
                  {"1 " +
                    from.toUpperCase() +
                    " = " +
                    rate() +
                    " " +
                    to.toUpperCase()}
                </p>
              </div>
            </div>
            <ColoredLine />
          </div>
          <div className="active">
            Currency live data is active. Updated few seconds ago.
          </div>
        </div>
      </div>
      <FullUserguide />
    </div>
  );
}

export default App;
