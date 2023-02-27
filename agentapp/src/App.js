import logo from './logo.svg';
import './App.css';
import CollapsibleNavBar from './copmpnent/Navbar/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './copmpnent/Home/Home';


function App() {
  return (
    <div className="d-flex flex-column site">
       <header>
        < CollapsibleNavBar/>
      </header>
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        
          
        </Routes>
      </main>
      <footer bg="dark" variant="dark" className="my-0">
        <div className="text-center ">All right is reserved</div>
      </footer>
    </div>
  );
}

export default App;
