import React from 'react';
import st from './Projects.module.css'
import {Project} from "./project/Project";
import Title from "../common/components/title/title";

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
                <Title
                    title={"Projects"}
                />

                <Project
                    projects={projects}
                />

            </div>
        </div>
    );
};

