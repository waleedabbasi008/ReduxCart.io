import React from "react";
import ReactDom from 'react-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Store } from "./App/Store";
import { Provider } from "react-redux";
ReactDom.render(
   <>
      <BrowserRouter>
         <Provider store={Store}>
            <App />
         </Provider>
      </BrowserRouter>
   </>,
   document.getElementById("root")
);
