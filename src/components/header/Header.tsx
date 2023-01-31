import React from 'react';
import st from './Header.module.css'
import stContainer from '../common/styles/Container.module.css'
import {Nav} from "./navigation/Nav";


export const Header = () => {
    return (
        <div className={st.blockHeader}>
            <div className={stContainer.container}>
                <h2 className={st.title}>Portfolio</h2>
                <Nav />
            </div>
        </div>
    );
};

