import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'

function Button({Favorite = false, ...props}){

    const [btnState, setBtnState] = useState(Favorite);

    let toggleClassCheck = btnState ? ' active' : ' desactive';
    let value = btnState ? -1 : 1;
    let prueba = props?.className;

    function handleClick(){
        setBtnState(btnState => !btnState);
        props.onClick(value);
    }
    
    return(
        <button 
        className={`btn${toggleClassCheck} ${prueba}`}
        onClick={handleClick}
        >
            <FaStar />
        </button>
    )
}

export default Button;