import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import ErrorPage from './pages/404Error';
import Blog from './pages/Blog';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='projects' element={<Projects />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='blog' element={<Blog />} />
                    <Route path='terms' element={<Terms />} />
                    <Route path='privacy-policy' element={<Privacy />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
