import React from 'react';
import st from "./Skill.module.scss";

export type SkillType = {
    id: string
    image: string
    titleSkill: string
}
export type SkillPropsType = {
    skills: Array<SkillType>
}

export const Skill = ({skills}: SkillPropsType) => {

    const skillsRender = skills.map(s => {

        return (
            <div key={s.id} className={st.blockItems}>
                <div className={st.itemsSkills}>
                    <div className={st.icons}>
                        <img src={s.image} alt="skill"/>
                    </div>
                    <div className={st.titleBlock}>
                        <h3 className={st.titleSkills}>{s.titleSkill}</h3>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className={st.blockItemSkills}>
            <div className={st.itemSkills}>
                {skillsRender}
            </div>
        </div>
    );
};

