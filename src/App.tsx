import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {Hiring} from "./components/hiring/Hiring";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";
import {SkillType} from "./components/skills/skill/Skill";
import {v1} from "uuid";
import {ProjectType} from "./components/projects/project/Project";
import socialImage from './assets/images/projects/social-network.jpeg'
import todoImage from './assets/images/projects/todo-lists.jpeg'
import clockImage from './assets/images/projects/time-clock.jpeg'
import counterImage from './assets/images/projects/counter.jpeg'
import str404Image from './assets/images/projects/main-404.jpeg'


function App() {
    const [skills, setSkills] = useState<Array<SkillType>>([
        {id: v1(), image: "", titleSkill: "Semantic Html", description: "description for html"},
        {id: v1(), image: "", titleSkill: "Css/less/scss", description: "description for css"},
        {id: v1(), image: "", titleSkill: "Storybook", description: "description for css"},
        {id: v1(), image: "", titleSkill: "Js", description: "description for js"},
        {id: v1(), image: "", titleSkill: "React", description: "description for react"},
        {id: v1(), image: "", titleSkill: "Redux", description: "description for redux"},
        {id: v1(), image: "", titleSkill: "Type-script", description: "description for type-script"},
        {id: v1(), image: "", titleSkill: "Under study", description: "description of what will be studied"},
    ])

    const [projects, setProjects] = useState<Array<ProjectType>>([
        {id: v1(), image: `${todoImage}`, view: "View", titleProject: "Todo list", description: "description for Todo list"},
        {id: v1(), image: `${socialImage}`, view: "View", titleProject: "Social network", description: "description for Social network ehe4y3h634hweh364he6h63h6hrhtrhryhehryheryherhhrehreherhe3"},
        {id: v1(), image: `${clockImage}`, view: "View", titleProject: "Clock", description: "description for clock"},
        {id: v1(), image: `${counterImage}`, view: "View", titleProject: "Counter", description: "description for counter"},
        {id: v1(), image: `${str404Image}`, view: "View", titleProject: "In developing", description: "description of the future project"},
        {id: v1(), image: `${str404Image}`, view: "View", titleProject: "In developing", description: "description of the future project"},
    ])
console.log(projects.map(p => p.image))
    return (
        <div className="App">
            <Header />
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
