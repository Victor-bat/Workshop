import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home-page/Home';
import About from './pages/about-page/About';
import Shop from './pages/shop-page/Shop';
import Contact from './pages/contact-page/Contact';

function App() {
    return (
        <div className="App">
            {/* nav section */}
            <nav className="navbar navbar-expand-lg navbar-light" >
                <Link className="navbar-brand" href="../index.html"><img src="../assets/images/3118563.png" alt="" className="navbar-img" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-page">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shop-page">Shop</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                                aria-expanded="false">
                                Services
                            </Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" href="#">Purchase</Link>
                                <Link className="dropdown-item" href="#">Set Up</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" href="#">Reviews</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact-page">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            
            <Routes>
                <Route path='' element={<Home/>}/>
                <Route path='about-page' element={<About/>}/>
                <Route path='shop-page' element={<Shop/>}/>
                <Route path='contact-page' element={<Contact/>}/>
            </Routes>
        </div>
    );
}

export default App;
