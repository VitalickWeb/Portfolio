import React from 'react';
import st from './Projects.module.css'
import {Project} from "./project/Project";

export type ProjectsType = {
    id: string
    image: string
    view: string
    titleProject: string
    description: string
}

export type ProjectsPropsType = {
    projects: ProjectsType[]
}

export const Projects = ({projects}: ProjectsPropsType) => {


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

