// src/pages/ProjectDetailsPage.js

import projectsData from './../projects-data.json';
import { Link } from "react-router-dom"; 
import { useState, useEffect } from "react";

function ProjectDetailsPage(props) {
    // Method .find() returns the first found matching element,
    // or `null` if no matching element was found.
    
    // const foundProject = projectsData.find((projectObj) => {        //  <== ADD
    //  return projectObj._id === props.match.params.projectId;
    // });

    const [foundProject, setFoundProject] = useState(null);       // <== ADD

    // This effect depends on `props.match.params.projectId`.
    // It will run on initial render, and every time
    // the `props.match.params.projectId` updates.
    useEffect(() => {                                             // <== ADD
        const project = projectsData.find((projectObj) => {
            return projectObj._id === props.match.params.projectId;
        })

        if (project) setFoundProject(project);
    
    }, [props.match.params.projectId]);
    
  
  return (
    <div>
      <h1>Project Details</h1>
      {!foundProject && <h3>Project not found!</h3>} {/* <== ADD  */}

    {/*  ADD 👇 */}
    {foundProject && (
    <>
        <h2>{foundProject.name}</h2>
        <h3>Tech Stack: {foundProject.technologies}</h3>
        <p>{foundProject.description}</p>
        <Link to="/projects">Back</Link>
    </>
)}
    </div>
  )
}

export default ProjectDetailsPage;