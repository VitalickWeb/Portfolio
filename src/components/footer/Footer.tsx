import React from 'react';
import st from "./Footer.module.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";


export const Footer = () => {
    return (
        <div className={st.blockFooter}>
            <div className={st.containerFooter}>
                <div className={st.itemsBlock}>
                    <div className={st.blockTitle}>
                        <h2 className={st.itemTitle}>Vitaliy Bokhan</h2>
                    </div>
                    <div className={st.blocksSocialIcons}>
                        <a href={'#'} className={st.socialIcon}>
                            <span className={st.telegramIcon}>
                                <FontAwesomeIcon icon={faTelegram} className={st.telegramIcon}/>
                            </span>
                        </a>
                        <a href={'#'} className={st.socialIcon}>
                            <span className={st.linkedinIcon}>
                                <FontAwesomeIcon icon={faLinkedin} className={st.linkedinIcon}/>
                            </span>
                        </a>
                        <a href={'#'} className={st.socialIcon}>
                            <span className={st.githubIcon}>
                                <FontAwesomeIcon icon={faGithub} className={st.githubIcon}/>
                            </span>
                        </a>
                        <a href={'#'} className={st.socialIcon}>
                            <span className={st.envelopeIcon}>
                                <FontAwesomeIcon icon={faEnvelope} className={st.envelopeIcon}/>
                            </span>
                        </a>
                    </div>
                    <div className={st.license}>
                        <p className={st.copyright}>© 2023 All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

