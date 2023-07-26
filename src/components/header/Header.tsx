import React from 'react';
import st from './Header.module.scss'
import stContainer from '../common/styles/Container.module.css'
import {Nav} from "./navigation/Nav";

export type NavType = {
    id: string
    title: string
}

export type NavPropsType = {
    navigation: NavType[]
}

export const Header = ({navigation}: NavPropsType) => {
    return (
        <div className={st.blockHeader}>
            <div className={stContainer.container}>
                <h2 className={st.title}>Portfolio</h2>
                <nav>
                    <Nav
                        navigation={navigation}
                    />
                </nav>
            </div>
        </div>
    );
};

