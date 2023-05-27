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

function App() {
    const [skills, setSkills] = useState<Array<SkillType>>([
        {id: v1(), image: "", titleSkill: "Semantic Html", description: "description for html"},
        {id: v1(), image: "", titleSkill: "Css/less/scss", description: "description for css"},
        {id: v1(), image: "", titleSkill: "Storybook", description: "description for css"},
        {id: v1(), image: "", titleSkill: "Js", description: "description for js"},
        {id: v1(), image: "", titleSkill: "React", description: "description for react"},
        {id: v1(), image: "", titleSkill: "Redux", description: "description for redux"},
        {id: v1(), image: "", titleSkill: "Type-script", description: "description for type-script"},
    ])

    const [projects, setProjects] = useState<Array<ProjectType>>([
        {id: v1(), image: "", view: "View", titleProject: "Todo list", description: "description for Todo list"},
        {id: v1(), image: "", view: "View", titleProject: "Social network", description: "description for Social network"},
        {id: v1(), image: "", view: "View", titleProject: "Clock", description: "description for clock"},
        {id: v1(), image: "", view: "View", titleProject: "Counter", description: "description for counter"},
    ])

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
