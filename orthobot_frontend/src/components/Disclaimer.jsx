import { useNavigate } from "react-router-dom";

import { Title } from "./utilities/Title.jsx"
import { Text } from "./utilities/Text.jsx"
import { Button } from "./utilities/Button.jsx"

export function Disclaimer() {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col gap-y-[20px] w-5/6 max-w-[750px]">
                <Title>
                    Welcome to OrthoBot
                </Title>

                <h2 className="text-red-500 text-3xl font-bold text-center">
                    DISCLAIMER:
                </h2>

                <Text>
                    If you think you have a medical emergency, please call 911 immediately or a doctor immediately. This app is not designed for facilitating medical emergencies.
                </Text>
                <Text>
                    The purpose of this app is informational and should not be used as medical advice. The content of this app should not substitute a qualified health provider's advice or diagnosis.
                </Text>
                <Text>
                    We are not liable for any claim, loss, or damage resulting from the app's use.
                </Text>
                <Text>
                    By continuing, you agree to OrthoBot's terms and conditions.
                </Text>

                <div className="h-[15px]"></div>
                <div className="flex flex-row gap-x-[20px] justify-center">
                    <Button color="green" onClick={() => navigate('/body_part_selection')}>
                        I agree
                    </Button>
                    <Button color="red" onClick={() => navigate('/emergency')}>
                        I DO NOT agree / I have a medical emergency
                    </Button>
                </div>
            </div>
        </>
    )
}