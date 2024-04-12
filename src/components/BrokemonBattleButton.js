import React from "react";



function BrokemonBattleButton({
    name,
    basePower,
    type,
    onClick
}){
    return(
        <div data-power={basePower} data-type={type} className={type+"Badge battle-button w-100"} onClick={onClick}>
            {name}
        </div>
    )
}


export default BrokemonBattleButton