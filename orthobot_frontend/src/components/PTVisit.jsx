import { Title } from "./utilities/Title.jsx"
import { Text } from "./utilities/Text.jsx"
import { Button } from "./utilities/Button.jsx"
import { InnerNavBar } from "./utilities/InnerNavBar.jsx";

export function PTVisit() {
    return (
        <>
            <InnerNavBar />

            <Title>
                Physical Therapy
            </Title>

            <Text justification="text-left">
                Based on your responses, we would like you to have a virtual visit with a physical therapist.
            </Text>

            <div className="flex flex-row justify-center w-full">
                <Button color="turquoise" handleClick={() => {}}>
                    Schedule a physical therapy appointment
                </Button>
            </div>
        </>
    )
}