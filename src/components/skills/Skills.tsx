import React, {useState} from 'react';
import st from './Skills.module.css'
import {Skill, SkillType} from "./skill/Skill";
import {v1} from "uuid";

export const Skills = () => {
    const [skills, setSkills] = useState<Array<SkillType>>([
        {id: v1(), image: "", titleSkill: "React", description: "description for react"},
        {id: v1(), image: "", titleSkill: "Type-script", description: "description for type-script"},
        {id: v1(), image: "", titleSkill: "Redux", description: "description for redux"},
        {id: v1(), image: "", titleSkill: "Css", description: "description for css"},
    ])

    return (
        <div className={st.skillsBlockCommon}>
            <div className={st.containerSkills}>
                <div className={st.blockTitle}>
                    <h2 className={st.itemTitle}>My skills</h2>
                </div>
                <Skill
                    skills={skills}
                />
            </div>
        </div>
    );
};

