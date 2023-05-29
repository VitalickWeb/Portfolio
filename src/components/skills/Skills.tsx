import React from 'react';
import st from './Skills.module.css'
import {Skill} from "./skill/Skill";
import Title from "../common/components/title/title";

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
                <Title title="Skills"/>

                <Skill
                    skills={skills}
                />

            </div>
        </div>
    );
};

