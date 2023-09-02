import { Title } from "./utilities/Title.jsx"
import { Text } from "./utilities/Text.jsx"
import { Button } from "./utilities/Button.jsx"

export function RiceInstructions() {
    return (
        <>
            <Title>
                Suggestions
            </Title>

            <Text justification="text-left">
                Based on your responses, we suggest the use of the RICE (Rest Ice Compress Elevate) method, hospital observation, or physical therapy.
            </Text>

            <div className="flex flex-col items-center gap-y-[30px]">
                <Button color="blue" handleClick={() => { }}>
                    View RICE instructions
                </Button>
                <Button color="blue" handleClick={() => { }}>
                    Find observation locations
                </Button>
                <Button color="blue" handleClick={() => { }}>
                    Schedule a physical therapy appointment
                </Button>
            </div>
        </>
    )
}