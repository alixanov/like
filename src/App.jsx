import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Chat2 from './Components/ChatZero';
import History from './Components/History';
import LikePart from './Components/LikePart';
import MainTinder from './Components/mainTinder';
import Payment from './Components/Payment';
import Profile from './Components/Profile';
import StartPage from './Components/StartPage';
import Tarifs from './Components/Tarifs';

import './index.css';

import { Navigate } from 'react-router-dom';

import { useTelegram } from './hooks/use-telegram.hook';

const App = () => {
    const { tg } = useTelegram();

    useEffect(() => {
        if (tg && tg.initData.length > 0) {
            tg.isClosingConfirmationEnabled = true;

            tg.expand();
            tg.ready();
            tg.setHeaderColor('#9950DF');
            tg.disableVerticalSwipes();
        }
    }, []);

    return (
        <>
            {tg.initData.length === 1 ? (
                <div>неа</div>
            ) : (
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="/reactjs-js-template" />}
                        />
                        <Route
                            path="/reactjs-js-template"
                            element={<StartPage />}
                        />
                        <Route path="/history" element={<History />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/tarifs" element={<Tarifs />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/heart" element={<MainTinder />} />
                        <Route
                            path="/guests"
                            element={<LikePart tab="guests" />}
                        />
                        <Route path="/chat" element={<Chat2 />} />
                        <Route
                            path="*"
                            element={<Navigate to="/reactjs-js-template" />}
                        />
                    </Routes>
                </BrowserRouter>
            )}
        </>
    );
};

export default App;
