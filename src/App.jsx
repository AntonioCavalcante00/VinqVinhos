import { Outlet } from "react-router-dom";
import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BackButton from "./components/layout/BackButton";

import s from './App.module.css'

function App() {
    return (
        <>
            <Header />

            <div className={s.Outlet}>
                <Outlet />
            </div>
            <BackButton />

            <Footer />
        </>
    )
}

export default App