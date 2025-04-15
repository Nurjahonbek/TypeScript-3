
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetail';
import { CssBaseline, Container } from '@mui/material';
import ResponsiveAppBar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <ResponsiveAppBar />
      <Container sx={{ marginTop: '20px' }}>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
