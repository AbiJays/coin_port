import './App.css';

import {BrowserRouter, Routes, Route } from 'react-router-dom';

import LogIn from './Pages/LogIn';
import MyPortfolio from './Pages/MyPortfolio';
import CoinDetails from './Pages/CoinDetails';
import NewTransaction from './Pages/NewTransaction';
import GlobalCurrencies from './Pages/GlobalCurrencies';
import ErrorPage from './Pages/ErrorPage';

import LogicContainer from './LogicContainer';

function App() {
  return (
    <>
    {/* <h1>Here's the client</h1> */}
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element ={<LogIn />} />
        <Route path="/myportfolio" element={<MyPortfolio />} />
        <Route path="/coin/:slug" element={<CoinDetails />} />
        <Route path="/newtransaction" element={<NewTransaction />} />
        <Route path="/global" element={<GlobalCurrencies />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
    {/* <LogicContainer /> */}
    </>
  );
}

export default App;
