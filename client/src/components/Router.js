import {BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import LogIn from './Pages/LogIn';
import MyPortfolio from './Pages/MyPortfolio';
import CoinDetails from './Pages/CoinDetails';
import TransactionForm from './Pages/NewTransaction';
import GlobalCurrencies from './Pages/GlobalCurrencies';
import ErrorPage from './Pages/ErrorPage';

const CoinRouter = ({hello, coinDataDaily,portfolioData, liveCoinData}) => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element ={<LogIn portfolioData={portfolioData} liveCoinData={liveCoinData} />} />
        <Route path="/myportfolio" element={<MyPortfolio liveCoinData={liveCoinData} portfolioData={portfolioData}/>} />
        <Route path="/coin/:slug" element={<CoinDetails coinDataDaily={coinDataDaily}/>} />
        <Route path="/transactionform" element={<TransactionForm portfolioData={portfolioData} liveCoinData={liveCoinData}/>} />
        <Route path="/global" element={<GlobalCurrencies liveCoinData={liveCoinData} hello={hello} />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  );

}

export default CoinRouter;