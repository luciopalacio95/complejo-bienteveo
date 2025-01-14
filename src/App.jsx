import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import HomePage from './pages/Home';
import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
     <Router>
      <ScrollToTop/>
      <Header/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      {/*Agrega más rutas según tus necesidades */} 
      </Routes>
      <Footer/>
    </Router>
  );
 }

export default App
