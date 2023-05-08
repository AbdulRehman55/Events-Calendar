import * as React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./App.scss";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
