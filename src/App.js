import { Routes, Route } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import { AppContainer } from './styles/reset';
import AdminPost from './pages/AdminPost';

function App() {
  return (
    <AppContainer className="App">
      <Header />
      <Routes>
        <Route path='/admin' element={<AdminPost />}/>
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;
