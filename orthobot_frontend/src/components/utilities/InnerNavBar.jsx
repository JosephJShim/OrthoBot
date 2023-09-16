import { useNavigate } from "react-router-dom";

import { Button } from "./Button.jsx";

export function InnerNavBar() {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-row items-center gap-x-2">
                <button className={`hover:bg-slate-300 rounded-sm text-[#337588] font-bold text-xl px-1 py-0.5 w-fit min-w-fit`} onClick={() => navigate(-1)}>
                    Go Back
                </button>
                <div className="flex-auto"></div>
                <button className={`hover:bg-slate-300 rounded-sm text-[#337588] font-bold text-xl px-1 py-0.5 w-fit min-w-fit`} onClick={() => navigate("/")}>
                    Restart
                </button>
            </div>
        </>
    )
}