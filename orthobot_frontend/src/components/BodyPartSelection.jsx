import { useNavigate } from "react-router-dom";

import { Title } from "./utilities/Title.jsx"
import { Text } from "./utilities/Text.jsx"
import { Button } from "./utilities/Button.jsx"

export function BodyPartSelection() {
    const navigate = useNavigate();

    return (
        <>
            <Title>
                Body Part Selection
            </Title>

            <Text justification="text-center">
                Please select the relevant region of the body from the options below.
            </Text>

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
            </div>
        </>
    )
}