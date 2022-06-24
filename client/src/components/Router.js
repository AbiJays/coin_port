import {BrowserRouter, Routes, Route } from 'react-router-dom';

import LogIn from './Pages/LogIn';
import MyPortfolio from './Pages/MyPortfolio';
import CoinDetails from './Pages/CoinDetails';
import NewTransaction from './Pages/NewTransaction';
import GlobalCurrencies from './Pages/GlobalCurrencies';
import ErrorPage from './Pages/ErrorPage';

const CoinRouter = ({hello}) => {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route exact path="/" element ={<LogIn />} />
        <Route path="/myportfolio" element={<MyPortfolio />} />
        <Route path="/coin/:snail" element={<CoinDetails />} />
        <Route path="/newtransaction" element={<NewTransaction />} />
        <Route path="/global" element={<GlobalCurrencies  hello={hello} />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  );

}

export default CoinRouter;