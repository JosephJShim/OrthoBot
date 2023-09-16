import { Outlet } from 'react-router-dom';

import { HeaderBar } from "./components/HeaderBar.jsx";
import { FooterBar } from "./components/FooterBar.jsx";

export function App() {
    return (
        <>
            <header>
                <HeaderBar />
            </header>
            <main className="h-fit min-h-[90%]">
                <div className="w-full h-[75px]"></div>
                <div className="flex flex-row justify-center">
                    <div className="flex flex-col gap-y-[20px] w-[90%] max-w-[1500px] h-fit bg-white shadow-lg p-5">
                        <Outlet />
                    </div>
                </div>
                <div className="w-full h-[15px]"></div>
            </main>
        </>
    )
}
