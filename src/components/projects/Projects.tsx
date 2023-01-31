import React, {useState} from 'react';
import st from './Projects.module.css'
import {v1} from "uuid";
import {Project, ProjectType} from "./project/Project";

export const Projects = () => {
    const [projects, setProjects] = useState<Array<ProjectType>>([
        {id: v1(), image: "", view: "View", titleProject: "Todo list", description: "description for Todo list"},
        {id: v1(), image: "", view: "View", titleProject: "Social network", description: "description for Social network"},
        {id: v1(), image: "", view: "View", titleProject: "Clock", description: "description for clock"},
    ])

    return (
        <div className={st.blockProjects}>
            <div className={st.containerProjects}>
                <div className={st.blockTitle}>
                    <h2 className={st.itemTitle}>My Projects</h2>
                </div>
                <Project
                    projects={projects}
                />
            </div>
        </div>
    );
};

