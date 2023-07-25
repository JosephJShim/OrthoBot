import { useNavigate } from "react-router-dom";
import { Button } from "./utilities/Button";

export function FooterBar() {
    const navigate = useNavigate();

    return (
        <>
            <div className="fixed bottom-0 left-0 w-full">
                <div className="flex flex-row gap-x-[20px] items-center relative bg-violet-600 w-full h-[60px]">
                    <div className="w-0"></div>
                    <Button color="blue" handleClick={() => navigate("/")}>
                        Restart
                    </Button>
                    <div className="flex-auto"></div>
                    <Button color="red" handleClick={() => navigate("/emergency")}>
                        I have an emergency
                    </Button>
                    <div className="w-0"></div>
                </div>
            </div>
            <div className="w-full h-[75px]"></div>
        </>
    )
}