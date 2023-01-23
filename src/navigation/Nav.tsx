import React from 'react';
import st from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={st.blockNav}>
            <a href="">main</a>
            <a href="">skills</a>
            <a href="">projects</a>
            <a href="">contacts</a>
        </div>
    );
};
