import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import Home from '../src/Pages/Home'

function App() {
  return (
    <main className=''>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />}/>
        </Routes>
    </main>
  );
}

export default App;
