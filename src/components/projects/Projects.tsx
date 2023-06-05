import React from 'react';
import st from './Projects.module.scss'
import {Project} from "./project/Project";
import Title from "../common/components/title/Title";
import Description from "../common/components/description/Description";

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
                    <Title
                        title="Projects"
                    />
                    <Description
                        description="Tools that I used in these projects, you can see in the previous block."
                    />
                </div>

                <Project
                    projects={projects}
                />
            </div>

            <div className={st.boxBorders_2}>
                <span className={st.borderVertical_2}></span>
                <span className={st.horizonteBorder_2}></span>
            </div>
        </div>
    );
};

