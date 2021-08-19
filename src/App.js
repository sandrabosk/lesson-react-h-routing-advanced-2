import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ErrorPage from "./pages/ErrorPage";
import { Switch, Route } from "react-router-dom";
import HomePageWithRedirect from "./pages/HomePageWithRedirect";

import projectsData from './projects-data.json';     
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import QueryStringExample from "./pages/QueryStringExample";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/" component={HomePageWithRedirect} />
        <Route path="/about" component={AboutPage} />
        {/* <Route path="/projects" component={ProjectsPage} /> */}

        <Route
          exact
          path="/projects"
          render={(routeProps) => {
            return <ProjectsPage {...routeProps} projects={projectsData} />;
          }}
        />

        <Route 
          exact 
          path="/projects/:projectId" 
          component={ProjectDetailsPage} 
        />

        <Route 
          exact 
          path="/example" 
          component={QueryStringExample} 
        />

        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
