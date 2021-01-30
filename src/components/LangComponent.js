import React from "react";

export default function LangComponent(){
    const Languages = [{
        lang: "Spanish",
        exp: "Native"
    },
    {
        lang: "English",
        exp: "Advanced"
    },
    {
        lang: "Italian",
        exp: "Basic"
    }
    ]
    return(
        <div>
        {
            Languages.map(language => <h4> {language.lang}: {language.exp} </h4>)
        }
        
        </div>
    )
};