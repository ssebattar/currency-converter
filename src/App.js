import React, { useEffect, useState } from "react";
import Axios from "axios";
import Dropdown from "react-dropdown";
import { HiSwitchHorizontal } from "react-icons/hi";

import "react-dropdown/style.css";
import "./App.css";
import Userguide from "./components/UserGuide/Userguide";
import img_header from "./img-header.jpg";

function App() {
  // Initializing all the state variables
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("jpy");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);
  const [names, setNames] = useState([]);

  // Calling the api whenever the dependency changes
  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
    ).then((res) => {
      setInfo(res.data[from]);
    });
  }, [from]);

  // Set name
  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`
    ).then((res) => {
      setNames(res.data);
    });
  });

  // Calling the convert function whenever
  // a user switches the currency
  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info]);

  // Function to convert the currency
  var rate = info[to];
  function convert() {
    setOutput(input * rate);
  }

  // Function to switch between two currency
  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }

  const ColoredLine = () => <hr />;

  /* var curr = "./currencies.json";
  var c = JSON.parse(curr);
  var r = [];
  for (var i in c) r.push(c[i]); */

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
                type="text"
                placeholder="Enter the amount"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <div className="middle">
              <h3>From</h3>
              <Dropdown
                options={options}
                onChange={(e) => {
                  setFrom(e.value);
                }}
                value={from.toUpperCase()}
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
                options={options}
                onChange={(e) => {
                  setTo(e.value);
                }}
                value={to.toUpperCase()}
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
                    rate +
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
          <div>---</div>
          <div>
            © CMSC 495 6380 - Current Trends and Projects in Computer Science -
            2218. Fall 2021 Group 6. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
