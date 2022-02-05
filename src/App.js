import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <div className="app__body">
            <Sidebar/>
            <Routes>
                <Route path="/mail">
                    {/*<Mail />*/}
                </Route>
                <Route path="/">
                    {/*<EmailList />*/}
                </Route>
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
