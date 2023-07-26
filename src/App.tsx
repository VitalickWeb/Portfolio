import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {Hiring} from "./components/hiring/Hiring";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";
import {Nav, NavType} from "./components/header/navigation/Nav";
import {SkillType} from "./components/skills/skill/Skill";
import {v1} from "uuid";

import {ProjectType} from "./components/projects/project/Project";
import socialImage from './assets/images/projects/social-network.jpeg'
import todoImage from './assets/images/projects/todo-lists.jpeg'
import clockImage from './assets/images/projects/time-clock.jpeg'
import counterImage from './assets/images/projects/counter.jpeg'
import str404Image from './assets/images/projects/main-404.jpeg'

import htmlIconImage from './assets/images/skills/logo-html5.jpeg'
import cssIconImage from './assets/images/skills/css-logo.jpeg'
import jsIconImage from './assets/images/skills/javascript-icon.jpeg'
import tsIconImage from './assets/images/skills/app-typescript.jpeg'
import reactIconImage from './assets/images/skills/React.jpeg'
import reduxIconImage from './assets/images/skills/redux-icon.jpg'
import sBookIconImage from './assets/images/skills/stroryBook-icon.jpeg'
import materialIconImage from './assets/images/skills/logo-material-ui.jpeg'



function App() {
    const [navigation, setNavigation] = useState<NavType[]>([
        {id: v1(), title: "main"},
        {id: v1(), title: "skills"},
        {id: v1(), title: "projects"},
        {id: v1(), title: "contacts"},
    ])

    const [skills, setSkills] = useState<SkillType[]>([
        {id: v1(), image:  `${htmlIconImage}`, titleSkill: "html"},
        {id: v1(), image: `${cssIconImage}`, titleSkill: "css/less/sass"},
        {id: v1(), image: `${jsIconImage}`, titleSkill: "JS"},
        {id: v1(), image: `${tsIconImage}`, titleSkill: "TS"},
        {id: v1(), image: `${reactIconImage}`, titleSkill: "React"},
        {id: v1(), image: `${reduxIconImage}`, titleSkill: "Redux"},
        {id: v1(), image: `${sBookIconImage}`, titleSkill: "Storybook"},
        {id: v1(), image: `${materialIconImage}`, titleSkill: "Material-UI"},
    ])

    const [projects, setProjects] = useState<ProjectType[]>([
        {id: v1(), image: `${todoImage}`, view: "View", titleProject: "Todo list", description: "description for Todo list"},
        {id: v1(), image: `${socialImage}`, view: "View", titleProject: "Social network", description: "description for Social network ehe4y3h634hweh364he6h63h6hrht3"},
        {id: v1(), image: `${clockImage}`, view: "View", titleProject: "Clock", description: "description for clock"},
        {id: v1(), image: `${counterImage}`, view: "View", titleProject: "Counter", description: "description for counter"},
        {id: v1(), image: `${str404Image}`, view: "View", titleProject: "In developing", description: "description of the future project"},
        {id: v1(), image: `${str404Image}`, view: "View", titleProject: "In developing", description: "description of the future project"},
    ])
// console.log(projects.map(p => p.image))
    return (
        <div className="App">
            <Header navigation={navigation}/>
            <Main />

            <Skills
                skills={skills}
            />

            <Projects
                projects={projects}
            />

            <Hiring />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
