import React from "react"

type ButtonType = {
    children : string;
    colorScheme?: "orange" | "blue";
    size?:"sm"|"md"|"lg";
    onClick?: () => void;
};

function Button({children, colorScheme ="blue", size = "md", onClick,}: ButtonType){
    
    return(

     <button 
     className={`button ${colorScheme} ${size}`}
     onClick = {onClick}>
        {children}
    </button>
    );

}


export default Button;