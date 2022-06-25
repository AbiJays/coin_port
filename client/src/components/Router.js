import {BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import LogIn from './Pages/LogIn';
import MyPortfolio from './Pages/MyPortfolio';
import CoinDetails from './Pages/CoinDetails';
import TransactionForm from './Pages/NewTransaction';
import GlobalCurrencies from './Pages/GlobalCurrencies';
import ErrorPage from './Pages/ErrorPage';

const CoinRouter = ({hello, coinDataDaily}) => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element ={<LogIn />} />
        <Route path="/myportfolio" element={<MyPortfolio coinDataDaily={coinDataDaily}/>} />
        <Route path="/coin/:slug" element={<CoinDetails coinDataDaily={coinDataDaily}/>} />
        <Route path="/transactionform" element={<TransactionForm coinDataDaily={coinDataDaily} />} />
        <Route path="/global" element={<GlobalCurrencies coinDataDaily={coinDataDaily} hello={hello} />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  );

}

export default CoinRouter;