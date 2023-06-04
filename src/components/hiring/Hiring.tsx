import React from 'react';
import st from './Hiring.module.css'


export const Hiring = () => {

    return (
        <div className={st.commonBlockHiring}>
            <div className={st.containerHiring}>
                <div className={st.blockTitle}>
                    <h2 className={st.itemTitle}>Considering remote work</h2>
                    <div className={st.button}>
                        <button>Hire me</button>
                    </div>
                </div>
            </div>

            <div className={st.boxBorders}>
                <span className={st.borderVertical}></span>
                <span className={st.horizonteBorder}></span>
            </div>
        </div>
    );
};

