import './App.css';
import { Routes, Route } from 'react-router';
import TestMocking from './components/TestMocking';
import AdminPost from './pages/AdminPost'

function App() {
  return (
    <div className="App">
      <TestMocking />
      <Routes>
        <Route path='/adminPost' element={<AdminPost/>}/>
      </Routes>
    </div>
  );
}

export default App;
