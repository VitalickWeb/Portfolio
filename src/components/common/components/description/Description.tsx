import React from 'react';
import st from "./Description.module.scss";

type DescriptionPropsType = {
    description: string
}

const Description = ({description}: DescriptionPropsType) => {
    return (
        <div className={st.descriptionBox}>
            <p className={st.description}>{description}</p>
        </div>
    );
};

export default Description;