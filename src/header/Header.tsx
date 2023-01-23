import React from 'react';
import st from './Header.module.css'
import {Nav} from "../navigation/Nav";

export const Header = () => {
    return (
        <div className={st.blockHeader}>
            <h3>Portfolio</h3>

            <Nav />
        </div>
    );
};

