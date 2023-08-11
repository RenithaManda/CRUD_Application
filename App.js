//import logo from './logo.svg';
import './App.css';
import './Components/AddEdit.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Routes,Route} from 'react';
import Home from './Components/Home';
import AddEdit from './Components/AddEdit';


function App() {
  return (
    <div className="App">
      <ToastContainer position='top-center'/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addedit' element={<AddEdit/>}/>
          <Route path='/update/:id' elemant={<AddEdit/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
