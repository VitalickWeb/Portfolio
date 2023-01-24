import React from 'react';
import stContainer from "../../common/styles/Container.module.css";
import st from "../Skills.module.css";

export const Skill = () => {
    return (
        <div className={stContainer.container}>
            <div className={st.blockTitle}>
                <h3 className={st.itemTitle}>My skills</h3>
            </div>
            <div className={st.blockItemSkills}>
                <div className={st.itemSkills}>

                </div>
                <div className={st.descriptionSkills}>

                </div>
            </div>
        </div>
    );
};

