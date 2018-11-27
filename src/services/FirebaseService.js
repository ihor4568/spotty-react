import { initializeApp } from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";

let config = {};
try {
  // eslint-disable-next-line global-require, import/no-unresolved
  config = require("../config.json");
} catch (e) {
  //
}

export const FirebaseService = initializeApp(config);
