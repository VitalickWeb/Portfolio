import React from 'react';
import st from './Skills.module.css'
import {Skill} from "./skill/Skill";
import Title from "../common/components/title/Title";
import Description from "../common/components/description/Description";

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
                    <Title
                        title="Skills"
                    />
                    <Description
                        description="My skills and tools that I use in web application development"
                    />
                </div>

                <Skill
                    skills={skills}
                />
            </div>

            <div className={st.boxBorders_1}>
                <span className={st.borderVertical_1}></span>
                <span className={st.horizonteBorder_1}></span>
            </div>
        </div>
    );
};

