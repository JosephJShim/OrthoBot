import { useNavigate } from "react-router-dom";

import { Title } from "./utilities/Title.jsx"
import { Text } from "./utilities/Text.jsx"
import { Button } from "./utilities/Button.jsx"

export function Disclaimer() {
    const navigate = useNavigate();

    return (
        <>
            <Title>
                Welcome to OrthoBot
            </Title>

            <h2 className="text-red-500 text-3xl font-bold">
                DISCLAIMER:
            </h2>

            <Text justification="text-left">
                If you think you have a medical emergency, please call 911 immediately or a doctor immediately. This app is not designed for facilitating medical emergencies.
            </Text>
            <Text justification="text-left">
                The purpose of this app is informational and should not be used as medical advice. The content of this app should not substitute a qualified health provider's advice or diagnosis.
            </Text>
            <Text justification="text-left">
                We are not liable for any claim, loss, or damage resulting from the app's use.
            </Text>
            <Text justification="text-left">
                By continuing, you agree to OrthoBot's terms and conditions.
            </Text>

            <div className="flex flex-row flex-wrap gap-x-[20px] gap-y-[30px] justify-center">
                <Button color="green" handleClick={() => navigate('/body_part_selection')}>
                    I agree
                </Button>
                <Button color="red" handleClick={() => navigate('/emergency')}>
                    I DO NOT agree / I have a medical emergency
                </Button>
            </div>
        </>
    )
}