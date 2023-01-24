import React from 'react';
import st from './Main.module.css'
import stContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={st.greetingsBlock}>
            <div className={stContainer.container}>
                <div className={st.greetings}>
                    <span className={st.itemHi}>Hi there!</span>
                    <h2 className={st.itemName}>My name is Vitaliy Bokhan</h2>
                    <p className={st.itemPosition}>I am a frontend developer</p>
                </div>
                <div className={st.image}>
                    <img src="src/components/main/Main" alt=""/>
                </div>
            </div>
        </div>
    );
};

