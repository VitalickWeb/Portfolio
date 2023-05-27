import React from 'react';
import st from './Skills.module.css'
import {Skill} from "./skill/Skill";

export type SkillsType = {
    id: string
    image: string
    titleSkill: string
    description: string
 }

export type SkillsPropsType ={
    skills: SkillsType[]
}

export const Skills = ({
                           skills
}: SkillsPropsType) => {


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

