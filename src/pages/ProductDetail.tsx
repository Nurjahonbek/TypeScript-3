import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  Typography,
  CardMedia,
  Button,
  Box,
  Container,
  CircularProgress,
} from '@mui/material';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

const ProductDetail: React.FC = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!product) return <Typography sx={{ textAlign: 'center', mt: 5 }}>Error</Typography>;

  return (
    <Container sx={{ marginTop: '30px' }}>
      <Card sx={{ display: 'flex', maxWidth: 900, boxShadow: 4, borderRadius: 2, overflow: 'hidden' }}>
        <CardMedia
          component="img"
          sx={{ width: '40%', objectFit: 'cover' }}
          image={`https://picsum.photos/seed/product-${product.id}/500/400`}
          alt={product.title}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: '20px', width: '60%' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: '"Lora", serif' }}>
            {product.title}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ marginTop: '10px' }}>
            Price: ${product.price}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '20px', fontSize: '1.1rem' }}>
            {product.description}
          </Typography>
          <Button variant="contained" color="primary" sx={{ marginTop: '30px', width: '200px' }}>
            Add to card
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default ProductDetail;
