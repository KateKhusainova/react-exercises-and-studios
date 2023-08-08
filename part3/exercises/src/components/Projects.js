import data from './../data.json';
import { useState } from 'react';

function MyProjects () {
    const [index, setIndex] = useState(0);
    const project = data.projects[index];
    function handleClick() {
        if (index < data.projects.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }
    return (
        <div>
            <h2>Recent Books Read:</h2>
            <button onClick={handleClick}>Next</button>
            <h3>{project.title} by {project.author}</h3>
            <p><a href={project.howToBuy}>You can buy here</a></p>
            <img src={project.cover}></img>
        </div>
    )
}

export default MyProjects;