import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
