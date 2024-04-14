import React from "react";



function BrokemonBattleButton({
    name,
    basePower,
    type,
    mon,
    onClick
}){
    return(
        <div data-power={basePower} 
                data-mon={mon}
                data-attack={name}
                data-type={type} 
                className={type+"Badge battle-button w-100"} 
                onClick={onClick}>
            {name}
        </div>
    )
}


export default BrokemonBattleButton