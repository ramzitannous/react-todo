import React from 'react';
import './App.css';
import {Provider} from "react-redux"
import store from "./store";
import {AppRouter} from "./router";

function App() {

  return (
      <Provider store={store}>
        <div className="dashboardContainer">
        <AppRouter/>
        </div>
      </Provider>
  );
}

export default App;
