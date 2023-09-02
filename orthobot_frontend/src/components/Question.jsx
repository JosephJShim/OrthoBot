import { useNavigate, useParams } from "react-router-dom"

import { Title } from "./utilities/Title.jsx";
import { Text } from "./utilities/Text.jsx";
import { Button } from "./utilities/Button.jsx";

import { questions } from "./questions.js";

export function Question() {
    const { body_part, question_id } = useParams();

    const navigate = useNavigate();

    return (
        <>
            <Title>
                {questions[body_part]["part"]}
            </Title>

            <Text justification="text-left">
                {questions[body_part]["questions"][question_id]["text"]}
            </Text>

            <div className="flex flex-row justify-center gap-x-[20px]">
                <Button color="blue" handleClick={() => navigate(questions[body_part]["questions"][question_id]["answers"][0]["forward_route"])}>
                    {questions[body_part]["questions"][question_id]["answers"][0]["text"]}
                </Button>

                <Button color="blue" handleClick={() => navigate(questions[body_part]["questions"][question_id]["answers"][1]["forward_route"])}>
                    {questions[body_part]["questions"][question_id]["answers"][1]["text"]}
                </Button>
            </div>
        </>
    )
}