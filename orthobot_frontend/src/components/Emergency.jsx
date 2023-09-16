import { Text } from "./utilities/Text.jsx"
import { InnerNavBar } from "./utilities/InnerNavBar.jsx";

export function Emergency() {
    return (
        <>
            <InnerNavBar />

            <div className="text-red-500 text-5xl text-left">
                EMERGENCY
            </div>

            <Text justification="text-left">
                Based on your responses, we suggest visiting an emergency room, immediate care center, or a doctor. Please call 911 or make an appointment with your nearest care provider.
            </Text>
        </>
    )
}