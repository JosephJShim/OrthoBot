import { Title } from "./utilities/Title.jsx"
import { Text } from "./utilities/Text.jsx"
import { Button } from "./utilities/Button.jsx"
import { InnerNavBar } from "./utilities/InnerNavBar.jsx";

export function Imaging() {
    return (
        <>
            <InnerNavBar />

            <Title>
                Imaging
            </Title>

            <Text justification="text-left">
                Based on your responses, we would like you to have a get imaging of the impacted body part.
            </Text>

            <div className="flex flex-row justify-center w-full">
                <Button color="turquoise" handleClick={() => {}}>
                    Schedule an imaging appointment
                </Button>
            </div>
        </>
    )
}