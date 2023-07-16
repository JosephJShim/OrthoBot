import React from 'react';
import { useNavigate } from 'react-router-dom';


function Disclaimer(){
    const navigate = useNavigate();

    const handleAgree = () => {
        navigate('/body-part-selection'); 
    };

    const handleDisagree = () => {
        navigate('/emergency');
    };

    return (
        
        <div>
            <h1>Question:</h1>
            <p>"placeholder"</p>
            
            <button onClick={handleAgree}> Yes</button>
            <button onClick={handleDisagree}> No</button>
        </div>
    )
}

export default Disclaimer;