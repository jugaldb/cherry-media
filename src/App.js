import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import Home from '../src/Pages/Home'
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <main className=''>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />}/>
        </Routes>
    </main>
  );
}

export default App;
