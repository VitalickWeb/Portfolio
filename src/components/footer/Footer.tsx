import React from 'react';
import st from "./Footer.module.css";

export const Footer = () => {
    return (
        <div className={st.blockFooter}>
            <div className={st.containerFooter}>
                <div className={st.itemsBlock}>
                    <div className={st.blockTitle}>
                        <h2 className={st.itemTitle}>Vitaliy Bokhan</h2>
                    </div>
                    <div className={st.blocksSocialIcons}>
                        <div className={st.socialIcon}></div>
                        <div className={st.socialIcon}></div>
                        <div className={st.socialIcon}></div>
                        <div className={st.socialIcon}></div>
                    </div>
                    <div className={st.license}>
                        <p className={st.copyright}>© 2023 All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

