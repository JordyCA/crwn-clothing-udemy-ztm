//** Libraries */
import { Routes, Route } from 'react-router-dom';

//** Components */
import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import Shop from './routes/shop/shop.component.jsx';
import Checkout from './components/checkout/checkout.component.jsx';

//** Contexts */
import Authentication from './routes/authentication/authentication.component.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/> 
        <Route path='/shop' element={<Shop />}/>
        <Route path='/auth' element={<Authentication />} />
        <Route path='/checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
