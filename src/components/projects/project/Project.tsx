import React from 'react';
import st from './Project.module.scss'

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
            <div id="projects" key={p.id} className={st.blockItems}>
                <div className={st.itemsProjects}>
                    <img src={p.image} className={st.backgroundImage} alt="image project"/>
                    <div className={st.popupBlock}>
                        <div className={st.viewPopup}>
                            <a href="">{p.view}</a>
                        </div>
                    </div>
                </div>
                <div className={st.titleDescBlock}>
                    <div className={st.titleBlock}>
                        <span className={st.title}>{p.titleProject}</span>
                    </div>
                    <div className={st.descriptionProjects}>
                        <div className={st.borderTop}></div>
                        <p className={st.description}>{p.description}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className={st.blockItemProjects}>
            <div className={st.itemProjects}>
                {ProjectsRender}
            </div>
        </div>
    );
};

