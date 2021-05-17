import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import WorkList from "./components/work-list.component";
import EditWorkday from "./components/edit-workday.component";
import CreateWorkday from "./components/create-workday.component";
import CreateWorker from "./components/create-worker.component";
import CreateJobsite from "./components/create-jobsite.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={WorkList} />
        <Route path="/edit/:id" component={EditWorkday} />
        <Route path="/create" component={CreateWorkday} />
        <Route path="/user" component={CreateWorker} />
        <Route path="/createjobsite" component={CreateJobsite} />
      </div>
    </Router>
  );
}

export default App;
