import React from 'react';
import { useNavigate } from 'react-router-dom';

function BodyPartSelection() {
    const navigate = useNavigate();

    const handleQuestion = (bodyPart) => {
        navigate('/question', bodyPart);
    };

    return (
        <div>
            <h1>Selection</h1>
            <p>Please select the relevant region of the body</p>
            <button onClick={() => handleQuestion('Foot')}>Foot</button>
            <button onClick={() => handleQuestion('AnkleKneeHip')}>Ankle/Knee/Hip</button>
            <button onClick={() => handleQuestion('Back')}>Back</button>
            <button onClick={() => handleQuestion('ShoulderElbow')}>Shoulder/Elbow</button>
            <button onClick={() => handleQuestion('WristHand')}>Wrist/Hand</button>            
        </div>
    );
}

export default BodyPartSelection;