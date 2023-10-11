import { useNavigate } from "react-router-dom";

import { Title } from "./utilities/Title.jsx"
import { Text } from "./utilities/Text.jsx"
import { Button } from "./utilities/Button.jsx"
import background from "./bodyBackground.jpg"


export function BodyPartSelection() {
    const navigate = useNavigate();

    const containerStyles = {
        position: 'relative',
        // Original Image Dimension: 1000 x 2400 px
        width: '1000px', // Adjust the container size according to your image
        height: '2400px', // Adjust the container size according to your image
        backgroundImage: `url(${background})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: 'cover',
    };

    const buttonStyles = {
        position: 'absolute',
        cursor: 'pointer',
        background: 'none', // Remove default background
        border: 'none',
        padding: '0',
        margin: '0',
        textAlign: 'center',
        fontSize: '14px',
        //color: 'transparent', // Make the text transparent
        outline: 'none', // Remove the button outline
    };

    return (
        <>
            <Title>
                Body Part Selection
            </Title>

            <Text justification="text-center">
                Please select the relevant region of the body from the options below.
            </Text>
            
            <div style={containerStyles}>
            
                {/* Position buttons over the image for each body part */}
                <button
                    style={{
                        ...buttonStyles,
                        // Front; Left Hand
                        // Topleft: 50, 1250; Bottomright: 230, 1500
                        left: '50px',
                        top: '1250px', 
                        width: '180px',
                        height: '250px',
                    }}
                    onClick={() => navigate("/questions/hand/0")}
                >
                    Hand
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Front; Right Hand
                        // Topleft: 775, 1250; BottomRight: 975, 1550
                        left: '775px',
                        top: '1250px', 
                        width: '200px',
                        height: '250px',
                    }}
                    onClick={() => navigate("/questions/hand/0")}
                >
                    Hand
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Front; Left Wrist
                        // Topleft: 125, 1150; BottomRight: 275, 1250
                        left: '125px',
                        top: '1150px', 
                        width: '150px',
                        height: '100px',
                    }}
                    onClick={() => navigate("/questions/wrist/0")}
                >
                    Wrist
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Front; Right Wrist
                        // Topleft: 750, 1150; BottomRight: 890, 1250
                        left: '750px',
                        top: '1150px', 
                        width: '240px',
                        height: '100px',
                    }}
                    onClick={() => navigate("/questions/wrist/0")}
                >
                    Wrist
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Front; Left Elbow
                        // TopLeft: 130, 850; BottomRight: 315, 1050
                        left: '130px',
                        top: '850px', 
                        width: '185px',
                        height: '200px',
                    }}
                    onClick={() => navigate("/questions/elbow/0")}
                >
                    Elbow
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Front; Right Elbow
                        // TopLeft: 700, 850; BottomRight: 870, 1050
                        left: '700px',
                        top: '850px', 
                        width: '170px',
                        height: '200px',
                    }}
                    onClick={() => navigate("/questions/elbow/0")}
                >
                    Elbow
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Front; Left Shoulder
                        // TopLeft: 190, 515; BottomRight: 375, 675  
                        left: '190px',
                        top: '515px', 
                        width: '185px',
                        height: '160px',
                    }}
                    onClick={() => navigate("/questions/shoulder/0")}
                >
                    Shoulder
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Front; Right Shoulder
                        // TopLeft: 650, 515; BottomRight: 825, 675  
                        left: '650px', 
                        top: '515px',
                        width: '175px',
                        height: '160px',
                    }}
                    onClick={() => navigate("/questions/shoulder/0")}
                >
                    Shoulder
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Front; Hip
                        // TopLeft: 300, 1130; BottomRight: 715, 1300  
                        left: '300px', 
                        top: '1130px',
                        width: '415px',
                        height: '170px',
                    }}
                    onClick={() => navigate("/questions/hip/0")}
                >
                    Hip
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Front; Knees
                        // TopLeft: 330, 1575; BottomRight: 675, 1800  
                        left: '330px', 
                        top: '1575px',
                        width: '345px',
                        height: '225px',
                    }}
                    onClick={() => navigate("/questions/knee/0")}
                >
                    Knee
                </button>
               
                <button
                    style={{
                        ...buttonStyles,
                        // Front; Ankle
                        // TopLeft: 400, 2100; BottomRight: 615, 2190  
                        left: '400px', 
                        top: '2100px',
                        width: '215px',
                        height: '90px',
                    }}
                    onClick={() => navigate("/questions/ankle/0")}
                >
                    Ankle
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Front; Foot
                        // TopLeft: 350, 2190; BottomRight: 675, 2315  
                        left: '350px', 
                        top: '2190px',
                        width: '325px',
                        height: '125px',
                    }}
                    onClick={() => navigate("/questions/foot/0")}
                >
                    Feet
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Front; Neck
                        // TopLeft: 425, 425; BottomRight: 585, 480  
                        left: '425px', 
                        top: '425px',
                        width: '130px',
                        height: '55px',
                    }}
                    onClick={() => navigate("/questions/neck/0")}
                >
                    Neck
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Front; Back
                        // TopLeft: 375, 480; BottomRight: 650, 900  
                        left: '375px', 
                        top: '480px',
                        width: '275px',
                        height: '420px',
                    }}
                    onClick={() => navigate("/questions/back/0")}
                >
                    Back
                </button>
            </div>


            {
            <div className="flex flex-row flex-wrap gap-y-[70px] gap-x-[50px] justify-center">
                <div className="flex flex-col gap-y-[20px] items-center min-w-[100px]">
                    <Button color="blue" handleClick={() => navigate("/questions/hand/0")}>
                        Hand
                    </Button>
                    <Button color="blue" handleClick={() => navigate("/questions/wrist/0")}>
                        Wrist
                    </Button>
                    <Button color="blue" handleClick={() => navigate("/questions/elbow/0")}>
                        Elbow
                    </Button>
                </div>
                <div className="flex flex-col gap-y-[20px] items-center min-w-[100px]">
                    <Button color="blue" handleClick={() => navigate("/questions/shoulder/0")}>
                        Shoulder
                    </Button>
                    <Button color="blue" handleClick={() => navigate("/questions/neck/0")}>
                        Neck
                    </Button>
                    <Button color="blue" handleClick={() => navigate("/questions/back/0")}>
                        Back
                    </Button>
                </div>
                <div className="flex flex-col gap-y-[20px] items-center min-w-[100px]">
                    <Button color="blue" handleClick={() => navigate("/questions/hip/0")}>
                        Hip
                    </Button>
                    <Button color="blue" handleClick={() => navigate("/questions/knee/0")}>
                        Knee
                    </Button>
                </div>
                <div className="flex flex-col gap-y-[20px] items-center min-w-[100px]">
                    <Button color="blue" handleClick={() => navigate("/questions/ankle/0")}>
                        Ankle
                    </Button>
                    <Button color="blue" handleClick={() => navigate("/questions/foot/0")}>
                        Foot
                    </Button>
                </div>
            </div> }
        </>
    )
}