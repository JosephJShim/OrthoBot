import { Title } from "./utilities/Title.jsx"
import { Text } from "./utilities/Text.jsx"
import { Button } from "./utilities/Button.jsx"
import { InnerNavBar } from "./utilities/InnerNavBar.jsx";

export function RiceInstructions() {
    return (
        <>
            <InnerNavBar />

            <Title>
                Suggestions
            </Title>

            <Text justification="text-left">
                Based on your responses, we suggest the use of the RICE (Rest Ice Compress Elevate) method, hospital observation, or physical therapy.
            </Text>

            <div className="flex flex-col items-center gap-y-[30px]">
                <Button color="turquoise" handleClick={() => { }}>
                    View RICE instructions
                </Button>
                <Button color="turquoise" handleClick={() => { }}>
                    Find observation locations
                </Button>
                <Button color="turquoise" handleClick={() => { }}>
                    Schedule a physical therapy appointment
                </Button>
            </div>
        </>
    )
}