import { useNavigate } from "react-router-dom";

export function HeaderBar() {
    const navigate = useNavigate();

    return (
        <>
            <div className="fixed top-0 left-0 w-full shadow-xl">
                <div className="flex flex-row gap-x-[20px] items-center relative bg-[#615999] w-full h-[60px]">
                    <div className="w-0"></div>
                    <div className="h-[50%]" onClick={() => navigate("/")}>
                        <img className="h-full" src="https://www.nm.org/content/northwestern/img/northwestern-medicine-logo-white.png?v=20160601"></img>
                    </div>
                    <div className="flex-auto"></div>
                    <h1 className="text-white text-4xl font-extrabold">OrthoBot</h1>
                    <div className="w-0"></div>
                </div>
            </div>
        </>
    )
}