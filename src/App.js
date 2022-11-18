import './App.css';
import { Routes , Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogDetail from'./pages/BlogDetail';
import Profile from './pages/Profile';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <div className='brand'>Website Wahyu</div>
      <nav className='nav'>
          <Link to='/' className='nav-item'>Home</Link>
          <Link to='/blog' className='nav-item'>Blog</Link>
          <Link to='/profile' className='nav-item'>Profile</Link>
          <Link to='/contact' className='nav-item'>Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='blog' element={<Blog/>} />
        <Route path='blog/:id' element={<BlogDetail/>} />
        <Route path='profile' element={<Profile/>} />
        <Route path='contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
