// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom";
import client from "./apollo";
import ToDoContainer from "./containers/ToDoContainer";
import "./index.scss";

const App = () => (
  <main className="app">
    <ToDoContainer />
  </main>
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

if (module.hot) module.hot.accept();