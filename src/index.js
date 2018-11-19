import React from "react";
import { render } from "react-dom";
import { create } from "jss";
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import TestApp from "./components/TestApp";

const styleNode = document.createComment("insertion-point-jss");
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: "insertion-point-jss"
});

const App = () => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <TestApp />
  </JssProvider>
);

render(<App />, document.querySelector("#root"));
