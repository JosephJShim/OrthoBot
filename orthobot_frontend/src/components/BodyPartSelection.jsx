import { useNavigate } from "react-router-dom";

import { Title } from "./utilities/Title.jsx"
import { Text } from "./utilities/Text.jsx"
import { Button } from "./utilities/Button.jsx"
import background from "./bodybackground.jpeg"


export function BodyPartSelection() {
    const navigate = useNavigate();

    const containerStyles = {
        position: 'relative',
        // Original Image Dimension: 3902 x 3902 px
        width: '800px', // Adjust the container size according to your image
        height: '800px', // Adjust the container size according to your image
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
                        // Topleft: 346, 2100; Bottomright: 660, 2360
                        left: '71px',
                        top: '431px', 
                        width: '64px',
                        height: '53px',
                    }}
                    onClick={() => navigate("/questions/hand/0")}
                >
                    Hand
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Back; Left Hand
                        // Topleft: 2030, 2100; Bottomright: 2325, 2360
                        left: '416px',
                        top: '431px', 
                        width: '64px',
                        height: '53px',
                    }}
                    onClick={() => navigate("/questions/hand/0")}
                >
                    Hand
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Front; Right Hand
                        // Topleft: 1600, 2100; BottomRight: 1900, 2360
                        left: '328px',
                        top: '431px', 
                        width: '61px',
                        height: '53px',
                    }}
                    onClick={() => navigate("/questions/hand/0")}
                >
                    Hand
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Front; Right Hand
                        // Topleft: 3270, 2100; BottomRight: 3567, 2360
                        left: '670px',
                        top: '431px', 
                        width: '61px',
                        height: '53px',
                    }}
                    onClick={() => navigate("/questions/hand/0")}
                >
                    Hand
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Front; Left Wrist
                        // Topleft: 475, 1900; BottomRight: 660, 2050
                        left: '97px',
                        top: '390px', 
                        width: '38px',
                        height: '30px',
                    }}
                    onClick={() => navigate("/questions/wrist/0")}
                >
                    Wrist
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Back; Left Wrist
                        // Topleft: 2150, 1900; BottomRight: 2335, 2050
                        left: '441px',
                        top: '390px', 
                        width: '38px',
                        height: '30px',
                    }}
                    onClick={() => navigate("/questions/wrist/0")}
                >
                    Wrist
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Front; Right Wrist
                        // Topleft: 1560, 1900; BottomRight: 1800, 2050
                        left: '320px',
                        top: '390px', 
                        width: '49px',
                        height: '30px',
                    }}
                    onClick={() => navigate("/questions/wrist/0")}
                >
                    Wrist
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Back; Right Wrist
                        // Topleft: 3215, 1900; BottomRight: 3454, 2050
                        left: '659px',
                        top: '390px', 
                        width: '49px',
                        height: '30px',
                    }}
                    onClick={() => navigate("/questions/wrist/0")}
                >
                    Wrist
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Front; Left Elbow
                        // TopLeft: 512, 1400; BottomRight: 770, 1800
                        left: '105px',
                        top: '287px', 
                        width: '53px',
                        height: '82px',
                    }}
                    onClick={() => navigate("/questions/elbow/0")}
                >
                    Elbow
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Back; Left Elbow
                        // TopLeft: 2180, 1400; BottomRight: 2438, 1800
                        left: '447px',
                        top: '287px', 
                        width: '53px',
                        height: '82px',
                    }}
                    onClick={() => navigate("/questions/elbow/0")}
                >
                    Elbow
                </button>


                <button
                    style={{
                        ...buttonStyles,
                        // Front; Right Elbow
                        // TopLeft: 1450, 1400; BottomRight: 1700, 1800
                        left: '297px',
                        top: '287px', 
                        width: '53px',
                        height: '82px',
                    }}
                    onClick={() => navigate("/questions/elbow/0")}
                >
                    Elbow
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Back; Right Elbow
                        // TopLeft: 3130, 1400; BottomRight: 3388, 1800
                        left: '642px',
                        top: '287px', 
                        width: '53px',
                        height: '82px',
                    }}
                    onClick={() => navigate("/questions/elbow/0")}
                >
                    Elbow
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Front; Left Shoulder
                        // TopLeft: 600, 850; BottomRight: 900, 1120  
                        left: '123px',
                        top: '174px', 
                        width: '61px',
                        height: '55px',
                    }}
                    onClick={() => navigate("/questions/shoulder/0")}
                >
                    Shoulder
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Back; Left Shoulder
                        // TopLeft: 2270, 850; BottomRight: 2582, 1120  
                        left: '465px',
                        top: '174px', 
                        width: '61px',
                        height: '55px',
                    }}
                    onClick={() => navigate("/questions/shoulder/0")}
                >
                    Shoulder
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Front; Right Shoulder
                        // TopLeft: 1330, 850; BottomRight: 900, 1120  
                        left: '273px', 
                        top: '174px',
                        width: '61px',
                        height: '55px',
                    }}
                    onClick={() => navigate("/questions/shoulder/0")}
                >
                    Shoulder
                </button>

                <button
                    style={{
                        ...buttonStyles,
                        // Front; Right Shoulder
                        // TopLeft: 3050, 850; BottomRight: 3347, 1120  
                        left: '625px', 
                        top: '174px',
                        width: '61px',
                        height: '55px',
                    }}
                    onClick={() => navigate("/questions/shoulder/0")}
                >
                    Shoulder
                </button>
               
            </div>


            {/*
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
            </div> */}
        </>
    )
}