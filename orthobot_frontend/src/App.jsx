import { Outlet } from 'react-router-dom';

import { HeaderBar } from "./components/HeaderBar.jsx";
import { FooterBar } from "./components/FooterBar.jsx";

export function App() {
    return (
        <>
            <header>
                <HeaderBar />
            </header>
            <main>
                <div className="flex flex-row justify-center">
                    <div className="flex flex-col gap-y-[20px] w-5/6 max-w-[750px] bg-white shadow-lg p-5">
                        <Outlet />
                    </div>
                </div>
            </main>
            <footer>
                <FooterBar />
            </footer>
        </>
    )
}
