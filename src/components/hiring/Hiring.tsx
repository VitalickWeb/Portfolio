import React from 'react';
import st from './Hiring.module.scss'
import bgHireMe from '../../assets/images/bgImage/bg-programmirovanie.jpeg'

export const Hiring = () => {

    return (
        <div className={st.commonBlockHiring}>
            <img src={bgHireMe} className={st.backgroundImage} alt=""/>

            <div className={st.blockTitle}>
                <h2 className={st.itemTitle}>Interested in working with me?</h2>
                <div className={st.button}>
                    <button>Hire me!</button>
                </div>
            </div>

            <div className={st.boxBorders}>
                <span className={st.borderVertical}></span>
                <span className={st.horizonteBorder}></span>
            </div>
        </div>
    );
};

