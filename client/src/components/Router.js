import {BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import LogIn from './Pages/LogIn';
import MyPortfolio from './Pages/MyPortfolio';
import CoinDetails from './Pages/CoinDetails';
import TransactionForm from './Pages/NewTransaction';
import GlobalCurrencies from './Pages/GlobalCurrencies';
import ErrorPage from './Pages/ErrorPage';

const CoinRouter = ({hello, loginStatus, coinDataDaily,portfolioData, liveCoinData, addTransaction, dbData, getUsernameAttempt, getPasswordAttempt, handleLoginAttempt}) => {
  // console.log('Router', availableCoins);
  console.log('Login', loginStatus)
  return (
    <BrowserRouter>
       {loginStatus &&
      <div className='header'>
       <NavBar />
       <a href="/">Logout</a>
      </div>}
      <Routes>
        <Route exact path="/" element ={<LogIn portfolioData={portfolioData} liveCoinData={liveCoinData} getUsernameAttempt={getUsernameAttempt} getPasswordAttempt={getPasswordAttempt} handleLoginAttempt={handleLoginAttempt}/>} />
        <Route path="/myportfolio" element={<MyPortfolio liveCoinData={liveCoinData} portfolioData={portfolioData}/>} />
        <Route path="/coin/:slug" element={<CoinDetails portfolioData={portfolioData} liveCoinData={liveCoinData}/>} />
        <Route path="/transactionform" element={<TransactionForm portfolioData={portfolioData} liveCoinData={liveCoinData} addTransaction={addTransaction} dbData={dbData} />} />
        <Route path="/global" element={<GlobalCurrencies liveCoinData={liveCoinData} portfolioData={portfolioData} hello={hello} />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  );

}

export default CoinRouter;