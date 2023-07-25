import { Title } from "./utilities/Title.jsx"
import { Text } from "./utilities/Text.jsx"
import { Button } from "./utilities/Button.jsx"

export function Emergency() {
    return (
        <>
            <div className="text-red-500 text-5xl text-center">
                EMERGENCY
            </div>

            <Text justification="text-justify">
                Based on your responses, we suggest visiting an emergency room, immediate care center, or a doctor. Please call 911 or make an appointment with your nearest care provider.
            </Text>
        </>
    )
}