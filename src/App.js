import { Routes, Route } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './pages/Product/List';

import { AppContainer } from './styles/reset';

import Detail from './pages/Product/Detail';
import Order from './pages/Order';
import OrderDetails from './pages/Product/OrderDetails';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <AppContainer className="App">
      <Header />
      <Routes>
        <Route path="/fruit/:id" element={<Detail />} />
        <Route path="/fruit/:id/payment" element={<Order />} />
        <Route path="/fruit/:id/payment/detail" element={<OrderDetails />} />
        <Route path="/fruits" element={<List />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;
