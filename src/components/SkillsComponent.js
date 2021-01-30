import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function SkillComponent(){
    const skills = [{
        name: "HTML5",
        knowledge: 100
    },
    {
        name: "CSS3",
        knowledge: 100
    },
    {
        name: "Javascript",
        knowledge: 80
    },
    {
        name: "ReactJs",
        knowledge: 70
    },
    {
        name: "Angular",
        knowledge: 30
    },
    {
        name: "PHP",
        knowledge: 60
    },
    {
        name: "NodeJs",
        knowledge: 40
    },
    {
        name: "Sql/MySql",
        knowledge: 75
    },
    {
        name: "Wordpress",
        knowledge: 80
    },
    {
        name: "Adobe Photoshop/Illustrator",
        knowledge: 80
    },
    {
        name: "Windows/Linux/MacOS",
        knowledge: 90
    }
    ]
    return(
        <div >
        {
            skills.map(skill => <div className="knowledgeBar"><ProgressBar label= {skill.name} animated now={skill.knowledge}/></div> )
        }        
        </div> 
        
    )
};