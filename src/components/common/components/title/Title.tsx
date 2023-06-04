import React from 'react';
import st from "./Title.module.css";

type TitlePropsType = {
    title: string
}

const Title = ({title}: TitlePropsType) => {

    return (
        <div className={st.title}>
            <h2>{title}</h2>
        </div>
    );
};

export default Title;