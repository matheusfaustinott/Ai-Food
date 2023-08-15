import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from '../HomePage';
import VendasPage from './VendasPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/home' element={<VendasPage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
