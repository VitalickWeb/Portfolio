import React from 'react';
import st from './Nav.module.scss'

export type NavType = {
    id: string
    title: string
}

export type NavPropsType = {
    navigation: NavType[]
}

export const Nav = ({navigation}: NavPropsType) => {

    let navRender = navigation.map(n => {
        return (
            <li key={n.id}>
                <a href="src/components/header/navigation/Nav">{n.title}</a>
            </li>
        )
    })

    return (
        <ul className={st.blockNav}>
            {navRender}
        </ul>
    );
};
