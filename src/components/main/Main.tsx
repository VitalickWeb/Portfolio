import React from 'react';
import st from './Main.module.css'

export const Main = () => {
    return (
        <div className={st.mainGreetingsBlock}>
            <div className={st.containerMain}>

                <div className={st.containerGreetings}>
                    <div className={st.blockGreetings}>
                        <span className={st.greetings}>Greetings to all! </span>
                        <h1 className={st.itemName}>My name is Vitaliy Bokhan</h1>
                        <h2 className={st.itemPosition}>I'm a frontend developer</h2>
                    </div>
                    <div className={st.image}>
                        <img src="src/components/main/Main" alt="photo"/>
                    </div>
                </div>

                <div className={st.blockViewWorks}>
                    <a href="#projects" className={st.waveBtn}>
                        <span className={st.btnText}>view my projects</span>
                        <span className={st.waveBtnWaves}></span>
                    </a>
                </div>
            </div>
        </div>
    );
};

