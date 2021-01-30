import React from "react";

export default function ExpComponent(){
    const Exps = [{
        nameJob: "Epson Argentina",
        timeWork: "April 2008/April 2017",
        text: "I have specialized in the repair of inkjet printers, matrix, projectors, TM and high-end equipment."
    }]

    return(
        <div >
        {
            Exps.map(exp => <div ><h3>{exp.nameJob}</h3>  <h4>{exp.timeWork}</h4><p>{exp.text}</p><hr/></div> )
        }        
        </div> 
        
    )
};