import React, {useState } from 'react';

const Hint = props => {

    const [e,setE] = useState(null);
    
    const [i,setI] = useState(0);

    const ayuda = () =>{
        if (props.ayuda[i+1]!= null){
            setI(i+1);
        }
        setE(
            <div className="alert alert-info"> 
                <p>{props.ayuda[i]}</p>
            </div>
        )
        console.log(i);
        var incognita = "(3 * x) / ( 4 * y )";
        var c='*';
        console.log(incognita.replace(/[*]| /g, ""));
    }

    return(
        <div>
            <button 
                type="submit" 
                className="btn btn-outline-info"
                onClick={ayuda}
            >
                Hint
            </button>
            {e}
        </div>
    );

}

export default Hint;