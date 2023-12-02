import { Outlet } from 'react-router-dom';

import { Header } from "./components/NavBar/Header";
import Footer from "./components/NavBar/Footer";
import BackButton from "./components/layout/BackButton";
import AgeConfirm from './components/layout/AgeConfirm';

import { useState } from 'react';

import s from './App.module.css'

function App() {

    const [showAgeConfirm, setShowAgeConfirm] = useState(true);

    const handleAgeConfirmClose = () => {
        setShowAgeConfirm(false);
    }

    return (
        <>
            <Header />

            {showAgeConfirm && (
                <AgeConfirm onClose={handleAgeConfirmClose} />
            )}

            <div className={s.Outlet}>
                <Outlet />
            </div>
            <BackButton />

            <Footer />
        </>
    )
}

export default App