import './App.css';
import Homepage from './Components/Homepage';
import { Route,Routes } from 'react-router-dom';
import Practice from './Components/Practice';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>} />
        {/* <Route path='/' element={<Practice/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
