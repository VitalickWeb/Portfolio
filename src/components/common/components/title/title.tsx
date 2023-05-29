import React from 'react';
import st from "../../../projects/Projects.module.css";

type TitlePropsType = {
    title: string
}

const Title = ({title}: TitlePropsType) => {
    return (
        <div className={st.blockTitle}>
            <h2 className={st.title}>{title}</h2>
        </div>
    );
};

export default Title;