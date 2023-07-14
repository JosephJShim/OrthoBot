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
            <h1>Welcome to Orthobot</h1>
            <p>DISCLAIMER:</p>
            <p>If you think you have a medical emergency, 
                please call 911 immediately or a doctor 
                immediately. This app is not designed for 
                facilitating medical emergencies. </p>
            <p>The purpose of this app is informational 
                and should not be used as medical advice. 
                The content of this app should not 
                substitute a qualified health provider's 
                advice or diagnosis. </p>
            <p>We are not liable for any claim, loss, or 
                damage resulting from the app's use.</p>
            <p>By continuing, you agree to Orthobot's terms 
                and conditions.</p>
            
            <button onClick={handleAgree}> I agree</button>
            <button onClick={handleDisagree}> I DO NOT agree / I have a medical emergency</button>
        </div>
    )
}

export default Disclaimer;