import { Outlet } from 'react-router-dom';

import { NavBar } from "./components/NavBar.jsx";

export function App() {
  return (
    <>
        <header>
            <NavBar />
        </header>
        <main>
            <div className='flex flex-row justify-center'>
                <Outlet />
            </div>
        </main>
    </>
  )
}
