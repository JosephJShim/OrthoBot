import { useNavigate } from "react-router-dom";
import { Button } from "./utilities/Button";

export function NavBar() {
    const navigate = useNavigate();

    return (
        <>
            <div className="fixed top-0 left-0 w-full">
                <div className="flex flex-row gap-x-[20px] items-center relative bg-violet-600 w-full h-[60px]">
                    <div className="w-0"></div>
                    <h1 className="text-white text-4xl font-bold">OrthoBot</h1>
                    <div className="flex-auto"></div>
                    <Button color="blue" handleClick={() => navigate("/")}>
                        Restart
                    </Button>
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