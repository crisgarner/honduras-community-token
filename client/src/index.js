import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Drizzle, generateStore } from "drizzle";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import BuidlHondurasToken from "./contracts/BuidlHondurasToken.json";
import HondurasCommunityToken from "./contracts/HondurasCommunityToken.json";
import SwagNFT from "./contracts/SwagNFT.json";
import SwagStore from "./contracts/SwagStore.json";
import OldTokenMigrator from "./contracts/OldTokenMigrator.json";

const options = {
  contracts: [
    BuidlHondurasToken,
    SwagNFT,
    SwagStore,
    OldTokenMigrator,
    HondurasCommunityToken
  ]
};

const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

ReactDOM.render(
  <Router>
    <App drizzle={drizzle} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
