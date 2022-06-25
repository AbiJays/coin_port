import {BrowserRouter, Routes, Route } from 'react-router-dom';

import LogIn from './Pages/LogIn';
import MyPortfolio from './Pages/MyPortfolio';
import CoinDetails from './Pages/CoinDetails';
import NewTransaction from './Pages/NewTransaction';
import GlobalCurrencies from './Pages/GlobalCurrencies';
import ErrorPage from './Pages/ErrorPage';

const CoinRouter = ({hello, coinDataDaily,timerTest}) => {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route exact path="/" element ={<LogIn timerTest={timerTest} />} />
        <Route path="/myportfolio" element={<MyPortfolio coinDataDaily={coinDataDaily}/>} />
        <Route path="/coin/:slug" element={<CoinDetails coinDataDaily={coinDataDaily}/>} />
        <Route path="/newtransaction" element={<NewTransaction coinDataDaily={coinDataDaily} />} />
        <Route path="/global" element={<GlobalCurrencies coinDataDaily={coinDataDaily} hello={hello} />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  );

}

export default CoinRouter;