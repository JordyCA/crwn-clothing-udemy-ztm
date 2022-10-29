//** Libraries */
import { Routes, Route } from 'react-router-dom';

//** Components */
import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';

const Shop = () => {
  return <h1>I'm the shop page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/> 
        <Route path='/shop' element={<Shop />}/>
      </Route>
    </Routes>
  );
}

export default App;
