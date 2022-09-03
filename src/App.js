import { Routes, Route } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import { AppContainer } from './styles/reset';
import AdminPost from './pages/Admin/AdminPost';
import Detail from './pages/Product/Detail';

function App() {
  return (
    <AppContainer className="App">
      <Header />
      <Routes>
        <Route path='/admin' element={<AdminPost />}/>
        <Route path="/fruit/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;
