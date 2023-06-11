import React from 'react';
import st from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={st.blockNav}>
            <a href="src/components/header/navigation/Nav">main</a>
            <a href="src/components/header/navigation/Nav">skills</a>
            <a href="src/components/header/navigation/Nav">projects</a>
            <a href="src/components/header/navigation/Nav">contacts</a>
        </div>
    );
};
