import { Routes } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import { AppContainer } from './styles/reset';
function App() {
  return (
    <AppContainer className="App">
      <Header />
      <Routes></Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;
