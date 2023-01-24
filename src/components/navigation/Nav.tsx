import React from 'react';
import st from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={st.blockNav}>
            <a href="src/components/navigation/Nav">main</a>
            <a href="src/components/navigation/Nav">skills</a>
            <a href="src/components/navigation/Nav">projects</a>
            <a href="src/components/navigation/Nav">contacts</a>
        </div>
    );
};
