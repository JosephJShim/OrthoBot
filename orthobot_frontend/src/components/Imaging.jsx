import { Title } from "./utilities/Title.jsx"
import { Text } from "./utilities/Text.jsx"
import { Button } from "./utilities/Button.jsx"

export function Imaging() {
    return (
        <>
            <Title>
                Imaging
            </Title>

            <Text justification="text-left">
                Based on your responses, we would like you to have a get imaging of the impacted body part.
            </Text>

            <Button color="blue" handleClick={() => {}}>
                Schedule an imaging appointment
            </Button>
        </>
    )
}