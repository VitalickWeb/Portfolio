import React from 'react';
import st from './Project.module.css'

export type ProjectType = {
    id: string
    image: string
    view: string
    titleProject: string
    description: string
}
export type ProjectPropsType = {
    projects: Array<ProjectType>
}

export const Project = ({projects}: ProjectPropsType) => {

    const ProjectsRender = projects.map(p => {

        return (
            <div key={p.id} className={st.blockItems}>
                <div className={st.itemsProjects}>
                    <img src={p.image} alt="image project"/>
                    <div className={st.popupBlock}>
                        <div className={st.viewPopup}>
                            {p.view}
                        </div>
                    </div>
                </div>
                <div className={st.titleDescBlock}>
                    <div className={st.titleBlock}>
                        <span className={st.titleProjects}>{p.titleProject}</span>
                    </div>
                    <div className={st.descriptionProjects}>
                        <p className={st.description}>{p.description}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className={st.blockItemProjects}>
            {ProjectsRender}
        </div>
    );
};

