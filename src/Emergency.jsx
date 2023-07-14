import React from 'react';
import { useNavigate } from 'react-router-dom';

function Emergency(){
    return (
        <div>
            <h1>Emergency Room</h1>
            <p>Based on your responses, we suggest visiting an emergency room, immediate care center, or a doctor. Please call 911 or locate and your near provider below and make an appointment.</p>
        </div>
    )
}

export default Emergency;