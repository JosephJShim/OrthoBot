import { createBrowserRouter } from "react-router-dom";

import { App } from "./App.jsx";
import { BodyPartSelection } from "./components/BodyPartSelection.jsx";
import { Disclaimer } from "./components/Disclaimer.jsx";
import { Emergency } from "./components/Emergency.jsx";
import { PTVisit } from "./components/PTVisit.jsx";
import { Question } from "./components/Question.jsx";
import { RiceInstructions } from "./components/RiceInstructions.jsx";
import { Imaging } from "./components/Imaging.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Disclaimer />,
            },
            {
                path: "emergency",
                element: <Emergency />,
            },
            {
                path: "body_part_selection",
                element: <BodyPartSelection />,
            },
            {
                path: "questions/:body_part/:question_id",
                element: <Question />,
            },
            {
                path: "results/:body_part/visit_er",
                element: <Emergency />,
            },
            {
                path: "results/:body_part/visit_pt",
                element: <PTVisit />,
            },
            {
                path: "results/:body_part/rice_observe_pt",
                element: <RiceInstructions />,
            },
            {
                path: "results/:body_part/imaging",
                element: <Imaging />,
            },
        ],
    },
]);

export default router;

/*

! URL ROUTING

/                                       <-- disclaimer page (root)
/emergency                              <-- direct emergency page
/body_part_selection                    <-- body selection page
/question/:body_part_id/:question_id    <-- question page
/results/:body_part_id/visit_pt         <-- pt visit prompt page
/results/:body_part_id/visit_er         <-- er visit prompt page
/results/:body_part_id/rice_observe_pt  <-- foot results page

* :body_part_id is one of ['foot', 'ankle', 'shoulder', etc...]
* :question_id is a number [0, 1, 2, etc...]

*/