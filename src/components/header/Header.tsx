import React from 'react';
import st from './Header.module.css'
import {Nav} from '../navigation/Nav';
import stContainer from '../common/styles/Container.module.css'

export const Header = () => {
    return (
        <div className={st.blockHeader}>
            <div className={stContainer.container}>
                <h3 className={st.title}>Portfolio</h3>
                <Nav />
            </div>
        </div>
    );
};

