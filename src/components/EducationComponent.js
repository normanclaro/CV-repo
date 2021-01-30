import React from "react";

export default function EducationComponent(){
    const EducationComp = [
    {
        title: "Udemy",
        timeStudied: "2021",
        text: "Advanced and Object Oriented Javascript and ES6"
    },    
    {
        title: "IT Master",
        timeStudied: "2013",
        text: "Web Developer"
    },
    {
        title: "Escuela DaVinci",
        timeStudied: "2009-2010",
        text: "Web Developer"
    },
    {
        title: "Colegio Julio A Roca",
        timeStudied: "1999-2003",
        text: "High School"
    }
]

    return(
        <div >
        {
            EducationComp.map(edu => <div ><h3>{edu.title}</h3>  <h4>{edu.text}</h4><p>{edu.timeStudied}</p><hr/></div> )
        }        
        </div> 
        
    )
};