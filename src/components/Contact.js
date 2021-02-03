import React from "react";

export default function Contact(){
    const contact = {
        name: "Norman Claro",
        age: 35,
        mail: "norman.claro85@gmail.com",
        phone: "+5491151152663"
        
      };
    return(
        <div className="contact">
            <h2> {contact.name} </h2>
            <p> {contact.mail} </p>
            <p> {contact.phone} </p> 
            <a href="https://github.com/normanclaro/CV-repo" target= "_blank" className="linkRep" >Repository</a> 
        </div>
    )
};