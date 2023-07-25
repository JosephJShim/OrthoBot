import { Title } from "./utilities/Title.jsx"
import { Text } from "./utilities/Text.jsx"
import { Button } from "./utilities/Button.jsx"

export function PTVisit() {
    return (
        <>
            <Title>
                Physical Therapy
            </Title>

            <Text justification="text-justify">
                Based on your responses, we would like you to have a virtual visit with a physical therapist.
            </Text>

            <Button color="blue" handleClick={() => {}}>
                Schedule a physical therapy appointment
            </Button>
        </>
    )
}